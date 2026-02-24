/**
 * 核心业务逻辑 (V11.1 - 修复记录成长功能)
 * 核心特性：
 * 1. 首页 Dashboard 集成了复习、AI 推荐、日志功能。
 * 2. 跨章节的全局智能推荐算法。
 * 3. 完整的学习日志记录与页头数据实时同步。
 */

const App = {
    // 模块标题智能映射表 (覆盖 1-7 章所有模块)
    TitleMap: {
        // Chapter 1 & 2
        "concepts": "基础概念", "number_line": "数轴", "opposite_abs": "相反数与绝对值", 
        "operations": "四则运算", "fractions": "分数与倒数", "powers": "乘方", "sci_not": "科学记数法",
        "squareRoots": "平方根", "cubeRoots": "立方根", "estimation": "无理数估算",
        // Chapter 3
        "power_concepts": "幂的基础", "power_rules": "幂的法则", "zero_neg_exp": "零/负指数",
        "integral_concepts": "整式概念", "addition_subtraction": "整式加减", 
        "multiplication": "整式乘法", "mixed_operations": "混合运算", 
        "formulas": "乘法公式", "factorization": "因式分解",
        // Chapter 4
        "definition_properties": "分式性质", "addition_common_denom": "加减通分", "multi_simple_mixed": "乘除混合",
        // Chapter 5
        "section_5_1": "一元一次方程基础", "section_5_2_3": "性质与步骤",
        "section_5_4_5": "应用建模入门", "section_5_6_8": "二元方程组全解",
        // Chapter 6
        "coord_basics": "坐标系基础", "coord_symmetry": "对称变换", "equation_graph": "方程几何表示",
        "ratio_basics": "比例基础", "age_problems": "年龄问题", "work_problems": "合作问题",
        // Chapter 7
        "linear_3_concept": "三元方程组概念", "linear_3_steps": "三元组解法步骤", "linear_3_special": "特殊解法技巧",
        "quadratic_concept": "一元二次基础", "quadratic_id": "二次方程识别", "quad_formula": "公式法全解",
        "quad_completing": "配方法进阶", "quad_factor": "因式分解法", "quad_substitute": "换元法技巧",
        "quad_vieta": "韦达定理应用", "fractional_concept": "分式方程定义", "fractional_solving": "分式方程解法",
         // Chapter 8 (新增)
        "section_8_1": "不等式概念与性质",
        "section_8_2": "解集与数轴",
        "section_8_3": "范围组合逻辑",
        "section_8_4_1": "基础解法",
        "section_8_4_2": "进阶解法(绝对值/分式)",
        "section_8_5_1": "应用:增长率与利润",
        "section_8_5_2": "应用:资源与决策",
            // Chapter 9: 函数与一次函数 (整合版)
        "func_concepts": "函数概念与定义",
        "func_representations": "函数的表示方法",
        "linear_basics": "一次函数图象与性质",
        "linear_solving": "解析式的求解技巧",
        "linear_apps": "一次函数实际应用",
            // Chapter 10: 二次函数全能专题
        "quad_def_id": "定义、识别与图象",
        "quad_params": "参数 a,b,c 的影响",
        "quad_calculation": "关键点位计算(顶点/轴)",
        "quad_graphing": "图象绘制与特征",
        "quad_monotony": "单调性与最值分析",
        "quad_vertex_form": "顶点式变换与平移",
        "quad_intersections": "抛物线与直线交点",
        "quad_undetermined": "待定系数法求解析式",
        "quad_motion_profit": "应用:运动与利润模型",
        "quad_comprehensive": "应用:综合建模",
         // Chapter 11: 反比例函数 (新增)
        "inv_def_k": "定义与系数 k 的作用",
        "inv_graph": "图象绘制与理解",
        "inv_props": "反比例函数的性质",
        "inv_asymptote": "渐近线特征分析",
        "inv_intersect": "与一次函数的交点",
        "inv_comprehensive": "实际应用与物理建模"
    },

    state: {
        questions: [],
        currentIndex: 0,
        correctCount: 0,
        originalTotal: 0,
        wrongPoints: [],
        isAnswering: true,
        currentGenerator: null,
        mode: 'normal', 
        currentModuleTitle: ''
    },

    elements: {
        app: document.getElementById('app'),
        views: {
            home: document.getElementById('home-view'),
            quiz: document.getElementById('quiz-view'),
            result: document.getElementById('result-view')
        },
        scheduleModal: document.getElementById('schedule-modal'),
        modeModal: document.getElementById('mode-modal'),
        logModal: document.getElementById('log-modal'),
        chapterList: document.getElementById('chapter-list'),
        dashboardGrid: document.getElementById('dashboard-grid'),
        scheduleContent: document.getElementById('schedule-content'),
        moduleList: document.getElementById('module-list'),
        logContent: document.getElementById('log-content'),
        progressBar: document.getElementById('progress-bar'),
        chapterTag: document.getElementById('chapter-tag'),
        questionCounter: document.getElementById('question-counter'),
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container'),
        explanationArea: document.getElementById('explanation-area'),
        explanationText: document.getElementById('explanation-text'),
        nextBtn: document.getElementById('next-btn'),
        finalScore: document.getElementById('final-score'),
        reviewAdvice: document.getElementById('review-advice'),
        exitBtn: document.getElementById('exit-btn'),
        backHomeBtn: document.getElementById('back-home-btn'),
        retryBtn: document.getElementById('retry-btn')
    },

    init() {
        setTimeout(() => this.renderHome(), 100);
        this.bindEvents();
    },

    // --- 1. 首页渲染逻辑 ---

    renderHome() {
        this.renderDashboard();
        
        const library = window.AppLibrary || {};
        this.elements.chapterList.innerHTML = '';
        const generators = Object.values(library).filter(g => g.generateQuiz);
        
        // 更新页头统计：章节数
        if(document.getElementById('header-stat-total')) {
            document.getElementById('header-stat-total').innerHTML = `<i class="fa-solid fa-book-open mr-2 text-blue-400"></i>${generators.length} 章核心内容`;
        }

        if (generators.length === 0) {
            this.elements.chapterList.innerHTML = '<div class="col-span-3 text-center text-slate-400 py-10">正在同步题库资源...</div>';
            return;
        }

        generators.forEach((gen, index) => {
            const card = document.createElement('div');
            card.className = "chapter-card bg-white rounded-2xl p-6 cursor-pointer border border-slate-100 transition-all hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 relative overflow-hidden group";
            const iconClass = gen.info.icon || "fa-solid fa-book-open"; 
            const chapterNum = index + 1;
            card.innerHTML = `
                <div class="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-125"></div>
                <div class="relative z-10 flex flex-col h-full justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-4">
                            <span class="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">CHAPTER ${chapterNum}</span>
                            <i class="${iconClass} text-slate-200 text-3xl group-hover:text-blue-200 transition-colors"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">${gen.info.title}</h3>
                        <p class="text-slate-500 text-sm leading-relaxed line-clamp-2">${gen.info.description}</p>
                    </div>
                    <div class="flex items-center text-blue-600 font-bold text-sm mt-6">
                        进入训练 <i class="fa-solid fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                    </div>
                </div>
            `;
            card.onclick = () => this.openModeSelection(gen);
            this.elements.chapterList.appendChild(card);
        });
    },

    renderDashboard() {
        if (!window.ReviewManager) return;
        const stats = window.ReviewManager.getStats();
        const logs = window.ReviewManager.getStudyLogs();
        
        // 计算累计做题数
        const totalSolved = logs.reduce((sum, log) => sum + (log.total || 0), 0);
        
        // 计算坚持学习天数 (按日期字符串去重)
        const uniqueDays = new Set(logs.map(log => log.dateStr)).size;
        
        // 更新页头统计：累计题数或天数
        if(document.getElementById('header-stat-log')) {
            document.getElementById('header-stat-log').innerHTML = `<i class="fa-solid fa-calendar-check mr-2 text-emerald-400"></i>坚持学习 ${uniqueDays} 天`;
        }

        const container = this.elements.dashboardGrid;
        if (!container) return;
        container.innerHTML = '';

        // 卡片 1: 记忆复习 (艾宾浩斯)
        const isDue = stats.dueNow > 0;
        const cardReview = document.createElement('div');
        cardReview.className = `bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between transition-all ${isDue ? 'hover:border-rose-300 cursor-pointer' : 'opacity-80 cursor-default'}`;
        if(isDue) cardReview.onclick = () => this.startReviewQuiz();
        cardReview.innerHTML = `
            <div>
                <div class="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">复习计划</div>
                <div class="text-lg">${isDue ? `<span class="text-rose-500 font-bold">${stats.dueNow} 题待巩固</span>` : `<span class="text-emerald-500 font-bold">今日任务已清空</span>`}</div>
                <button onclick="event.stopPropagation(); App.openSchedule()" class="text-[10px] text-slate-400 hover:text-blue-500 mt-1 flex items-center"><i class="fa-regular fa-calendar mr-1"></i> 查看时间表</button>
            </div>
            <div class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center ${isDue ? 'text-rose-500' : 'text-emerald-500'}">
                <i class="fa-solid fa-clock-rotate-left text-xl"></i>
            </div>
        `;

        // 卡片 2: 全局智能推荐 (AI 靶向)
        const cardAI = document.createElement('div');
        cardAI.className = "bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:border-purple-300 hover:shadow-md transition-all cursor-pointer group";
        cardAI.onclick = () => this.startGlobalAdaptiveMode();
        cardAI.innerHTML = `
            <div>
                <div class="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">全局 AI 推荐</div>
                <div class="text-lg font-bold text-slate-700 group-hover:text-purple-600 transition-colors">跨章靶向提分</div>
                <div class="text-[10px] text-slate-400 mt-1">基于您的薄弱环节生成</div>
            </div>
            <div class="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <i class="fa-solid fa-wand-magic-sparkles text-lg"></i>
            </div>
        `;

        // 卡片 3: 学习日志 (成长足迹)
        const cardLog = document.createElement('div');
        cardLog.className = "bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group";
        cardLog.onclick = () => this.openLogModal();
        cardLog.innerHTML = `
            <div>
                <div class="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">记录成长</div>
                <div class="text-lg font-bold text-slate-700">累计答题 ${totalSolved}</div>
                <div class="text-[10px] text-slate-400 mt-1">点击查看详细记录</div>
            </div>
            <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i class="fa-solid fa-list-check text-lg"></i>
            </div>
        `;

        container.appendChild(cardReview);
        container.appendChild(cardAI);
        container.appendChild(cardLog);
    },

    // --- 2. 模式与启动流程 ---

    openModeSelection(generator) {
        this.state.currentGenerator = generator;
        document.getElementById('mode-modal-title').innerText = generator.info.title;
        const list = this.elements.moduleList;
        list.innerHTML = '';

        if (generator.database) {
            const keys = Object.keys(generator.database);
            keys.forEach(key => {
                let title = generator.sections ? generator.sections[key] : null;
                if (!title) title = this.TitleMap[key] || key;
                const count = generator.database[key].length;
                const btn = document.createElement('button');
                btn.className = "flex justify-between items-center p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all text-left bg-white";
                btn.innerHTML = `<span class="font-bold text-slate-700 text-sm">${title}</span><span class="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-full">${count} 题</span>`;
                btn.onclick = () => this.startModuleQuiz(key, title);
                list.appendChild(btn);
            });
        }
        this.elements.modeModal.classList.remove('hidden');
        this.elements.modeModal.classList.add('flex');
    },

    closeModeModal() { this.elements.modeModal.classList.add('hidden'); this.elements.modeModal.classList.remove('flex'); },

    startFullMode() {
        this.closeModeModal();
        const gen = this.state.currentGenerator;
        this.state.mode = 'normal';
        this.state.questions = gen.generateQuiz();
        this.state.originalTotal = this.state.questions.length;
        this.launchQuizUI(gen.info.title, "blue");
    },

    startQuickMode() {
        this.closeModeModal();
        const gen = this.state.currentGenerator;
        this.state.mode = 'quick';
        let all = gen.generateQuiz();
        this.state.questions = all.slice(0, 15);
        this.state.originalTotal = this.state.questions.length;
        this.launchQuizUI(gen.info.title + " (特训)", "emerald");
    },

    startModuleQuiz(key, title) {
        this.closeModeModal();
        const gen = this.state.currentGenerator;
        this.state.mode = 'module';
        this.state.currentModuleTitle = title;
        const raw = gen.database[key];
        this.state.questions = raw.map(q => ({...q, options: gen.shuffleOptions(q.options)})).sort(() => Math.random() - 0.5);
        this.state.originalTotal = this.state.questions.length;
        this.launchQuizUI(title, "indigo");
    },

    startReviewQuiz() {
        if (!window.ReviewManager) return;
        const due = window.ReviewManager.getDueQuestions();
        if (due.length === 0) return;
        this.state.mode = 'review';
        this.state.questions = due.map(item => ({ ...item.questionData, reviewId: item.id }));
        this.state.originalTotal = this.state.questions.length;
        this.state.currentGenerator = { info: { title: "记忆复习" } };
        this.launchQuizUI("遗忘曲线巩固", "rose");
    },

    startGlobalAdaptiveMode() {
        if (!window.ReviewManager) return;
        const weak = window.ReviewManager.getWeakPoints().slice(0, 5);
        if (weak.length === 0) { alert("暂无足够的错题数据！请先完成基础练习。"); return; }
        
        let pool = [];
        Object.values(window.AppLibrary).forEach(gen => {
            if (gen.database) {
                Object.values(gen.database).forEach(qList => {
                    qList.forEach(q => {
                        if (weak.includes(q.point)) {
                            pool.push({...q, options: gen.shuffleOptions ? gen.shuffleOptions(q.options) : q.options});
                        }
                    });
                });
            }
        });

        if (pool.length === 0) { alert("未找到针对薄弱点的匹配题目。"); return; }
        this.state.mode = 'adaptive';
        this.state.questions = pool.sort(() => Math.random() - 0.5).slice(0, 20);
        this.state.originalTotal = this.state.questions.length;
        this.state.currentGenerator = { info: { title: "全局智能推荐" } };
        this.launchQuizUI("AI 靶向治疗", "purple");
    },

    // --- 3. 核心答题逻辑 ---

    launchQuizUI(title, themeColor) {
        this.resetQuizState();
        this.toggleView('quiz');
        this.elements.app.classList.add('immersive-active');
        
        const themes = {
            blue: "blue", emerald: "emerald", indigo: "indigo", purple: "purple", rose: "rose"
        };
        const c = themes[themeColor] || "blue";
        this.elements.chapterTag.innerText = title;
        this.elements.chapterTag.className = `text-xs font-bold text-${c}-600 bg-${c}-50 px-3 py-1 rounded-full uppercase tracking-wider`;
        this.elements.progressBar.className = `h-full bg-${c}-500 w-0 transition-all duration-300`;

        this.renderQuestion();
    },

    resetQuizState() {
        this.state.currentIndex = 0;
        this.state.correctCount = 0;
        this.state.wrongPoints = [];
        this.state.isAnswering = true;
    },

    renderQuestion() {
        const q = this.state.questions[this.state.currentIndex];
        const cur = this.state.currentIndex + 1;
        const total = this.state.questions.length;
        
        this.elements.questionCounter.innerText = `${String(cur).padStart(2, '0')}/${total}${q.isRetry ? " (复测)" : ""}`;
        this.elements.progressBar.style.width = `${(cur / total) * 100}%`;
        this.elements.questionText.innerHTML = q.question;
        
        this.elements.optionsContainer.innerHTML = '';
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = "option-btn w-full text-left p-5 rounded-xl bg-slate-50 text-slate-700 text-lg font-medium flex items-center group";
            btn.innerHTML = `<span class="index-circle w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mr-4 text-sm font-bold transition-colors group-hover:bg-blue-200 group-hover:text-blue-700">${['A','B','C','D'][idx]}</span><span class="flex-1">${opt}</span>`;
            btn.onclick = () => this.handleAnswer(opt, btn, q);
            this.elements.optionsContainer.appendChild(btn);
        });

        this.elements.explanationArea.classList.add('hidden');
        this.state.isAnswering = true;
        if (window.MathJax) MathJax.typesetPromise();
    },

    handleAnswer(selected, btn, qData) {
        if (!this.state.isAnswering) return;
        this.state.isAnswering = false;

        const isCorrect = selected === qData.answer;
        if (isCorrect) {
            btn.classList.add('option-correct');
            if (this.state.mode !== 'review' && !qData.isRetry) this.state.correctCount++;
            if (this.state.mode === 'review') window.ReviewManager.processResult(qData.reviewId, true);
        } else {
            btn.classList.add('option-wrong');
            if (this.state.mode !== 'review') {
                if (!qData.isRetry) window.ReviewManager.addMistake(qData, this.state.currentGenerator.info?.id || 'other');
                this.state.questions.push({...qData, isRetry: true, id: qData.id + '_retry'});
                this.elements.questionCounter.innerText = `${String(this.state.currentIndex + 1).padStart(2,'0')}/${this.state.questions.length}`;
            } else {
                window.ReviewManager.processResult(qData.reviewId, false);
            }
            if (!this.state.wrongPoints.includes(qData.point)) this.state.wrongPoints.push(qData.point);
            const btns = this.elements.optionsContainer.children;
            for (let b of btns) if (b.innerHTML.includes(qData.answer)) b.classList.add('option-correct');
        }

        const feedback = isCorrect ? `<div class="mb-3 text-green-600 font-bold flex items-center"><i class="fa-solid fa-check-double mr-2"></i>回答正确</div>` : `<div class="mb-3 text-red-600 font-bold flex items-center"><i class="fa-solid fa-triangle-exclamation mr-2"></i>回答错误</div>`;
        this.elements.explanationText.innerHTML = feedback + qData.explanation;
        this.elements.explanationArea.classList.remove('hidden');
        if (window.MathJax) MathJax.typesetPromise([this.elements.explanationArea]);
        
        const isLast = this.state.currentIndex === this.state.questions.length - 1;
        this.elements.nextBtn.innerHTML = isLast ? '查看报告 <i class="fa-solid fa-chart-pie ml-2"></i>' : '下一题 <i class="fa-solid fa-arrow-right ml-2"></i>';
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
        this.elements.app.classList.remove('immersive-active');
        const score = (this.state.originalTotal > 0) ? Math.round((this.state.correctCount / this.state.originalTotal) * 100) : 0;
        this.animateValue(this.elements.finalScore, 0, score, 1000);

        if (this.state.mode !== 'review' && this.state.originalTotal > 0) {
            let mLabel = this.state.mode === 'quick' ? '快速特训' : this.state.mode === 'module' ? `专项: ${this.state.currentModuleTitle}` : this.state.mode === 'adaptive' ? '智能推荐' : '全真挑战';
            window.ReviewManager.addStudyLog({
                chapterTitle: this.state.currentGenerator.info.title,
                modeLabel: mLabel,
                total: this.state.originalTotal,
                correct: this.state.correctCount,
                wrongPoints: [...this.state.wrongPoints]
            });
        }

        let adviceHTML = "";
        if (this.state.mode === 'review') {
            adviceHTML = `<div class='mb-6 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 text-center'><div class="text-4xl mb-2">🧠</div><div class="text-indigo-800 font-bold text-xl mb-2">任务完成</div><p class="text-indigo-600">长期记忆已得到巩固。</p></div>`;
            this.elements.retryBtn.classList.add('hidden');
        } else {
            this.elements.retryBtn.classList.remove('hidden');
            if (this.state.mode === 'adaptive') {
                adviceHTML = `<div class='mb-4 p-4 bg-purple-50 rounded-lg text-purple-700 font-bold'>靶向训练结束！</div><p>已针对薄弱环节完成靶向训练。</p>`;
            } else if (this.state.currentGenerator && this.state.currentGenerator.getAdvice) {
                adviceHTML = this.state.currentGenerator.getAdvice(score, this.state.wrongPoints);
            } else {
                adviceHTML = `<p class="text-center text-slate-500">训练结束，继续加油！</p>`;
            }
        }
        this.elements.reviewAdvice.innerHTML = adviceHTML;
    },

    // --- 4. 辅助视图逻辑 ---

    openLogModal() {
        const logs = window.ReviewManager.getStudyLogs();
        const content = this.elements.logContent;
        content.innerHTML = logs.length === 0 ? '<div class="text-center text-slate-400 py-10 flex flex-col items-center"><i class="fa-solid fa-clipboard-list text-4xl mb-3 opacity-30"></i><p>暂无学习记录</p></div>' : '';
        
        logs.forEach(log => {
            const rate = Math.round((log.correct / log.total) * 100);
            let sug = (log.wrongPoints && log.wrongPoints.length > 0) ? `<div class="mt-3 pt-3 border-t border-slate-100 text-sm"><span class="text-slate-500">💡 建议复习：</span><span class="text-red-500 font-bold">${[...new Set(log.wrongPoints)].slice(0, 3).join(", ")}</span></div>` : `<div class="mt-3 pt-3 border-t border-slate-100 text-sm text-green-600 font-bold"><i class="fa-solid fa-check mr-1"></i> 全对！</div>`;
            
            const html = `
                <div class="bg-white p-5 rounded-xl border border-slate-100 shadow-sm mb-4">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <div class="font-bold text-slate-800 text-lg">${log.chapterTitle}</div>
                            <div class="text-xs text-slate-400 mt-1">${log.dateStr || new Date(log.timestamp).toLocaleDateString()} ${log.timeStr || ""} · <span class="bg-slate-100 px-2 py-0.5 rounded text-slate-600">${log.modeLabel}</span></div>
                        </div>
                        <div class="text-right">
                            <div class="text-2xl font-bold ${rate >= 90 ? 'text-green-600' : rate < 60 ? 'text-red-500' : 'text-slate-500'}">${rate}%</div>
                            <div class="text-xs text-slate-400">准确率</div>
                        </div>
                    </div>
                    <div class="flex gap-4 text-sm text-slate-600 mt-2">
                        <span>总: ${log.total}</span><span>对: ${log.correct}</span><span>错: ${log.total - log.correct}</span>
                    </div>
                    ${sug}
                </div>`;
            content.insertAdjacentHTML('beforeend', html);
        });
        this.elements.logModal.classList.remove('hidden');
        this.elements.logModal.classList.add('flex');
    },

    closeLogModal() { this.elements.logModal.classList.add('hidden'); this.elements.logModal.classList.remove('flex'); },

    openSchedule() {
        const sch = window.ReviewManager.getSchedule();
        const content = this.elements.scheduleContent;
        content.innerHTML = sch.length === 0 ? '<div class="text-center text-slate-400 py-4">暂无复习计划</div>' : '';
        sch.forEach(item => {
            content.insertAdjacentHTML('beforeend', `<div class="flex items-center justify-between p-4 rounded-xl border ${item.isToday ? "bg-indigo-50 border-indigo-200" : "bg-white border-slate-100"}"><div class="flex items-center gap-3"><div class="text-lg ${item.isToday ? "text-indigo-700 font-bold" : "text-slate-600"}">${item.dateStr}</div>${item.isToday ? '<span class="text-xs text-indigo-500 bg-indigo-100 px-2 py-0.5 rounded">Today</span>' : ''}</div><div class="${item.isToday ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-600"} px-3 py-1 rounded-full text-sm font-bold">${item.count} 题</div></div>`);
        });
        this.elements.scheduleModal.classList.remove('hidden');
        this.elements.scheduleModal.classList.add('flex');
    },

    closeSchedule() { this.elements.scheduleModal.classList.add('hidden'); this.elements.scheduleModal.classList.remove('flex'); },

    toggleView(v) { Object.values(this.elements.views).forEach(el => el.classList.add('hidden')); this.elements.views[v].classList.remove('hidden'); },

    animateValue(obj, start, end, duration) {
        let startT = null;
        const step = (t) => {
            if (!startT) startT = t;
            const prog = Math.min((t - startT) / duration, 1);
            obj.innerHTML = Math.floor(prog * (end - start) + start);
            if (prog < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    },

    bindEvents() {
        this.elements.nextBtn.onclick = () => this.nextStep();
        this.elements.exitBtn.onclick = () => { if(confirm("确定退出训练吗？进度将不会被保存。")) { this.elements.app.classList.remove('immersive-active'); this.toggleView('home'); this.renderHome(); } };
        this.elements.backHomeBtn.onclick = () => { this.toggleView('home'); this.renderHome(); };
        this.elements.retryBtn.onclick = () => {
            if (this.state.mode === 'review') this.startReviewQuiz();
            else if (this.state.mode === 'quick') this.startQuickMode();
            else if (this.state.mode === 'adaptive') this.startGlobalAdaptiveMode();
            else if (this.state.mode === 'module') {
                const key = Object.keys(this.state.currentGenerator.database).find(k => (this.state.currentGenerator.sections[k] || this.TitleMap[k]) === this.state.currentModuleTitle);
                this.startModuleQuiz(key, this.state.currentModuleTitle);
            } else this.startFullMode();
        };
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());