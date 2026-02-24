/**
 * 错题智避与记忆调度系统 - 前端核心逻辑
 * 本次迭代：沉浸式题库支持顺序插入、选项化正确答案
 */

const API_BASE = 'http://localhost:3002/api';

const App = {
    state: {
        modules: [],         
        allModulesCache: [], 
        dueQuestions: [],    
        stats: { due: 0, new: 0, reviewing: 0, mastered: 0 },
        filterGrade: 'all',
        filterSemester: 'all',
        
        questions: [],
        currentIndex: 0,
        correctCount: 0,
        originalTotal: 0,
        isAnswering: true,
        mode: 'normal',      
        editingModuleId: null,
        currentModule: null,
        currentSectionId: null,   
        currentSectionName: null,

        // 沉浸式题库管理器状态
        qmCurrentModule: null,
        qmCurrentSectionId: null,
        qmCurrentSectionName: null,
        qmQuestions: [] // 当前正在编辑的题目列表缓冲
    },

    elements: {
        app: document.getElementById('app'),
        views: { 
            home: document.getElementById('home-view'), 
            quiz: document.getElementById('quiz-view'), 
            result: document.getElementById('result-view'),
            questionManager: document.getElementById('question-manager-view') 
        },
        modals: { input: document.getElementById('input-mistake-modal'), bank: document.getElementById('mistake-bank-modal'), manage: document.getElementById('manage-modal'), mode: document.getElementById('mode-modal') },
        optionsContainer: document.getElementById('options-container')
    },

    async init() {
        this.bindEvents();
        this.bindFilters(); 
        await this.fetchModules();
        this.renderModules();
        await this.fetchDashboardData();
    },

    // 强力 LaTeX 渲染
    renderMath(containerId) {
        if (!window.MathJax || !window.MathJax.typesetPromise) { setTimeout(() => this.renderMath(containerId), 100); return; }
        const container = document.getElementById(containerId);
        if (container) {
            if (window.MathJax.typesetClear) window.MathJax.typesetClear([container]);
            window.MathJax.typesetPromise([container]).catch(err => console.error(err.message));
        }
    },

    // ==========================================
    // 0. 筛选与四级联动监听器
    // ==========================================
    bindFilters() {
        const gs = document.getElementById('filter-grade'), ss = document.getElementById('filter-semester');
        if (gs) gs.addEventListener('change', async (e) => { this.state.filterGrade = e.target.value; await this.fetchModules(); this.renderModules(); });
        if (ss) ss.addEventListener('change', async (e) => { this.state.filterSemester = e.target.value; await this.fetchModules(); this.renderModules(); });
        
        const ig = document.getElementById('input-grade'), is = document.getElementById('input-semester'), im = document.getElementById('mistake-module');
        if (ig) ig.addEventListener('change', () => this.updateInputModuleOptions());
        if (is) is.addEventListener('change', () => this.updateInputModuleOptions());
        if (im) im.addEventListener('change', () => this.updateInputSectionOptions()); 
    },

    async fetchDashboardData() { try { const res = await fetch(`${API_BASE}/mistakes/stats`); if (res.ok) { this.state.stats = (await res.json()).data; this.renderDashboard(); } } catch (e) {} },
    
    renderDashboard() {
        document.getElementById('due-count').innerText = this.state.stats.due || 0;
        document.getElementById('stat-new').innerText = this.state.stats.new || 0;
        document.getElementById('stat-reviewing').innerText = this.state.stats.reviewing || 0;
        document.getElementById('stat-mastered').innerText = this.state.stats.mastered || 0;
    },

    // ==========================================
    // 2. 错题手工录入与错题本
    // ==========================================
    async openInputModal() {
        document.getElementById('input-mistake-form').reset();
        document.getElementById('mistake-section').innerHTML = '<option value="">请先选择模块...</option>';
        this.toggleModal('input', true);
        try { const res = await fetch(`${API_BASE}/modules`); const data = await res.json(); if (data.success) { this.state.allModulesCache = data.data; this.updateInputModuleOptions(); } } catch (e) {}
    },
    updateInputModuleOptions() {
        const grade = document.getElementById('input-grade').value, semester = document.getElementById('input-semester').value, modSel = document.getElementById('mistake-module'), secSel = document.getElementById('mistake-section');
        let filtered = this.state.allModulesCache;
        if (grade) filtered = filtered.filter(m => m.info.grade === grade);
        if (semester) filtered = filtered.filter(m => m.info.semester === semester);
        modSel.innerHTML = '<option value="">请选择具体的模块...</option>'; secSel.innerHTML = '<option value="">请先选择模块...</option>';
        filtered.forEach(mod => modSel.innerHTML += `<option value="${mod.info.id}">${mod.info.title}</option>`);
    },
    updateInputSectionOptions() {
        const moduleId = document.getElementById('mistake-module').value, secSel = document.getElementById('mistake-section');
        secSel.innerHTML = '<option value="">请选择具体的小节...</option>';
        if (!moduleId) return;
        const mod = this.state.allModulesCache.find(m => m.info.id === moduleId);
        if (mod) {
            const mergedSections = {};
            if (mod.database) Object.keys(mod.database).forEach(k => mergedSections[k] = k);
            if (mod.sections) Object.entries(mod.sections).forEach(([k, v]) => mergedSections[k] = v);
            if (Object.keys(mergedSections).length === 0) return secSel.innerHTML = '<option value="">该模块暂无小节，请先到图谱管理中添加</option>';
            Object.entries(mergedSections).forEach(([secId, secName]) => secSel.innerHTML += `<option value="${secId}">${secName}</option>`);
        }
    },
    closeInputModal() { this.toggleModal('input', false); },
    async submitNewMistake() {
        const form = document.getElementById('input-mistake-form');
        if (!form.checkValidity()) return alert('请填写完整的必填项！(如果小节为空，请先前往图谱管理中创建小节)');
        
        const secSel = document.getElementById('mistake-section');
        const payload = {
            module_id: document.getElementById('mistake-module').value, section_id: secSel.value, section_name: secSel.options[secSel.selectedIndex]?.text || '', content: document.getElementById('mistake-content').value,
            options: [ document.getElementById('mistake-optA').value, document.getElementById('mistake-optB').value, document.getElementById('mistake-optC').value, document.getElementById('mistake-optD').value ],
            answer: document.getElementById('mistake-answer').value, point: document.getElementById('mistake-point').value, explanation: document.getElementById('mistake-explanation').value, source: 'manual'
        };
        try { await fetch(`${API_BASE}/mistakes`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); alert('成功存入错题本！自动进入艾宾浩斯复习计划。'); this.closeInputModal(); this.fetchDashboardData(); } catch (e) { alert('录入失败'); }
    },

    // ======== 错题本 ========
    async openMistakeBank() {
        this.toggleModal('bank', true);
        const container = document.getElementById('mistake-list-container');
        container.innerHTML = '<div class="text-center text-slate-400 py-10"><i class="fa-solid fa-spinner fa-spin text-2xl mb-2"></i><p>加载中...</p></div>';
        try {
            const res = await fetch(`${API_BASE}/mistakes`); const data = await res.json();
            if (data.data.length === 0) return container.innerHTML = '<div class="text-center text-slate-400 py-10">错题本空空如也，太棒了！</div>';
            let html = '<div class="space-y-4">';
            data.data.forEach(m => {
                const c = m.stage >= 4 ? 'text-emerald-500 bg-emerald-50' : m.stage > 0 ? 'text-blue-500 bg-blue-50' : 'text-red-500 bg-red-50';
                const tagText = m.section_name ? (m.point ? `${m.section_name} · ${m.point}` : m.section_name) : (m.point || '未分类');
                html += `<div class="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-4 justify-between hover:border-blue-200 transition-colors"><div class="flex-1 w-full overflow-hidden"><div class="flex items-center gap-2 mb-3"><span class="text-xs px-2 py-1 rounded font-bold ${c}">阶段 ${m.stage||0}</span><span class="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded truncate max-w-[200px] md:max-w-md math-content">${tagText}</span></div><div class="text-slate-800 font-medium math-content break-words leading-relaxed">${m.content}</div></div><div class="text-right min-w-[100px] bg-slate-50 p-3 md:bg-transparent md:p-0 rounded-xl"><div class="text-xs text-slate-400">下次复习</div><div class="font-bold text-slate-700">${new Date(m.next_review_time).toLocaleDateString()}</div><div class="text-xs text-red-400 mt-1">错 ${m.wrong_count||0} 次</div></div></div>`;
            });
            container.innerHTML = html + '</div>';
            this.renderMath('mistake-list-container');
        } catch (e) { container.innerHTML = '<div class="text-center text-red-400 py-10">获取失败</div>'; }
    },
    closeMistakeBank() { this.toggleModal('bank', false); },

    // ==========================================
    // 5. 图谱与题库渲染
    // ==========================================
    async fetchModules() {
        try {
            const url = new URL(`${API_BASE}/modules`);
            if (this.state.filterGrade !== 'all') url.searchParams.append('grade', this.state.filterGrade);
            if (this.state.filterSemester !== 'all') url.searchParams.append('semester', this.state.filterSemester);
            const res = await fetch(url);
            if ((await res).ok) this.state.modules = (await res.clone().json()).data;
        } catch (e) {}
    },

    renderModules() {
        const container = document.getElementById('chapter-list');
        if(!container) return; container.innerHTML = '';
        if (this.state.modules.length === 0) return container.innerHTML = '<div class="col-span-full text-center text-slate-400 py-12 bg-white rounded-3xl border border-dashed border-slate-200">当前条件下暂无图谱数据。</div>';

        this.state.modules.forEach((mod) => {
            const card = document.createElement('div');
            card.className = "bg-white rounded-3xl p-6 border border-slate-100 hover:border-indigo-300 hover:shadow-xl transition-all group relative flex flex-col justify-between";
            const mergedKeys = new Set([...Object.keys(mod.sections || {}), ...Object.keys(mod.database || {})]);
            
            card.innerHTML = `
                <div>
                    <div class="flex justify-between mb-4">
                        <span class="bg-indigo-50 text-indigo-600 text-xs px-3 py-1.5 rounded-lg font-bold">${mod.info.grade || '未定'} · ${mod.info.semester || '未定'}</span>
                        <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur rounded-lg p-1 shadow-sm absolute right-4 top-4 z-20">
                            <button onclick="App.openManageModal('${mod.info.id}')" class="w-8 h-8 rounded-md flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" title="编辑图谱结构"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button onclick="App.deleteModule('${mod.info.id}')" class="w-8 h-8 rounded-md flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors" title="删除该模块"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 mb-3 mt-2 flex items-start">
                        <i class="${mod.info.icon || 'fa-solid fa-book-open'} text-indigo-400 mt-1 mr-3"></i><span class="leading-snug math-content">${mod.info.title}</span>
                    </h3>
                    <p class="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-3 math-content">${mod.info.description || '暂无描述'}</p>
                    <div class="text-xs text-slate-400 font-medium mb-6"><i class="fa-solid fa-layer-group mr-1"></i>包含 ${mergedKeys.size} 个专项小节</div>
                </div>
                
                <div class="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-slate-100">
                    <button onclick="App.openQuestionManager('${mod.info.id}')" class="w-full bg-blue-50 text-blue-600 font-bold py-2.5 rounded-xl text-center text-sm transition-colors hover:bg-blue-600 hover:text-white flex items-center justify-center">
                        <i class="fa-solid fa-database mr-1.5"></i>题库管理
                    </button>
                    <button onclick="App.openModeSelection(App.state.modules.find(m => m.info.id === '${mod.info.id}'))" class="w-full bg-slate-50 text-slate-600 font-bold py-2.5 rounded-xl text-center text-sm transition-colors hover:bg-indigo-600 hover:text-white flex items-center justify-center group/btn">
                        进入排雷 <i class="fa-solid fa-arrow-right ml-1.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all"></i>
                    </button>
                </div>
            `;
            container.appendChild(card);
        });
        this.renderMath('chapter-list');
    },

    // ======== 壳管理 (增删改基础信息和小节名称) ========
    addSectionRow(secId = null, secName = '') {
        const list = document.getElementById('sections-list'), row = document.createElement('div');
        row.className = "flex items-center gap-2 section-row animate-slide-down";
        row.innerHTML = `<input type="hidden" class="section-id" value="${secId || 'sec_' + Date.now() + '_' + Math.floor(Math.random() * 1000)}"><input type="text" class="section-name flex-1 border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50 text-sm font-medium" placeholder="如: 1.1 基础概念" value="${secName}" required><button type="button" onclick="this.parentElement.remove()" class="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors"><i class="fa-solid fa-trash-can"></i></button>`;
        list.appendChild(row);
    },
    openManageModal(moduleId = null) {
        this.state.editingModuleId = moduleId;
        document.getElementById('sections-list').innerHTML = ''; 
        if (moduleId) {
            document.getElementById('manage-modal-title').innerHTML = '<i class="fa-solid fa-pen mr-2 text-blue-500"></i>编辑图谱模块';
            document.getElementById('sections-manage-area').classList.remove('hidden'); 
            const mod = this.state.modules.find(m => m.info.id === moduleId);
            if (mod) {
                document.getElementById('mod-title').value = mod.info.title || ''; document.getElementById('mod-desc').value = mod.info.description || ''; document.getElementById('mod-grade').value = mod.info.grade || '七年级'; document.getElementById('mod-semester').value = mod.info.semester || '上学期';
                const mergedSections = {};
                if (mod.database) Object.keys(mod.database).forEach(k => mergedSections[k] = k);
                if (mod.sections) Object.entries(mod.sections).forEach(([k, v]) => mergedSections[k] = v);
                if (Object.keys(mergedSections).length > 0) Object.entries(mergedSections).forEach(([secId, secName]) => this.addSectionRow(secId, secName));
                else this.addSectionRow(); 
            }
        } else {
            document.getElementById('manage-modal-title').innerHTML = '<i class="fa-solid fa-plus mr-2 text-blue-500"></i>新增图谱模块';
            document.getElementById('manage-form').reset(); document.getElementById('sections-manage-area').classList.add('hidden'); 
        }
        this.toggleModal('manage', true);
    },
    closeManageModal() { this.toggleModal('manage', false); this.state.editingModuleId = null; },
    async handleManageSubmit(e) {
        e.preventDefault(); 
        const payload = { info: { title: document.getElementById('mod-title').value, description: document.getElementById('mod-desc').value, grade: document.getElementById('mod-grade').value, semester: document.getElementById('mod-semester').value } };
        if (this.state.editingModuleId) {
            const sections = {}; document.querySelectorAll('.section-row').forEach(row => { const n = row.querySelector('.section-name').value.trim(); if (n) sections[row.querySelector('.section-id').value] = n; });
            payload.sections = sections;
            try { await fetch(`${API_BASE}/modules/${this.state.editingModuleId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); } catch (error) {}
        } else {
            try { await fetch(`${API_BASE}/modules`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); } catch (error) {}
        }
        this.closeManageModal(); await this.fetchModules(); this.renderModules();
    },
    async deleteModule(moduleId) {
        if (!confirm("⚠️ 确定要永久删除这个图谱模块吗？(其包含的所有小节和题库也将丢失)")) return;
        try { await fetch(`${API_BASE}/modules/${moduleId}`, { method: 'DELETE' }); await this.fetchModules(); this.renderModules(); } catch (error) {}
    },

    // ==========================================
    // 🌟 沉浸式题库管理器引擎 (QManager) 🌟
    // ==========================================
    openQuestionManager(moduleId) {
        const mod = this.state.modules.find(m => m.info.id === moduleId);
        if (!mod) return;
        this.state.qmCurrentModule = mod;
        document.getElementById('qm-module-title').innerText = mod.info.title;

        const sidebar = document.getElementById('qm-sidebar');
        sidebar.innerHTML = '';
        
        const mergedSections = {};
        if (mod.database) Object.keys(mod.database).forEach(k => mergedSections[k] = k);
        if (mod.sections) Object.entries(mod.sections).forEach(([k, v]) => mergedSections[k] = v);

        const secEntries = Object.entries(mergedSections);
        if (secEntries.length === 0) {
            sidebar.innerHTML = '<div class="text-xs text-slate-400 p-6 text-center bg-slate-50 rounded-xl m-2 border border-dashed border-slate-200">暂无小节<br>请先在卡片上点击【编辑】增加小节</div>';
            document.getElementById('qm-section-title').innerHTML = '<i class="fa-solid fa-hashtag text-slate-300 mr-2"></i>空模块';
            document.getElementById('qm-question-list').innerHTML = '';
            this.state.qmCurrentSectionId = null;
        } else {
            secEntries.forEach(([secId, secName], idx) => {
                const qCount = mod.database && mod.database[secId] ? mod.database[secId].length : 0;
                const btn = document.createElement('button');
                btn.className = `w-full text-left px-4 py-3.5 rounded-xl text-sm font-bold transition-all mb-1.5 flex justify-between items-center group ${idx === 0 ? 'bg-indigo-100 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`;
                btn.innerHTML = `<span class="truncate pr-2 math-content">${secName}</span> <span class="${idx === 0 ? 'bg-indigo-200 text-indigo-800' : 'bg-slate-200 text-slate-500'} text-[10px] px-2 py-0.5 rounded-full">${qCount}题</span>`;
                
                btn.onclick = () => {
                    Array.from(sidebar.children).forEach(c => {
                        c.className = "w-full text-left px-4 py-3.5 rounded-xl text-sm font-bold transition-all mb-1.5 flex justify-between items-center group text-slate-600 hover:bg-slate-100";
                        c.querySelector('span:last-child').className = "bg-slate-200 text-slate-500 text-[10px] px-2 py-0.5 rounded-full";
                    });
                    btn.className = "w-full text-left px-4 py-3.5 rounded-xl text-sm font-bold transition-all mb-1.5 flex justify-between items-center group bg-indigo-100 text-indigo-700 shadow-sm";
                    btn.querySelector('span:last-child').className = "bg-indigo-200 text-indigo-800 text-[10px] px-2 py-0.5 rounded-full";
                    this.qmSelectSection(secId, secName);
                };
                sidebar.appendChild(btn);
                if (idx === 0) this.qmSelectSection(secId, secName); 
            });
            this.renderMath('qm-sidebar');
        }
        
        this.toggleView('questionManager');
    },

    closeQuestionManager() {
        this.toggleView('home');
        this.state.qmCurrentModule = null;
        this.state.qmCurrentSectionId = null;
    },

    qmSelectSection(secId, secName) {
        this.state.qmCurrentSectionId = secId;
        this.state.qmCurrentSectionName = secName;
        document.getElementById('qm-section-title').innerHTML = `<i class="fa-solid fa-hashtag text-indigo-400 mr-2"></i><span class="math-content">${secName}</span>`;
        
        const mod = this.state.qmCurrentModule;
        let questions = [];
        if (mod.database && mod.database[secId]) {
            questions = JSON.parse(JSON.stringify(mod.database[secId])); 
        }
        this.state.qmQuestions = questions;
        this.qmRenderQuestions();
    },

    qmRenderQuestions() {
        const list = document.getElementById('qm-question-list');
        list.innerHTML = '';
        if (!this.state.qmQuestions || this.state.qmQuestions.length === 0) {
            list.innerHTML = '<div class="text-center text-slate-400 py-24 flex flex-col items-center"><i class="fa-solid fa-box-open text-5xl mb-4 opacity-20"></i><p class="font-bold mb-1">此小节暂时没有题目</p><p class="text-xs">点击右上角【插入新题】开始录入</p></div>';
            return;
        }

        this.state.qmQuestions.forEach((q, i) => {
            // 【核心兼容】: 将旧数据的任意答案格式，智能映射为 0,1,2,3 的选项索引
            let ansVal = '0';
            if (['0','1','2','3'].includes(String(q.answer))) {
                ansVal = String(q.answer);
            } else if (q.options && q.options.indexOf(q.answer) !== -1) {
                ansVal = String(q.options.indexOf(q.answer));
            } else if (['A', 'B', 'C', 'D'].includes(String(q.answer).toUpperCase())) {
                const map = {'A': '0', 'B': '1', 'C': '2', 'D': '3'};
                ansVal = map[String(q.answer).toUpperCase()];
            }

            list.innerHTML += `
                <div class="bg-white p-6 md:p-8 rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 qm-edit-card relative hover:border-indigo-300 transition-colors group" data-qid="${q.id || ''}">
                    <div class="flex justify-between items-center mb-6 border-b border-slate-50 pb-4">
                        <span class="bg-indigo-50 text-indigo-600 font-black px-4 py-1.5 rounded-lg text-sm tracking-wider">题目 ${i+1}</span>
                        <button type="button" onclick="App.qmDeleteQuestion(${i})" class="w-8 h-8 rounded-md flex items-center justify-center text-slate-300 hover:bg-red-50 hover:text-red-500 transition-colors" title="删除此题"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                    <div class="space-y-5">
                        <div>
                            <label class="text-xs font-bold text-slate-500 block mb-2">题干内容 <span class="font-normal text-slate-400">(支持 LaTeX 公式，如 $x^2$)</span></label>
                            <textarea class="qm-q-content w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 rounded-xl p-4 outline-none text-sm transition-all" rows="2">${q.question || q.content || ''}</textarea>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div class="flex items-center"><span class="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold mr-3 shrink-0">A</span><input class="qm-q-opt w-full border border-slate-200 focus:border-indigo-500 rounded-lg p-3 outline-none text-sm bg-white" value="${q.options && q.options[0] ? q.options[0] : ''}"></div>
                            <div class="flex items-center"><span class="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold mr-3 shrink-0">B</span><input class="qm-q-opt w-full border border-slate-200 focus:border-indigo-500 rounded-lg p-3 outline-none text-sm bg-white" value="${q.options && q.options[1] ? q.options[1] : ''}"></div>
                            <div class="flex items-center"><span class="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold mr-3 shrink-0">C</span><input class="qm-q-opt w-full border border-slate-200 focus:border-indigo-500 rounded-lg p-3 outline-none text-sm bg-white" value="${q.options && q.options[2] ? q.options[2] : ''}"></div>
                            <div class="flex items-center"><span class="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold mr-3 shrink-0">D</span><input class="qm-q-opt w-full border border-slate-200 focus:border-indigo-500 rounded-lg p-3 outline-none text-sm bg-white" value="${q.options && q.options[3] ? q.options[3] : ''}"></div>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-2">
                            <div>
                                <label class="text-xs font-bold text-slate-500 block mb-2">正确答案 <span class="text-emerald-500 font-normal ml-1">(选择对应选项)</span></label>
                                <select class="qm-q-ans w-full border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl p-3.5 outline-none font-bold text-emerald-700 bg-emerald-50/30 transition-all cursor-pointer">
                                    <option value="0" ${ansVal === '0' ? 'selected' : ''}>选项 A</option>
                                    <option value="1" ${ansVal === '1' ? 'selected' : ''}>选项 B</option>
                                    <option value="2" ${ansVal === '2' ? 'selected' : ''}>选项 C</option>
                                    <option value="3" ${ansVal === '3' ? 'selected' : ''}>选项 D</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-xs font-bold text-slate-500 block mb-2">解析说明 <span class="font-normal text-slate-400">(选填)</span></label>
                                <textarea class="qm-q-exp w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl p-3 outline-none text-sm" rows="1">${q.explanation || ''}</textarea>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        this.renderMath('qm-section-title');
    },

    qmAddQuestion() {
        if (!this.state.qmCurrentSectionId) return alert('请先在左侧选择一个小节！');
        // 【核心升级】使用 push 顺序插入到底部，编号从小到大递增
        this.state.qmQuestions.push({ id: 'q_' + Date.now() + Math.floor(Math.random()*1000), question: '', options: ['','','',''], answer: '0', explanation: '' });
        this.qmRenderQuestions();
        
        // 自动滚动到底部
        setTimeout(() => {
            const list = document.getElementById('qm-question-list');
            list.scrollTo({ top: list.scrollHeight, behavior: 'smooth' });
        }, 50);
    },

    qmDeleteQuestion(index) {
        if (!confirm('⚠️ 确定要删除这道题吗？')) return;
        this.state.qmQuestions.splice(index, 1);
        this.qmRenderQuestions();
    },

    async qmSaveQuestions() {
        if (!this.state.qmCurrentSectionId) return;
        
        const newQuestions = [];
        let hasError = false;
        
        document.querySelectorAll('.qm-edit-card').forEach(card => {
            const content = card.querySelector('.qm-q-content').value.trim();
            const opts = Array.from(card.querySelectorAll('.qm-q-opt')).map(input => input.value.trim());
            const answer = card.querySelector('.qm-q-ans').value; // 下拉框获取，永远是 0,1,2,3
            const exp = card.querySelector('.qm-q-exp').value.trim();
            
            if (!content) {
                hasError = true;
                card.classList.add('border-red-400', 'bg-red-50');
            } else {
                card.classList.remove('border-red-400', 'bg-red-50');
                newQuestions.push({
                    id: card.dataset.qid || 'q_' + Date.now() + Math.floor(Math.random()*1000),
                    question: content, content: content, // 兼容双字段
                    options: opts, answer: answer, explanation: exp,
                    point: this.state.qmCurrentSectionName || '本节题库'
                });
            }
        });

        if (hasError) return alert('⚠️ 检查不通过：请确保所有题目的【题干】已填写！');

        try {
            await fetch(`${API_BASE}/modules/${this.state.qmCurrentModule.info.id}/database/${this.state.qmCurrentSectionId}`, {
                method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newQuestions)
            });
            
            const statusEl = document.getElementById('qm-save-status');
            statusEl.classList.remove('hidden');
            setTimeout(() => statusEl.classList.add('hidden'), 2000);
            
            await this.fetchModules(); 
            this.state.qmCurrentModule = this.state.modules.find(m => m.info.id === this.state.qmCurrentModule.info.id);
            this.openQuestionManager(this.state.qmCurrentModule.info.id); 
        } catch (e) { alert('保存失败，请检查后端服务。'); }
    },

    // ==========================================
    // 答题排雷闭环引擎
    // ==========================================
    openModeSelection(module) {
        this.state.currentModule = module;
        document.getElementById('mode-modal-title').innerText = module.info.title;
        const list = document.getElementById('module-list');
        if (list) list.innerHTML = '';
        const mergedSections = {};
        if (module.database) Object.keys(module.database).forEach(k => mergedSections[k] = k);
        if (module.sections) Object.entries(module.sections).forEach(([k, v]) => mergedSections[k] = v);

        if (Object.keys(mergedSections).length > 0) {
            Object.entries(mergedSections).forEach(([key, title]) => {
                const count = module.database && module.database[key] ? module.database[key].length : 0;
                const btn = document.createElement('button');
                btn.className = "flex justify-between items-center p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all text-left bg-white w-full group/sec";
                btn.innerHTML = `<span class="font-bold text-slate-700 text-sm math-content group-hover/sec:text-blue-700 transition-colors">${title}</span><span class="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-full group-hover/sec:bg-blue-200 group-hover/sec:text-blue-800 transition-colors">${count} 题</span>`;
                btn.onclick = () => this.startModuleQuiz(key, title);
                list.appendChild(btn);
            });
            this.renderMath('module-list');
        } else { list.innerHTML = '<div class="text-sm text-slate-400 p-4 text-center border border-dashed rounded-xl">暂无专项小节，请先编辑添加</div>'; }
        this.toggleModal('mode', true);
    },

    closeModeModal() { this.toggleModal('mode', false); },

    generateQuizQuestions(module) {
        let allQuestions = [];
        if (!module.database) return [];
        Object.keys(module.database).forEach(cat => {
            const secName = (module.sections && module.sections[cat]) ? module.sections[cat] : cat;
            module.database[cat].forEach(q => { let options = [...q.options].sort(() => Math.random() - 0.5); allQuestions.push({...q, options, module_id: module.info.id, section_id: cat, section_name: secName}); });
        });
        return allQuestions.sort(() => Math.random() - 0.5);
    },

    startFullMode() { this.closeModeModal(); const mod = this.state.currentModule; this.state.mode = 'test'; this.state.questions = this.generateQuizQuestions(mod); this.state.originalTotal = this.state.questions.length; this.state.currentSectionId = null; this.launchQuizUI(mod.info.title + " (全真测试)"); },
    startQuickMode() { this.closeModeModal(); const mod = this.state.currentModule; this.state.mode = 'test'; this.state.questions = this.generateQuizQuestions(mod).slice(0, 15); this.state.originalTotal = this.state.questions.length; this.state.currentSectionId = null; this.launchQuizUI(mod.info.title + " (快速排雷)"); },
    startModuleQuiz(key, title) { 
        this.closeModeModal(); const mod = this.state.currentModule; this.state.mode = 'test'; 
        this.state.currentSectionId = key; this.state.currentSectionName = title;
        const raw = mod.database[key] || []; 
        this.state.questions = raw.map(q => ({...q, options: [...q.options].sort(() => Math.random() - 0.5), module_id: mod.info.id, section_id: key, section_name: title})).sort(() => Math.random() - 0.5); 
        this.state.originalTotal = this.state.questions.length; 
        this.launchQuizUI(title); 
    },

    async startReviewQuiz() {
        if (this.state.stats.due === 0) return alert("太棒了！今天的复习任务已经全部清空！");
        try { const res = await fetch(`${API_BASE}/mistakes/due`); this.state.questions = (await res.json()).data; this.state.mode = 'review'; this.state.originalTotal = this.state.questions.length; this.launchQuizUI("智能记忆复习"); } catch (err) {}
    },

    launchQuizUI(title) {
        this.state.currentIndex = 0; this.state.correctCount = 0; this.state.isAnswering = true;
        document.getElementById('chapter-tag').innerText = title; this.renderMath('chapter-tag');
        this.toggleView('quiz'); this.renderQuestion();
    },

    renderQuestion() {
        if (this.state.questions.length === 0) { alert("该区域暂无题目！"); return this.toggleView('home'); }
        const q = this.state.questions[this.state.currentIndex], cur = this.state.currentIndex + 1, total = this.state.questions.length;
        document.getElementById('question-counter').innerText = `${String(cur).padStart(2, '0')}/${total}`;
        document.getElementById('progress-bar').style.width = `${(cur / total) * 100}%`;
        document.getElementById('question-text').innerHTML = q.content || q.question;
        
        const optContainer = this.elements.optionsContainer; optContainer.innerHTML = '';
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = "option-btn w-full text-left p-5 rounded-xl bg-slate-50 text-slate-700 text-lg font-medium flex items-center group shadow-sm transition-all hover:bg-indigo-50 hover:border-indigo-200 border border-transparent";
            btn.innerHTML = `<span class="index-circle min-w-[32px] w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mr-4 text-sm font-bold transition-colors group-hover:bg-indigo-200 group-hover:text-indigo-700">${['A','B','C','D'][idx]}</span><span class="flex-1 math-content break-words">${opt}</span>`;
            btn.onclick = () => this.handleAnswer(idx, btn, q); optContainer.appendChild(btn);
        });
        document.getElementById('explanation-area').classList.add('hidden'); this.state.isAnswering = true;
        this.renderMath('question-text'); this.renderMath('options-container');
    },

    async handleAnswer(selectedIndex, btn, qData) {
        if (!this.state.isAnswering) return; this.state.isAnswering = false;
        const selectedText = qData.options[selectedIndex];
        const isCorrect = (String(selectedIndex) === String(qData.answer)) || (selectedText === qData.answer);
        
        if (isCorrect) { btn.classList.add('option-correct'); this.state.correctCount++; }
        else {
            btn.classList.add('option-wrong');
            Array.from(this.elements.optionsContainer.children).forEach((b, i) => { if (String(i) === String(qData.answer) || qData.options[i] === qData.answer) b.classList.add('option-correct'); });
        }

        if (this.state.mode === 'review') {
            try { await fetch(`${API_BASE}/mistakes/${qData.id}/process`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isCorrect }) }); } catch (e) {}
        } else if (this.state.mode === 'test' && !isCorrect) {
            const payload = { module_id: qData.module_id || (this.state.currentModule ? this.state.currentModule.info.id : ''), section_id: qData.section_id || '', section_name: qData.section_name || '', content: qData.question || qData.content, options: qData.options, answer: qData.answer, point: qData.point || '系统排雷发现', explanation: qData.explanation || '暂无解析', source: 'test' };
            try { await fetch(`${API_BASE}/mistakes`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); } catch (e) {}
        }

        const feedback = isCorrect ? `<div class="mb-3 text-emerald-500 font-bold flex items-center text-lg"><i class="fa-solid fa-check-double mr-2"></i>回答正确！${this.state.mode === 'review' ? '记忆深度+1' : ''}</div>` : `<div class="mb-3 text-rose-500 font-bold flex items-center text-lg"><i class="fa-solid fa-triangle-exclamation mr-2"></i>回答错误${this.state.mode === 'review' ? '，重新进入复习周期' : '，已自动录入错题本'}</div>`;
        document.getElementById('explanation-text').innerHTML = feedback + `<div class="mt-2 text-slate-600 math-content leading-relaxed">${qData.explanation || '暂无解析'}</div>`;
        document.getElementById('explanation-area').classList.remove('hidden'); this.renderMath('explanation-area');
        
        document.getElementById('next-btn').innerHTML = this.state.currentIndex === this.state.questions.length - 1 ? '完成任务 <i class="fa-solid fa-flag-checkered ml-2"></i>' : '下一题 <i class="fa-solid fa-arrow-right ml-2"></i>';
    },

    nextStep() { if (this.state.currentIndex < this.state.questions.length - 1) { this.state.currentIndex++; this.renderQuestion(); } else { this.showResult(); } },
    showResult() {
        this.toggleView('result');
        document.getElementById('final-score').innerText = `${this.state.correctCount} / ${this.state.originalTotal}`;
        document.getElementById('review-advice').innerHTML = this.state.mode === 'review' ? `<div class='p-4 bg-indigo-50 text-indigo-700 rounded-xl font-bold'>本次复习任务完成！记忆曲线已更新。</div>` : `<div class='p-4 bg-emerald-50 text-emerald-700 rounded-xl font-bold'>排雷测试完成！做错的题目已自动加入错题本。</div>`;
        this.fetchDashboardData(); 
    },

    toggleView(v) { Object.values(this.elements.views).forEach(el => { if(el) el.classList.add('hidden'); }); if(this.elements.views[v]) this.elements.views[v].classList.remove('hidden'); },
    toggleModal(modalName, show) { const modal = this.elements.modals[modalName]; if(!modal) return; if(show) { modal.classList.remove('hidden'); modal.classList.add('flex'); } else { modal.classList.add('hidden'); modal.classList.remove('flex'); } },

    bindEvents() {
        const nextBtn = document.getElementById('next-btn'), exitBtn = document.getElementById('exit-btn'), backHomeBtn = document.getElementById('back-home-btn'), manageForm = document.getElementById('manage-form');
        if(nextBtn) nextBtn.onclick = () => this.nextStep();
        if(exitBtn) exitBtn.onclick = () => { this.toggleView('home'); this.fetchDashboardData(); };
        if(backHomeBtn) backHomeBtn.onclick = () => { this.toggleView('home'); this.fetchDashboardData(); };
        if(manageForm) manageForm.onsubmit = (e) => this.handleManageSubmit(e);
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());