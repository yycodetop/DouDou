/**
 * 第五章：方程与方程组 (终极融合版)
 * 特性：
 * 1. 结构对齐：增加 sections 映射，支持“专项突破”模式。
 * 2. 智能反馈：集成 getAdvice 可视化归纳表格。
 * 3. 题库完整：保留所有 52 道精选试题，涵盖方程核心。
 */

// --- 1. 核心工具库 ---
const Utils5 = {
    // 数组洗牌
    shuffle: (arr) => arr.sort(() => Math.random() - 0.5)
};

const Chapter5_Generator = {
    info: {
        id: "ch5",
        title: "第五章 方程与方程组",
        description: "52道核心试题，从基础定义到复杂应用全覆盖",
        icon: "fa-solid fa-calculator"
    },

    // 模块标题映射 (用于专项突破显示)
    sections: {
        "section_5_1": "5.1 一元一次方程基础",
        "section_5_2_3": "5.2-5.3 性质与步骤",
        "section_5_4_5": "5.4-5.5 应用建模与定义",
        "section_5_6_8": "5.6-5.8 二元方程组全解"
    },

    // 辅助工具：打乱选项顺序
    shuffleOptions: function(options) {
        return [...options].sort(() => Math.random() - 0.5);
    },

    // 核心题库数据库
    database: {
        // =============================================
        // 5.1 一元一次方程基础概念 (12题)
        // =============================================
        section_5_1: [
            { question: "下列关于“方程”的描述，最准确的是 (    )", options: ["含有未知数的等式", "含有未知数的式子", "含有等号的式子", "能够求出答案的式子"], answer: "含有未知数的等式", point: "方程定义", explanation: "方程必须满足两个条件：1.含有未知数；2.是等式。" },
            { question: "在下列式子中，属于方程的是 (    )", options: ["$x - 2 = 0$", "$2x + 3 > 5$", "$x^2 - 1$", "$3 + 5 = 8$"], answer: "$x - 2 = 0$", point: "方程识别", explanation: "只有 $x-2=0$ 既有未知数又是等式。" },
            { question: "关于“等式”和“方程”的关系，下列说法正确的是 (    )", options: ["方程一定是等式", "等式一定是方程", "方程不一定是等式", "两者没有包含关系"], answer: "方程一定是等式", point: "概念辨析", explanation: "方程是等式的一种特殊形式（含有未知数）。" },
            { question: "“某数的 3 倍与 5 的差等于 10”，若设某数为 $x$，列出的方程是 (    )", options: ["$3x - 5 = 10$", "$3x + 5 = 10$", "$x - 3 \\times 5 = 10$", "$3(x - 5) = 10$"], answer: "$3x - 5 = 10$", point: "文字转方程", explanation: "3倍是 $3x$，差是减法，结果是 10。" },
            { question: "下列方程中，是一元一次方程的是 (    )", options: ["$2x - 1 = 3$", "$x + y = 5$", "$x^2 - x = 1$", "$\\frac{1}{x} + 1 = 2$"], answer: "$2x - 1 = 3$", point: "一元一次判定", explanation: "只含一个未知数，次数为 1，且是整式方程。" },
            { question: "一元一次方程 $ax + b = 0$ 成为标准形式的前提条件是 (    )", options: ["$a \\ne 0$", "$a, b$ 为任意常数", "$b \\ne 0$", "$a > 0$"], answer: "$a \\ne 0$", point: "系数限制", explanation: "一次项系数不能为 0，否则未知数消失。" },
            { question: "下列各式中，是一元一次方程定义中要求的“整式方程”的是 (    )", options: ["$x + \\frac{x}{2} = 3$", "$\\frac{2}{x} = 4$", "$\\sqrt{x} = 5$", "$x(x+1) = x^2$"], answer: "$x + \\frac{x}{2} = 3$", point: "整式方程", explanation: "分母为常数 2，属于整式。其他选项分母或根号含未知数。" },
            { question: "已知方程 $(m-1)x^{|m|} + 3 = 0$ 是一元一次方程，则 $m$ 的值是 (    )", options: ["-1", "1", "$\\pm 1$", "0"], answer: "-1", point: "参数求解", explanation: "需满足 $|m|=1$ 且系数 $m-1 \\ne 0$，故 $m=-1$。" },
            { question: "判断一个等式是否为一元一次方程，识别的第一步通常是 (    )", options: ["化简方程至最简形式", "看有没有等号", "数未知数的个数", "看最高次数"], answer: "化简方程至最简形式", point: "识别步骤", explanation: "必须先化简（如消去二次项）才能准确判断。" },
            { question: "下列方程变形后，仍是一元一次方程的是 (    )", options: ["$x(x-1) = x^2$", "$2(x+1) = 2x+2$", "$x + \\frac{1}{x} = 2$", "$x^2 = 4$"], answer: "$x(x-1) = x^2$", point: "变形判定", explanation: "展开得 $x^2-x=x^2$，消去 $x^2$ 后得 $-x=0$，是一次方程。" },
            { question: "方程 $3x - 1 = 2x + (x-1)$ 是一元一次方程吗？ (    )", options: ["不是", "是"], answer: "不是", point: "恒等式判定", explanation: "化简后 $0=0$，未知数消失，这是恒等式。" },
            { question: "若方程 $(a-2)x^2 + x - 5 = 0$ 是关于 $x$ 的一元一次方程，则 $a$ 为 (    )", options: ["2", "0", "任意实数", "-2"], answer: "2", point: "降次条件", explanation: "二次项系数必须为 0，即 $a-2=0$。" }
        ],

        // =============================================
        // 5.2 & 5.3 等式的性质与解步骤 (8题)
        // =============================================
        section_5_2_3: [
            { question: "已知 $a = b$，根据等式的性质，下列变形错误的是 (    )", options: ["$\\frac{a}{c} = \\frac{b}{c}$", "$a + 5 = b + 5$", "$a - m = b - m$", "$2a = 2b$"], answer: "$\\frac{a}{c} = \\frac{b}{c}$", point: "除法性质", explanation: "应用除法性质时，除数 $c$ 必须明确不为 0。" },
            { question: "若利用等式的性质将 $x - 3 = 5$ 变形为 $x = 8$，则这一步的依据是 (    )", options: ["等式两边都加 3", "等式两边都减 3", "等式两边都乘 3", "等式两边都除以 3"], answer: "等式两边都加 3", point: "加法性质", explanation: "左边 $-3+3=0$，消去常数项。" },
            { question: "下列变形属于乘法性质应用的是 (    )", options: ["由 $\\frac{1}{2}x = 4$ 得 $x = 8$", "由 $x = 3$ 得 $x^2 = 9$", "由 $2x = 4$ 得 $x = 2$", "由 $x - 1 = 2$ 得 $x = 3$"], answer: "由 $\\frac{1}{2}x = 4$ 得 $x = 8$", point: "乘法性质", explanation: "两边同乘 2。" },
            { question: "已知 $ax = ay$，下列推导结论正确的是 (    )", options: ["若 $a^2 + 1$，则 $x = y$", "$x = y$", "$x + 1 = y + 1$", "$a(x+1) = ay$"], answer: "若 $a^2 + 1$，则 $x = y$", point: "消去条件", explanation: "$a^2+1 \\ge 1$，系数不为 0，可以除。" },
            { question: "解方程 $\\frac{x-1}{2} - \\frac{x+2}{3} = 1$ 时，去分母正确的是 (    )", options: ["$3(x-1) - 2(x+2) = 6$", "$3(x-1) - 2(x+2) = 1$", "$3(x-1) - 2x + 4 = 6$", "$2(x-1) - 3(x+2) = 6$"], answer: "$3(x-1) - 2(x+2) = 6$", point: "去分母", explanation: "每一项（含常数）乘 6，分子加括号。" },
            { question: "在解方程 $3x + 5 = x - 1$ 时，移项正确的是 (    )", options: ["$3x - x = -1 - 5$", "$3x + x = -1 + 5$", "$3x - x = -1 + 5$", "$3x + x = -1 - 5$"], answer: "$3x - x = -1 - 5$", point: "移项法则", explanation: "移项要变号。" },
            { question: "解方程 $2(x - 3) = -4$ 的第一步是去括号，结果是 (    )", options: ["$2x - 6 = -4$", "$2x - 3 = -4$", "$2x + 6 = -4$", "$x - 3 = -2$"], answer: "$2x - 6 = -4$", point: "去括号", explanation: "分配律：$2 \\times (-3) = -6$。" },
            { question: "将方程 $-\\frac{2}{3}x = 4$ 的未知数系数化为 1，正确的是 (    )", options: ["$x = 4 \\times (-\\frac{3}{2})$", "$x = 4 + \\frac{2}{3}$", "$x = 4 \\times (-\\frac{2}{3})$", "$x = -4 \\times \\frac{3}{2}$"], answer: "$x = 4 \\times (-\\frac{3}{2})$", point: "系数化1", explanation: "乘以系数的倒数。" }
        ],

        // =============================================
        // 5.4 & 5.5 应用建模与二元定义 (8题)
        // =============================================
        section_5_4_5: [
            { question: "原计划租45座车余15人，租60座车少租1辆且坐满。设原租 $x$ 辆，方程为 (    )", options: ["$45x + 15 = 60(x - 1)$", "$45x - 15 = 60(x - 1)$", "$45x + 15 = 60x - 1$", "$\\frac{x-15}{45} = \\frac{x+1}{60}$"], answer: "$45x + 15 = 60(x - 1)$", point: "人数不变模型", explanation: "总人数 = $45x+15$ 或 $60(x-1)$。" },
            { question: "按进价提高 40% 标价，打八折销售，获利 24 元。设进价为 $x$，方程为 (    )", options: ["$x(1+40\\%) \\times 80\\% - x = 24$", "$x(1+40\\%) \\times 80\\% = 24$", "$x \\times 40\\% \\times 80\\% = 24$", "$x(1+40\\%-80\\%) = 24$"], answer: "$x(1+40\\%) \\times 80\\% - x = 24$", point: "打折销售模型", explanation: "利润 = 售价 - 进价。" },
            { question: "存入 5000 元，年利率 2.1%，存两年。到期取回总额为 (    )", options: ["$5000(1 + 2.1\\% \\times 2)$", "$5000 \\times 2.1\\% \\times 2$", "$5000(1 + 2.1\\%)^2$", "$5000 + 2.1\\% \\times 2$"], answer: "$5000(1 + 2.1\\% \\times 2)$", point: "本息和模型", explanation: "本金 + 利息 = $5000 + 5000 \\times 2.1\\% \\times 2$。" },
            { question: "甲乙相向而行，甲速 60，乙速 90，相距 300。设经过 $x$ 小时相遇，方程为 (    )", options: ["$(60+90)x = 300$", "$(90-60)x = 300$", "$90x - 60x = 300$", "$\\frac{300}{x} = 90 - 60$"], answer: "$(60+90)x = 300$", point: "相遇问题模型", explanation: "路程和 = 速度和 $\\times$ 时间。" },
            { question: "工程甲独做10天，乙独做15天。甲先做2天，剩下合作。设乙做 $x$ 天，方程为 (    )", options: ["$\\frac{2+x}{10} + \\frac{x}{15} = 1$", "$\\frac{x}{10} + \\frac{x}{15} = 1$", "$\\frac{2}{10} + \\frac{x}{15} = 1$", "$\\frac{x-2}{10} + \\frac{x}{15} = 1$"], answer: "$\\frac{2+x}{10} + \\frac{x}{15} = 1$", point: "工程问题模型", explanation: "工作量之和等于 1。甲的时间是 $2+x$。" },
            { question: "下列方程中，属于二元一次方程的是 (    )", options: ["$x + 2y = 3$", "$xy - 1 = 0$", "$x + \\frac{1}{y} = 2$", "$x^2 + y = 5$"], answer: "$x + 2y = 3$", point: "二元一次方程定义", explanation: "两个未知数，次数均为 1，整式方程。" },
            { question: "若 $x^{m-1} + y^{n+2} = 5$ 是二元一次方程，则 $m, n$ 为 (    )", options: ["$m = 2, n = -1$", "$m = 1, n = 1$", "$m = 2, n = 1$", "$m = 0, n = 0$"], answer: "$m = 2, n = -1$", point: "参数定义", explanation: "$m-1=1 \\Rightarrow m=2$；$n+2=1 \\Rightarrow n=-1$。" },
            { question: "关于二元一次方程 $2x + y = 5$ 的解，说法正确的是 (    )", options: ["有无数个解", "有且只有一个解", "没有解", "解必须是正整数"], answer: "有无数个解", point: "解的个数", explanation: "无限制条件下有无数实数解。" }
        ],

        // =============================================
        // 5.6 - 5.8 二元方程组解法与应用 (24题)
        // =============================================
        section_5_6_8: [
            { question: "已知 $\\begin{cases} x = 2 \\\\ y = 1 \\end{cases}$ 是 $ax - y = 3$ 的解，则 $a$ 是 (    )", options: ["2", "1", "-2", "5"], answer: "2", point: "解的验证", explanation: "$2a - 1 = 3 \\Rightarrow 2a=4 \\Rightarrow a=2$。" },
            { question: "方程 $x + 2y = 10$ 的正整数解有 (    )", options: ["4 组", "有无数组", "5 组", "1 组"], answer: "4 组", point: "整数解", explanation: "x=2,4,6,8 对应 y=4,3,2,1。" },
            { question: "下列哪组数值是 $3x - y = 5$ 的解 (    )", options: ["$\\begin{cases} x = 2 \\\\ y = 1 \\end{cases}$", "$\\begin{cases} x = 1 \\\\ y = 2 \\end{cases}$", "$\\begin{cases} x = 0 \\\\ y = 5 \\end{cases}$", "$\\begin{cases} x = -1 \\\\ y = 2 \\end{cases}$"], answer: "$\\begin{cases} x = 2 \\\\ y = 1 \\end{cases}$", point: "代入检查", explanation: "$3(2)-1=5$ 成立。" },
            { question: "若方程组解是 $\\begin{cases} x = 3 \\\\ y = -2 \\end{cases}$，则方程组可能是 (    )", options: ["$x+y=1$ 和 $x-y=5$", "$x+y=5$ 和 $x-y=1$", "$2x+y=4$ 和 $x+y=5$", "$x=3$ 和 $y=2$"], answer: "$x+y=1$ 和 $x-y=5$", point: "构造方程", explanation: "$3+(-2)=1, 3-(-2)=5$。" },
            { question: "解方程 $\\frac{x}{2} + \\frac{y}{3} = 1$ 去分母应乘以 (    )", options: ["6", "5", "2", "3"], answer: "6", point: "去分母", explanation: "2和3的最小公倍数。" },
            { question: "方程 $\\frac{2x-1}{3} - \\frac{y+1}{4} = 0$ 去分母后正确的是 (    )", options: ["$4(2x-1) - 3(y+1) = 0$", "$8x - 4 - 3y + 3 = 0$", "$4(2x-1) - y+1 = 0$", "$8x-1 - 3y-1 = 0$"], answer: "$4(2x-1) - 3(y+1) = 0$", point: "复杂去分母", explanation: "乘12，分子加括号。" },
            { question: "已知 $\\frac{x+y}{2} = 5$ 且 $\\frac{x-y}{3} = 2$，转化后得 (    )", options: ["$x+y=10, x-y=6$", "$x+y=5, x-y=2$", "$x+y=2.5, x-y=6$", "$x=8, y=2$"], answer: "$x+y=10, x-y=6$", point: "方程组化简", explanation: "分别乘2和乘3。" },
            { question: "对于 $x - \\frac{y}{2} = 1$，用 $x$ 表示 $y$ 为 (    )", options: ["$y = 2x - 2$", "$y = 2x + 2$", "$y = x - 1$", "$y = 2(1 - x)$"], answer: "$y = 2x - 2$", point: "变量表示", explanation: "$y/2 = x-1 \\Rightarrow y=2(x-1)$。" },
            { question: "解 $\\begin{cases} y = x - 1 \\\\ 2x + y = 5 \\end{cases}$，代入正确的是 (    )", options: ["$2x + (x - 1) = 5$", "$2x + x - 1 = 5$", "$2(x-1) + y = 5$", "$x - 1 = 5 - 2x$"], answer: "$2x + (x - 1) = 5$", point: "代入步骤", explanation: "将 y 整体替换。" },
            { question: "代入法解方程组的最佳出发点是 (    )", options: ["选择系数为 1 或 -1 的方程", "选择系数最大的", "随机选择", "总是第一个"], answer: "选择系数为 1 或 -1 的方程", point: "代入技巧", explanation: "避免分数，计算简便。" },
            { question: "解 $\\begin{cases} x = 2y \\\\ 3x - 4y = 2 \\end{cases}$，得 $y = $ (    )", options: ["1", "2", "0.5", "-1"], answer: "1", point: "代入计算", explanation: "$3(2y)-4y=2 \\Rightarrow 2y=2$。" },
            { question: "代入消元法体现的核心思想是 (    )", options: ["转化思想（多元转一元）", "数形结合", "分类讨论", "类比思想"], answer: "转化思想（多元转一元）", point: "数学思想", explanation: "消去未知数，降维打击。" },
            { question: "解 $\\begin{cases} 2x + y = 5 \\\\ 3x - y = 10 \\end{cases}$ 最简便方法是 (    )", options: ["两个方程直接相加", "两个方程直接相减", "代入法", "先乘 2 再减"], answer: "两个方程直接相加", point: "加减技巧", explanation: "$+y$ 与 $-y$ 互为相反数。" },
            { question: "若 $\\begin{cases} 3x + 2y = 8 \\\\ 3x - 4y = 2 \\end{cases}$，消去 $x$ 应 (    )", options: ["① - ②", "① + ②", "② - ①", "直接消去"], answer: "① - ②", point: "同号相减", explanation: "$3x$ 与 $3x$ 同号，相减消去。" },
            { question: "解 $\\begin{cases} 2x + 3y = 7 \\\\ 3x - 2y = 4 \\end{cases}$ 消去 $y$ 第一步是 (    )", options: ["① $\\times 2$ + ② $\\times 3$", "① $\\times 3$ - ② $\\times 2$", "① + ②", "直接相减"], answer: "① $\\times 2$ + ② $\\times 3$", point: "配系数", explanation: "使 y 系数变为 6 和 -6。" },
            { question: "加减消元后得到 $10y = 20$，说明 (    )", options: ["$y$ 的值等于 2", "$x$ 的值等于 2", "方程组无解", "计算错了"], answer: "$y$ 的值等于 2", point: "消元结果", explanation: "求解一元方程。" },
            { question: "甲乙相距36km，相向行4h遇；甲先走2h，乙出发2.4h遇。设速 $x, y$，方程组 (    )", options: ["$\\begin{cases} 4(x+y) = 36 \\\\ (2+2.4)x + 2.4y = 36 \\end{cases}$", "$\\begin{cases} x+y=36 \\\\ 4.4x+2.4y=36 \\end{cases}$", "$\\begin{cases} 4x+4y=36 \\\\ 2x+2.4y=36 \\end{cases}$", "$\\begin{cases} 4x+4y=36 \\\\ 4.4x+4.4y=36 \\end{cases}$"], answer: "$\\begin{cases} 4(x+y) = 36 \\\\ (2+2.4)x + 2.4y = 36 \\end{cases}$", point: "复杂行程", explanation: "甲共走 $2+2.4=4.4$ 小时。" },
            { question: "顺流40km用2h，逆流30km用3h。设静水速 $x$ 水速 $y$，则 (    )", options: ["$\\begin{cases} x+y=20 \\\\ x-y=10 \\end{cases}$", "$\\begin{cases} x+y=40 \\\\ x-y=30 \\end{cases}$", "$\\begin{cases} 2x+2y=30 \\\\ 3x-3y=40 \\end{cases}$", "$x=15, y=5$"], answer: "$\\begin{cases} x+y=20 \\\\ x-y=10 \\end{cases}$", point: "流水行船", explanation: "速度 = 路程/时间。" },
            { question: "相向行0.8h遇，共80km。轿车速是卡车1.5倍。设卡车 $x$ 轿车 $y$，方程组 (    )", options: ["$\\begin{cases} 0.8(x+y) = 80 \\\\ y = 1.5x \\end{cases}$", "$\\begin{cases} x+y = 80 \\\\ y = 1.5x \\end{cases}$", "$\\begin{cases} 0.8x+y = 80 \\\\ x = 1.5y \\end{cases}$", "$\\begin{cases} x+y = 100 \\\\ y = 1.5x \\end{cases}$"], answer: "$\\begin{cases} 0.8(x+y) = 80 \\\\ y = 1.5x \\end{cases}$", point: "倍数行程", explanation: "路程和方程 + 速度倍数方程。" },
            { question: "先上2km下3km用40min；先下2km上3km用50min。设上速 $x$ 下速 $y$，方程组 (    )", options: ["$\\begin{cases} \\frac{2}{x} + \\frac{3}{y} = 40 \\\\ \\frac{2}{y} + \\frac{3}{x} = 50 \\end{cases}$", "$\\begin{cases} 2x + 3y = 40 \\\\ 2y + 3x = 50 \\end{cases}$", "$\\begin{cases} \\frac{x}{2} + \\frac{y}{3} = 40 \\\\ \\dots \\end{cases}$", "$x+y=90$"], answer: "$\\begin{cases} \\frac{2}{x} + \\frac{3}{y} = 40 \\\\ \\frac{2}{y} + \\frac{3}{x} = 50 \\end{cases}$", point: "分式形式方程组", explanation: "时间 = 路程/速度。" },
            { question: "3笔2本45元；2笔5本63元。设笔 $x$ 本 $y$，则 (    )", options: ["$\\begin{cases} 3x + 2y = 45 \\\\ 2x + 5y = 63 \\end{cases}$", "$\\begin{cases} 3x + 2y = 63 \\\\ 2x + 5y = 45 \\end{cases}$", "$\\begin{cases} 2x + 3y = 45 \\\\ 5x + 2y = 63 \\end{cases}$", "$x+y = 108$"], answer: "$\\begin{cases} 3x + 2y = 45 \\\\ 2x + 5y = 63 \\end{cases}$", point: "双组合费用", explanation: "直接翻译数量关系。" },
            { question: "成人50学生30，共20人花840。设成人 $x$ 学生 $y$，方程组 (    )", options: ["$\\begin{cases} x+y=20 \\\\ 50x+30y=840 \\end{cases}$", "$\\begin{cases} x+y=840 \\\\ 50x+30y=20 \\end{cases}$", "$\\begin{cases} 50x+30y=20 \\\\ x+y=840 \\end{cases}$", "$x=12, y=8$"], answer: "$\\begin{cases} x+y=20 \\\\ 50x+30y=840 \\end{cases}$", point: "人数票价", explanation: "人数方程 + 金额方程。" },
            { question: "一季500。二季甲增10%，乙减5%，总530。设一季甲 $x$ 乙 $y$，则 (    )", options: ["$\\begin{cases} x+y=500 \\\\ 1.1x + 0.95y = 530 \\end{cases}$", "$\\begin{cases} x+y=500 \\\\ 0.1x - 0.05y = 530 \\end{cases}$", "$\\begin{cases} x+y=500 \\\\ 1.1x - 0.95y = 530 \\end{cases}$", "$\\begin{cases} 1.1x+0.95y=500 \\\\ x+y=530 \\end{cases}$"], answer: "$\\begin{cases} x+y=500 \\\\ 1.1x + 0.95y = 530 \\end{cases}$", point: "增长率费用", explanation: "增长后为 $1+10\\%=1.1$，减少后为 $1-5\\%=0.95$。" },
            { question: "A比B贵10元。2A和3B共170。设A单价 $x$ B单价 $y$，方程组 (    )", options: ["$\\begin{cases} x-y=10 \\\\ 2x+3y=170 \\end{cases}$", "$\\begin{cases} y-x=10 \\\\ 2x+3y=170 \\end{cases}$", "$\\begin{cases} x+y=10 \\\\ 2x+3y=170 \\end{cases}$", "$\\begin{cases} x=10y \\\\ 2x+3y=170 \\end{cases}$"], answer: "$\\begin{cases} x-y=10 \\\\ 2x+3y=170 \\end{cases}$", point: "单价差费用", explanation: "A比B贵即 $x-y=10$。" }
        ]
    },

    // 核心生成函数
    generateQuiz: function() {
        let allQuestions = [];
        const categories = Object.keys(this.database);
        
        categories.forEach(cat => {
            this.database[cat].forEach(q => {
                allQuestions.push({
                    ...q,
                    options: this.shuffleOptions(q.options)
                });
            });
        });

        return allQuestions.sort(() => Math.random() - 0.5);
    },

    // 智能建议与归纳生成器
    getAdvice: function(score, wrongPoints) {
        let adviceHTML = "";
        
        if (score === 100) {
            adviceHTML += "<div class='mb-4 p-4 bg-green-50 rounded-lg text-green-700 font-bold'><i class='fa-solid fa-medal text-yellow-500 mr-2'></i>逻辑完美！你已经完全掌握了方程这一章的核心。</div>";
        } else if (score >= 80) {
            adviceHTML += "<div class='mb-4 p-4 bg-blue-50 rounded-lg text-blue-700 font-bold'>基础扎实！在复杂应用题建模上可以多加练习。</div>";
        } else {
            adviceHTML += "<div class='mb-4 p-4 bg-yellow-50 rounded-lg text-yellow-700 font-bold'>继续加油！方程的变形和建模是代数的难点，建议回归课本例题。</div>";
        }

        if (wrongPoints.length > 0) {
            adviceHTML += "<h4 class='font-bold text-slate-800 mb-2'>📉 错题归纳与突破</h4>";
            adviceHTML += "<div class='overflow-hidden rounded-lg border border-slate-200'><table class='min-w-full text-sm text-left text-slate-500'><thead class='text-xs text-slate-700 uppercase bg-slate-50'><tr><th class='px-6 py-3'>错误类型</th><th class='px-6 py-3'>频次</th><th class='px-6 py-3'>复习策略</th></tr></thead><tbody>";

            const counts = {};
            wrongPoints.forEach(p => counts[p] = (counts[p] || 0) + 1);
            const sortedPoints = Object.keys(counts).sort((a,b) => counts[b] - counts[a]);

            sortedPoints.forEach(point => {
                let strategy = "复习基础概念。";
                if (point.includes("判定") || point.includes("定义")) strategy = "注意：系数不为0，次数为1，整式方程。";
                else if (point.includes("性质") || point.includes("步骤")) strategy = "移项变号！去分母时分子加括号，常数项别漏乘。";
                else if (point.includes("模型") || point.includes("问题")) strategy = "画图分析行程问题；列表分析工程和费用问题。";
                else if (point.includes("消元")) strategy = "观察系数特征：系数为1用代入，系数相同/相反用加减。";

                adviceHTML += `<tr class='bg-white border-b hover:bg-slate-50'><td class='px-6 py-4 font-medium text-slate-900'>${point}</td><td class='px-6 py-4 text-red-600 font-bold'>${counts[point]}</td><td class='px-6 py-4'>${strategy}</td></tr>`;
            });

            adviceHTML += "</tbody></table></div>";
        }

        return adviceHTML;
    }
};

window.AppLibrary = window.AppLibrary || {};
window.AppLibrary.Chapter5Generator = Chapter5_Generator;