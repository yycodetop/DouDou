/**
 * 错题智避与记忆调度系统 - 前端核心逻辑 (全功能终极版)
 * 包含：三级联动录入、全量错题本、自动排雷、图谱CRUD、以及强力LaTeX渲染引擎
 */

const API_BASE = 'http://localhost:3002/api';

const App = {
    state: {
        modules: [],         
        allModulesCache: [], // 用于录入弹窗的三级联动缓存
        dueQuestions: [],    
        stats: { due: 0, new: 0, reviewing: 0, mastered: 0 },
        filterGrade: 'all',
        filterSemester: 'all',
        
        // 答题与模式状态
        questions: [],
        currentIndex: 0,
        correctCount: 0,
        originalTotal: 0,
        wrongPoints: [],
        isAnswering: true,
        mode: 'normal',      
        editingModuleId: null,
        currentModule: null  
    },

    elements: {
        app: document.getElementById('app'),
        views: {
            home: document.getElementById('home-view'),
            quiz: document.getElementById('quiz-view'),
            result: document.getElementById('result-view')
        },
        modals: {
            input: document.getElementById('input-mistake-modal'),
            bank: document.getElementById('mistake-bank-modal'),
            manage: document.getElementById('manage-modal'),
            mode: document.getElementById('mode-modal')
        },
        chapterList: document.getElementById('chapter-list'),
        optionsContainer: document.getElementById('options-container')
    },

    async init() {
        this.bindEvents();
        this.bindFilters(); 
        await this.fetchModules();
        this.renderModules();
        await this.fetchDashboardData();
    },

    // ==========================================
    // 🌟 强力 LaTeX 公式渲染引擎 (修复不渲染BUG)
    // ==========================================
    renderMath(containerId) {
        if (window.MathJax && window.MathJax.typesetPromise) {
            const container = document.getElementById(containerId);
            if (container) {
                // 核心修复：清除旧的渲染缓存标记，强制重新解析
                if (window.MathJax.typesetClear) {
                    window.MathJax.typesetClear([container]);
                }
                // 重新执行渲染
                window.MathJax.typesetPromise([container]).catch(function (err) {
                    console.error('MathJax 渲染失败:', err.message);
                });
            }
        }
    },

    // ==========================================
    // 0. 筛选与监听器
    // ==========================================
    bindFilters() {
        const gradeSelect = document.getElementById('filter-grade');
        const semesterSelect = document.getElementById('filter-semester');
        if (gradeSelect) gradeSelect.addEventListener('change', async (e) => {
            this.state.filterGrade = e.target.value;
            await this.fetchModules();
            this.renderModules();
        });
        if (semesterSelect) semesterSelect.addEventListener('change', async (e) => {
            this.state.filterSemester = e.target.value;
            await this.fetchModules();
            this.renderModules();
        });

        // 录入弹窗的三级联动监听
        const inputGrade = document.getElementById('input-grade');
        const inputSemester = document.getElementById('input-semester');
        if (inputGrade) inputGrade.addEventListener('change', () => this.updateInputModuleOptions());
        if (inputSemester) inputSemester.addEventListener('change', () => this.updateInputModuleOptions());
    },

    // ==========================================
    // 1. Dashboard 首页数据看板
    // ==========================================
    async fetchDashboardData() {
        try {
            const statsRes = await fetch(`${API_BASE}/mistakes/stats`);
            if (statsRes.ok) {
                const data = await statsRes.json();
                this.state.stats = data.data;
                this.renderDashboard();
            }
        } catch (error) {
            console.warn('获取看板数据失败', error);
        }
    },

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
        const moduleSelect = document.getElementById('mistake-module');
        moduleSelect.innerHTML = '<option value="">正在加载数据...</option>';
        this.toggleModal('input', true);

        try {
            // 拉取全量无筛选的图谱数据存入缓存
            const res = await fetch(`${API_BASE}/modules`);
            const data = await res.json();
            
            if (data.success) {
                this.state.allModulesCache = data.data;
                this.updateInputModuleOptions(); // 触发联动
            }
        } catch (error) {
            moduleSelect.innerHTML = '<option value="">加载失败，请检查网络</option>';
        }
    },

    updateInputModuleOptions() {
        const grade = document.getElementById('input-grade').value;
        const semester = document.getElementById('input-semester').value;
        const moduleSelect = document.getElementById('mistake-module');

        let filtered = this.state.allModulesCache;
        if (grade) filtered = filtered.filter(m => m.info.grade === grade);
        if (semester) filtered = filtered.filter(m => m.info.semester === semester);

        moduleSelect.innerHTML = '<option value="">请选择具体的模块...</option>';
        if (filtered.length === 0) {
            moduleSelect.innerHTML = '<option value="">该条件下暂无模块</option>';
            return;
        }

        filtered.forEach(mod => {
            moduleSelect.innerHTML += `<option value="${mod.info.id}">${mod.info.title}</option>`;
        });
    },

    closeInputModal() { this.toggleModal('input', false); },

    async submitNewMistake() {
        const form = document.getElementById('input-mistake-form');
        if (!form.checkValidity()) { alert('请填写完整的必填项！'); return; }

        const payload = {
            module_id: document.getElementById('mistake-module').value,
            content: document.getElementById('mistake-content').value,
            options: [
                document.getElementById('mistake-optA').value,
                document.getElementById('mistake-optB').value,
                document.getElementById('mistake-optC').value,
                document.getElementById('mistake-optD').value
            ],
            answer: document.getElementById('mistake-answer').value,
            point: document.getElementById('mistake-point').value,
            explanation: document.getElementById('mistake-explanation').value,
            source: 'manual'
        };

        try {
            await fetch(`${API_BASE}/mistakes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            alert('成功录入错题本！自动进入艾宾浩斯复习计划。');
            this.closeInputModal();
            this.fetchDashboardData(); 
        } catch (error) {
            alert('录入失败，请检查后端服务。');
        }
    },

    async openMistakeBank() {
        this.toggleModal('bank', true);
        const container = document.getElementById('mistake-list-container');
        container.innerHTML = '<div class="text-center text-slate-400 py-10"><i class="fa-solid fa-spinner fa-spin text-2xl mb-2"></i><p>加载中...</p></div>';

        try {
            const res = await fetch(`${API_BASE}/mistakes`);
            if (!res.ok) throw new Error('API Error');
            const data = await res.json();
            const mistakes = data.data;

            if (mistakes.length === 0) {
                container.innerHTML = '<div class="text-center text-slate-400 py-10">错题本空空如也，太棒了！</div>';
                return;
            }

            let html = '<div class="space-y-4">';
            mistakes.forEach(m => {
                const stageColor = m.stage >= 4 ? 'text-emerald-500 bg-emerald-50' : m.stage > 0 ? 'text-blue-500 bg-blue-50' : 'text-red-500 bg-red-50';
                const nextDate = new Date(m.next_review_time).toLocaleDateString();
                
                html += `
                    <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-start md:items-center hover:border-blue-200 transition-colors">
                        <div class="flex-1 w-full overflow-hidden">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="text-xs px-2 py-1 rounded font-bold ${stageColor}">阶段 ${m.stage || 0}</span>
                                <span class="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded truncate">${m.point || '未分类'}</span>
                            </div>
                            <div class="text-slate-800 font-medium leading-relaxed math-content break-words">${m.content}</div>
                        </div>
                        <div class="text-right min-w-[100px] mt-2 md:mt-0 bg-slate-50 p-3 rounded-xl border border-slate-100 md:border-none md:bg-transparent">
                            <div class="text-xs text-slate-400">下次复习</div>
                            <div class="font-bold text-slate-700">${nextDate}</div>
                            <div class="text-xs text-red-400 mt-1">错 ${m.wrong_count || 0} 次</div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            container.innerHTML = html;
            
            // 🎯 触发错题本容器的公式渲染 (带清除缓存功能)
            this.renderMath('mistake-list-container');
        } catch (error) {
            container.innerHTML = '<div class="text-center text-red-400 py-10">获取错题本失败，等待后端接口对接。</div>';
        }
    },

    closeMistakeBank() { this.toggleModal('bank', false); },

    // ==========================================
    // 3. 排雷模式 (Test) 与 组卷逻辑
    // ==========================================
    openModeSelection(module) {
        this.state.currentModule = module;
        document.getElementById('mode-modal-title').innerText = module.info.title;
        const list = document.getElementById('module-list');
        if (list) list.innerHTML = '';

        if (module.database) {
            const keys = Object.keys(module.database);
            keys.forEach(key => {
                let title = (module.sections && module.sections[key]) ? module.sections[key] : key;
                const count = module.database[key].length;
                const btn = document.createElement('button');
                btn.className = "flex justify-between items-center p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all text-left bg-white";
                btn.innerHTML = `<span class="font-bold text-slate-700 text-sm math-content">${title}</span><span class="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-full">${count} 题</span>`;
                btn.onclick = () => this.startModuleQuiz(key, title);
                list.appendChild(btn);
            });
            
            // 🎯 触发章节名称的公式渲染
            this.renderMath('module-list');
        }
        this.toggleModal('mode', true);
    },

    closeModeModal() { this.toggleModal('mode', false); },

    generateQuizQuestions(module) {
        let allQuestions = [];
        if (!module.database) return [];
        Object.keys(module.database).forEach(cat => {
            module.database[cat].forEach(q => {
                let options = [...q.options].sort(() => Math.random() - 0.5);
                allQuestions.push({...q, options, module_id: module.info.id});
            });
        });
        return allQuestions.sort(() => Math.random() - 0.5);
    },

    startFullMode() {
        this.closeModeModal();
        const mod = this.state.currentModule;
        this.state.mode = 'test';
        this.state.questions = this.generateQuizQuestions(mod);
        this.state.originalTotal = this.state.questions.length;
        this.launchQuizUI(mod.info.title + " (全真测试)");
    },

    startQuickMode() {
        this.closeModeModal();
        const mod = this.state.currentModule;
        this.state.mode = 'test';
        this.state.questions = this.generateQuizQuestions(mod).slice(0, 15);
        this.state.originalTotal = this.state.questions.length;
        this.launchQuizUI(mod.info.title + " (快速排雷)");
    },

    startModuleQuiz(key, title) {
        this.closeModeModal();
        const mod = this.state.currentModule;
        this.state.mode = 'test';
        const raw = mod.database[key] || [];
        this.state.questions = raw.map(q => ({...q, options: [...q.options].sort(() => Math.random() - 0.5), module_id: mod.info.id})).sort(() => Math.random() - 0.5);
        this.state.originalTotal = this.state.questions.length;
        this.launchQuizUI(title);
    },

    // ==========================================
    // 4. 复习闭环与核心答题引擎
    // ==========================================
    async startReviewQuiz() {
        if (this.state.stats.due === 0) {
            alert("太棒了！今天的复习任务已经全部清空！");
            return;
        }

        try {
            const res = await fetch(`${API_BASE}/mistakes/due`);
            const data = await res.json();
            this.state.questions = data.data;
            this.state.mode = 'review';
            this.state.originalTotal = this.state.questions.length;
            this.launchQuizUI("智能记忆复习");
        } catch (err) {
            alert("加载复习题失败，请检查后端服务。");
        }
    },

    launchQuizUI(title) {
        this.state.currentIndex = 0;
        this.state.correctCount = 0;
        this.state.isAnswering = true;
        
        document.getElementById('chapter-tag').innerText = title;
        // 🎯 确保标题里的公式也能渲染
        this.renderMath('chapter-tag');
        
        this.toggleView('quiz');
        this.renderQuestion();
    },

    renderQuestion() {
        if (this.state.questions.length === 0) {
            alert("暂无题目数据！");
            this.toggleView('home');
            return;
        }
        
        const q = this.state.questions[this.state.currentIndex];
        const cur = this.state.currentIndex + 1;
        const total = this.state.questions.length;
        
        document.getElementById('question-counter').innerText = `${String(cur).padStart(2, '0')}/${total}`;
        document.getElementById('progress-bar').style.width = `${(cur / total) * 100}%`;
        document.getElementById('question-text').innerHTML = q.content || q.question;
        
        const optContainer = this.elements.optionsContainer;
        optContainer.innerHTML = '';
        
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = "option-btn w-full text-left p-5 rounded-xl bg-slate-50 text-slate-700 text-lg font-medium flex items-center group shadow-sm transition-all hover:bg-indigo-50 hover:border-indigo-200 border border-transparent";
            btn.innerHTML = `<span class="index-circle min-w-[32px] w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mr-4 text-sm font-bold transition-colors group-hover:bg-indigo-200 group-hover:text-indigo-700">${['A','B','C','D'][idx]}</span><span class="flex-1 math-content break-words">${opt}</span>`;
            btn.onclick = () => this.handleAnswer(idx, btn, q);
            optContainer.appendChild(btn);
        });

        document.getElementById('explanation-area').classList.add('hidden');
        this.state.isAnswering = true;
        
        // 🎯 触发题干和选项的公式渲染
        this.renderMath('question-text');
        this.renderMath('options-container');
    },

    async handleAnswer(selectedIndex, btn, qData) {
        if (!this.state.isAnswering) return;
        this.state.isAnswering = false;

        const selectedText = qData.options[selectedIndex];
        const isCorrect = (String(selectedIndex) === String(qData.answer)) || (selectedText === qData.answer);
        
        if (isCorrect) {
            btn.classList.add('option-correct');
            this.state.correctCount++;
        } else {
            btn.classList.add('option-wrong');
            const btns = this.elements.optionsContainer.children;
            for (let i = 0; i < btns.length; i++) {
                if (String(i) === String(qData.answer) || qData.options[i] === qData.answer) {
                    btns[i].classList.add('option-correct');
                }
            }
        }

        // --- 与后端交互 ---
        if (this.state.mode === 'review') {
            try {
                await fetch(`${API_BASE}/mistakes/${qData.id}/process`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ isCorrect: isCorrect })
                });
            } catch (e) { console.error("同步复习结果失败", e); }
        } else if (this.state.mode === 'test' && !isCorrect) {
            const payload = {
                module_id: qData.module_id || (this.state.currentModule ? this.state.currentModule.info.id : ''),
                content: qData.question || qData.content,
                options: qData.options,
                answer: qData.answer,
                point: qData.point || '系统排雷发现',
                explanation: qData.explanation || '暂无解析',
                source: 'test'
            };
            try {
                await fetch(`${API_BASE}/mistakes`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
            } catch (e) { console.error("录入错题本失败", e); }
        }

        const feedback = isCorrect 
            ? `<div class="mb-3 text-emerald-500 font-bold flex items-center text-lg"><i class="fa-solid fa-check-double mr-2"></i>回答正确！${this.state.mode === 'review' ? '记忆深度+1' : ''}</div>` 
            : `<div class="mb-3 text-rose-500 font-bold flex items-center text-lg"><i class="fa-solid fa-triangle-exclamation mr-2"></i>回答错误${this.state.mode === 'review' ? '，重新进入复习周期' : '，已自动录入错题本'}</div>`;
            
        document.getElementById('explanation-text').innerHTML = feedback + `<div class="mt-2 text-slate-600 math-content leading-relaxed">${qData.explanation || '暂无解析'}</div>`;
        document.getElementById('explanation-area').classList.remove('hidden');
        
        // 🎯 触发解析区域的公式渲染
        this.renderMath('explanation-area');
        
        const isLast = this.state.currentIndex === this.state.questions.length - 1;
        document.getElementById('next-btn').innerHTML = isLast ? '完成任务 <i class="fa-solid fa-flag-checkered ml-2"></i>' : '下一题 <i class="fa-solid fa-arrow-right ml-2"></i>';
    },

    nextStep() {
        if (this.state.currentIndex < this.state.questions.length - 1) {
            this.state.currentIndex++;
            this.renderQuestion();
        } else {
            this.showResult();
        }
    },

    showResult() {
        this.toggleView('result');
        document.getElementById('final-score').innerText = `${this.state.correctCount} / ${this.state.originalTotal}`;
        
        if (this.state.mode === 'review') {
            document.getElementById('review-advice').innerHTML = `<div class='p-4 bg-indigo-50 text-indigo-700 rounded-xl font-bold'>本次复习任务完成！记忆曲线已更新。</div>`;
        } else {
            document.getElementById('review-advice').innerHTML = `<div class='p-4 bg-emerald-50 text-emerald-700 rounded-xl font-bold'>排雷测试完成！做错的题目已自动加入错题本，明天记得来复习哦。</div>`;
        }
        
        this.fetchDashboardData(); 
    },

    // ==========================================
    // 5. 图谱管理与渲染
    // ==========================================
    async fetchModules() {
        try {
            const url = new URL(`${API_BASE}/modules`);
            if (this.state.filterGrade !== 'all') url.searchParams.append('grade', this.state.filterGrade);
            if (this.state.filterSemester !== 'all') url.searchParams.append('semester', this.state.filterSemester);
            
            const res = await fetch(url);
            const data = await res.json();
            if (data.success) {
                this.state.modules = data.data;
            }
        } catch (e) {
            console.error("加载知识图谱失败", e);
        }
    },

    renderModules() {
        const container = document.getElementById('chapter-list');
        if(!container) return;
        container.innerHTML = '';
        
        if (this.state.modules.length === 0) {
            container.innerHTML = '<div class="col-span-full text-center text-slate-400 py-12 bg-white rounded-3xl border border-dashed border-slate-200">当前条件下暂无图谱数据，请点击右上角【图谱管理】新增。</div>';
            return;
        }

        this.state.modules.forEach((mod) => {
            const card = document.createElement('div');
            card.className = "bg-white rounded-3xl p-6 border border-slate-100 hover:border-indigo-300 hover:shadow-xl transition-all group relative cursor-pointer flex flex-col justify-between";
            card.onclick = () => this.openModeSelection(mod);
            
            card.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <span class="bg-indigo-50 text-indigo-600 text-xs px-3 py-1.5 rounded-lg font-bold">${mod.info.grade || '未定'} · ${mod.info.semester || '未定'}</span>
                        
                        <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur rounded-lg p-1 shadow-sm border border-slate-50 absolute right-4 top-4 z-20">
                            <button onclick="event.stopPropagation(); App.openManageModal('${mod.info.id}')" class="w-8 h-8 rounded-md flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" title="编辑该模块">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onclick="event.stopPropagation(); App.deleteModule('${mod.info.id}')" class="w-8 h-8 rounded-md flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors" title="删除该模块">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    
                    <h3 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors flex items-start mt-2">
                        <i class="${mod.info.icon || 'fa-solid fa-book-open'} text-indigo-400 mt-1 mr-3"></i>
                        <span class="leading-snug math-content">${mod.info.title}</span>
                    </h3>
                    <p class="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6 math-content">${mod.info.description || '暂无描述'}</p>
                </div>
                
                <div class="w-full bg-slate-50 text-slate-600 font-bold py-3 rounded-xl text-center text-sm transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                    进入排雷测试 <i class="fa-solid fa-arrow-right ml-1 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
            `;
            container.appendChild(card);
        });
        
        // 🎯 触发模块列表的公式渲染（防止模块标题或描述中含有公式）
        this.renderMath('chapter-list');
    },

    openManageModal(moduleId = null) {
        this.state.editingModuleId = moduleId;
        const form = document.getElementById('manage-form');
        const titleEl = document.getElementById('manage-modal-title');
        
        if (moduleId) {
            titleEl.innerHTML = '<i class="fa-solid fa-pen mr-2 text-blue-500"></i>编辑图谱模块';
            const mod = this.state.modules.find(m => m.info.id === moduleId);
            if (mod) {
                document.getElementById('mod-title').value = mod.info.title || '';
                document.getElementById('mod-desc').value = mod.info.description || '';
                document.getElementById('mod-grade').value = mod.info.grade || '七年级';
                document.getElementById('mod-semester').value = mod.info.semester || '上学期';
            }
        } else {
            titleEl.innerHTML = '<i class="fa-solid fa-plus mr-2 text-blue-500"></i>新增图谱模块';
            form.reset();
        }
        this.toggleModal('manage', true);
    },

    closeManageModal() {
        this.toggleModal('manage', false);
        this.state.editingModuleId = null;
    },

    async handleManageSubmit(e) {
        e.preventDefault(); 
        const payload = {
            title: document.getElementById('mod-title').value,
            description: document.getElementById('mod-desc').value,
            grade: document.getElementById('mod-grade').value,
            semester: document.getElementById('mod-semester').value
        };

        try {
            if (this.state.editingModuleId) {
                await fetch(`${API_BASE}/modules/${this.state.editingModuleId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
            } else {
                await fetch(`${API_BASE}/modules`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
            }
            this.closeManageModal();
            await this.fetchModules();
            this.renderModules();
        } catch (error) {
            alert('保存失败，请检查后端服务。');
        }
    },

    async deleteModule(moduleId) {
        if (!confirm("⚠️ 危险操作：确定要永久删除这个图谱模块吗？(其包含的题库也将一并丢失)")) return;
        try {
            await fetch(`${API_BASE}/modules/${moduleId}`, { method: 'DELETE' });
            await this.fetchModules();
            this.renderModules();
        } catch (error) {
            alert('删除失败，请检查后端服务。');
        }
    },

    // ==========================================
    // 6. 基础视图控制
    // ==========================================
    toggleView(v) { 
        Object.values(this.elements.views).forEach(el => {
            if(el) el.classList.add('hidden');
        }); 
        if(this.elements.views[v]) this.elements.views[v].classList.remove('hidden'); 
    },
    
    toggleModal(modalName, show) {
        const modal = this.elements.modals[modalName];
        if(!modal) return;
        if(show) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        } else {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    },

    bindEvents() {
        const nextBtn = document.getElementById('next-btn');
        const exitBtn = document.getElementById('exit-btn');
        const backHomeBtn = document.getElementById('back-home-btn');
        const manageForm = document.getElementById('manage-form');
        
        if(nextBtn) nextBtn.onclick = () => this.nextStep();
        if(exitBtn) exitBtn.onclick = () => { this.toggleView('home'); this.fetchDashboardData(); };
        if(backHomeBtn) backHomeBtn.onclick = () => { this.toggleView('home'); this.fetchDashboardData(); };
        if(manageForm) manageForm.onsubmit = (e) => this.handleManageSubmit(e);
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());