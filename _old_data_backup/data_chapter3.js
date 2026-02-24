/**
 * 第三章：整式与因式分解 (终极融合版)
 * 特性：
 * 1. 结构对齐：增加 sections 映射，支持“专项突破”模式。
 * 2. 智能反馈：集成 getAdvice 可视化归纳表格。
 * 3. 题库完整：保留所有 97 道精选试题，涵盖整式运算核心。
 */

// --- 1. 核心工具库 ---
const Utils3 = {
    // 数组洗牌
    shuffle: (arr) => arr.sort(() => Math.random() - 0.5)
};

const Chapter3_Generator = {
    info: {
        id: "ch3",
        title: "第三章 整式与因式分解",
        description: "从幂的运算到因式分解，97道精选用于构建代数思维",
        icon: "fa-solid fa-superscript"
    },

    // 模块标题映射 (用于专项突破显示)
    sections: {
        "power_concepts": "3.1 幂的基础概念",
        "power_rules": "3.2 幂的运算法则",
        "zero_neg_exp": "3.3 零指数与负整数指数",
        "integral_concepts": "3.4 整式的概念",
        "addition_subtraction": "3.5 整式的加减",
        "multiplication": "3.6 整式的乘法",
        "mixed_operations": "3.7 整式的混合运算",
        "formulas": "3.8 乘法公式",
        "factorization": "3.9-3.11 因式分解"
    },

    // 辅助工具
    shuffleOptions: function(options) {
        return [...options].sort(() => Math.random() - 0.5);
    },

    // 核心题库
    database: {
        // =============================================
        // 3.1 幂的基础概念 (9题)
        // =============================================
        power_concepts: [
            { question: "在表达式 $a^n$ 中，$a$ 叫做 (    )，$n$ 叫做 (    )。", options: ["底数，指数", "指数，底数", "因数，倍数", "幂，次方"], answer: "底数，指数", point: "幂的定义", explanation: "在 $a^n$ 中，$a$ 是重复出现的因数（底数），$n$ 是出现的次数（指数）。" },
            { question: "对于表达式 $(-3)^4$，下列说法正确的是 (    )。", options: ["底数是 $-3$，指数是 $4$", "底数是 $3$，指数是 $4$", "表示 $4$ 个 $-3$ 相加", "结果等于 $-12$"], answer: "底数是 $-3$，指数是 $4$", point: "底数辨析", explanation: "括号内的整体 $-3$ 是底数。若写成 $-3^4$，底数才是 $3$。" },
            { question: "下列各组数中，数值相等的是 (    )。", options: ["$-3^3$ 与 $(-3)^3$", "$3^2$ 与 $2^3$", "$-2^2$ 与 $(-2)^2$", "$(-1)^2$ 与 $-1^2$"], answer: "$-3^3$ 与 $(-3)^3$", point: "幂的符号", explanation: "$-3^3=-27$，且 $(-3)^3=-27$（负数的奇次幂为负），两者相等。" },
            { question: "把 $x \\cdot x \\cdot x \\cdot x$ 写成幂的形式是 (    )。", options: ["$x^4$", "$4x$", "$x+4$", "$4^x$"], answer: "$x^4$", point: "幂的表示", explanation: "指数表示底数相乘的个数。" },
            { question: "$10^5$ 读作“10的5次幂”。在这个幂中，底数 10 连乘了 (    ) 次。", options: ["5", "10", "50", "15"], answer: "5", point: "指数意义", explanation: "指数是几，就表示连乘几次。" },
            { question: "关于 $a^1$ 的说法，错误的是 (    )。", options: ["$a^1$ 表示 $1$ 个 $a$ 与自己相乘", "$a^1$ 等于 $a$ 本身", "任何数都是它本身的 $1$ 次幂", "指数 $1$ 通常省略"], answer: "$a^1$ 表示 $1$ 个 $a$ 与自己相乘", point: "一次幂", explanation: "$a^1$ 就是 $a$ 本身，不涉及“相乘”动作。" },
            { question: "在 $5^3$ 中，数字 $3$ 是 (    )，计算结果 $125$ 是 (    )。", options: ["次方(指数)，幂", "幂，次方", "系数，次数", "项，值"], answer: "次方(指数)，幂", point: "术语区分", explanation: "指数也叫次方，运算结果叫幂。" },
            { question: "下列描述中，体现“幂”作为运算结果含义的是 (    )。", options: ["$100$ 是 $10$ 的二次幂", "将 $x$ 提升到 $4$ 次方", "$y^2$ 中 $2$ 是次方", "乘方是重复相乘的过程"], answer: "$100$ 是 $10$ 的二次幂", point: "幂的概念", explanation: "“幂”是一个名词，指代运算得到的那个数。" },
            { question: "关于“次方”与“次幂”，最准确的理解是 (    )。", options: ["习惯上“平方”对应二次方，“立方”对应三次方", "次方是动词，次幂是名词", "所有次方结果都叫次幂", "以上都正确"], answer: "以上都正确", point: "数学语言", explanation: "这是数学中约定俗成的称呼习惯。" }
        ],

        // =============================================
        // 3.2 幂的运算法则 (12题)
        // =============================================
        power_rules: [
            { question: "计算 $x^3 \\cdot x^5$ 的结果是 (    )。", options: ["$x^8$", "$x^{15}$", "$2x^8$", "$x^2$"], answer: "$x^8$", point: "同底数幂乘法", explanation: "底数不变，指数相加：$3+5=8$。" },
            { question: "计算 $a \\cdot a^2 \\cdot a^4$ 的结果是 (    )。", options: ["$a^7$", "$a^6$", "$a^8$", "$3a^7$"], answer: "$a^7$", point: "多项乘法", explanation: "$1+2+4=7$（注意 $a=a^1$）。" },
            { question: "若 $3^m = 2$，$3^n = 5$，则 $3^{m+n}$ 的值是 (    )。", options: ["10", "7", "25", "32"], answer: "10", point: "法则逆用", explanation: "$3^{m+n} = 3^m \\cdot 3^n = 2 \\times 5 = 10$。" },
            { question: "计算 $(x^3)^2$ 的结果是 (    )。", options: ["$x^6$", "$x^5$", "$x^9$", "$2x^3$"], answer: "$x^6$", point: "幂的乘方", explanation: "底数不变，指数相乘：$3 \\times 2 = 6$。" },
            { question: "计算 $[(-a)^2]^3$ 的结果是 (    )。", options: ["$a^6$", "$-a^6$", "$a^5$", "$-a^5$"], answer: "$a^6$", point: "符号与乘方", explanation: "$(-a)^2=a^2$，再 $(a^2)^3=a^6$。" },
            { question: "已知 $9^n = 3^8$，则 $n$ 的值为 (    )。", options: ["4", "2", "8", "16"], answer: "4", point: "统一底数", explanation: "$9^n = (3^2)^n = 3^{2n}$，故 $2n=8$。" },
            { question: "计算 $(2x)^3$ 的结果是 (    )。", options: ["$8x^3$", "$2x^3$", "$6x^3$", "$8x$"], answer: "$8x^3$", point: "积的乘方", explanation: "系数也要乘方：$2^3=8$。" },
            { question: "计算 $(-3a^2 b)^2$ 的结果是 (    )。", options: ["$9a^4 b^2$", "$-9a^4 b^2$", "$6a^4 b^2$", "$9a^2 b^2$"], answer: "$9a^4 b^2$", point: "积的乘方进阶", explanation: "$(-3)^2=9, (a^2)^2=a^4, b^2=b^2$。" },
            { question: "计算 $0.125^{2024} \\cdot 8^{2024}$ 的结果是 (    )。", options: ["1", "0", "8", "2024"], answer: "1", point: "巧算", explanation: "$(0.125 \\times 8)^{2024} = 1^{2024} = 1$。" },
            { question: "计算 $a^8 \\div a^2$ 的结果是 (    )。", options: ["$a^6$", "$a^4$", "$a^{10}$", "$a^{16}$"], answer: "$a^6$", point: "同底数幂除法", explanation: "底数不变，指数相减：$8-2=6$。" },
            { question: "计算 $(-x)^{10} \\div (-x)^3$ 的结果是 (    )。", options: ["$-x^7$", "$x^7$", "$x^{13}$", "$-x^{13}$"], answer: "$-x^7$", point: "除法符号", explanation: "$(-x)^7$ 是奇次幂，结果为负。" },
            { question: "若 $x^{3m-1} \\div x^m = x^5$，则 $m$ 的值为 (    )。", options: ["3", "2", "4", "6"], answer: "3", point: "指数方程", explanation: "$(3m-1)-m=5 \\Rightarrow 2m=6 \\Rightarrow m=3$。" }
        ],

        // =============================================
        // 3.3 零指数与负整数指数 (6题)
        // =============================================
        zero_neg_exp: [
            { question: "计算 $2026^0$ 的结果是 (    )。", options: ["1", "0", "2026", "无意义"], answer: "1", point: "零指数幂", explanation: "任何非零数的零次幂都等于 1。" },
            { question: "若 $(x + 5)^0$ 有意义，则 $x$ 的取值范围是 (    )。", options: ["$x \\ne -5$", "$x = -5$", "$x > -5$", "任意实数"], answer: "$x \\ne -5$", point: "零指数条件", explanation: "底数不能为 0。" },
            { question: "计算 $1^{100} + (-2025)^0$ 的结果是 (    )。", options: ["2", "1", "0", "-2024"], answer: "2", point: "混合计算", explanation: "$1 + 1 = 2$。" },
            { question: "计算 $2^{-3}$ 的结果是 (    )。", options: ["$\\frac{1}{8}$", "-8", "-6", "$\\frac{1}{6}$"], answer: "$\\frac{1}{8}$", point: "负整数指数", explanation: "$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$。" },
            { question: "计算 $(-2)^{-2}$ 的结果是 (    )。", options: ["$\\frac{1}{4}$", "$-\\frac{1}{4}$", "4", "-4"], answer: "$\\frac{1}{4}$", point: "负底数负指数", explanation: "$\\frac{1}{(-2)^2} = \\frac{1}{4}$。" },
            { question: "计算 $(\\frac{1}{3})^{-2}$ 的结果是 (    )。", options: ["9", "$\\frac{1}{9}$", "-9", "6"], answer: "9", point: "分数负指数", explanation: "倒数的平方：$3^2=9$。" }
        ],

        // =============================================
        // 3.4 整式的概念 (12题)
        // =============================================
        integral_concepts: [
            { question: "下列代数式中，属于单项式的是 (    )。", options: ["$-3x^2y$", "$a + b$", "$\\frac{1}{x}$", "$\\frac{x - y}{2}$"], answer: "$-3x^2y$", point: "单项式定义", explanation: "数与字母的积。注意分母含字母不是整式。" },
            { question: "关于单项式的说法正确的是 (    )。", options: ["$\\frac{a}{2}$ 是单项式", "$0$ 不是单项式", "$x$ 的次数是 $0$", "$-abc$ 没有系数"], answer: "$\\frac{a}{2}$ 是单项式", point: "单项式细节", explanation: "$\\frac{a}{2} = \\frac{1}{2}a$。" },
            { question: "在 $x^2 + 1, \\frac{x}{y}, -5, a, \\frac{x+y}{3}$ 中，单项式有 (    ) 个。", options: ["2", "1", "3", "4"], answer: "2", point: "识别单项式", explanation: "$-5$ 和 $a$ 是单项式。" },
            { question: "单项式 $-\\frac{2x^2y}{3}$ 的系数是 (    )。", options: ["$-\\frac{2}{3}$", "$\\frac{2}{3}$", "-2", "-3"], answer: "$-\\frac{2}{3}$", point: "系数", explanation: "数字因数包括负号和分母。" },
            { question: "单项式 $-xy^2$ 的系数是 (    )。", options: ["-1", "1", "0", "-x"], answer: "-1", point: "隐含系数", explanation: "负号代表系数 -1。" },
            { question: "单项式 $\\frac{\\pi a^2}{2}$ 的系数是 (    )。", options: ["$\\frac{\\pi}{2}$", "$\\frac{1}{2}$", "$\\pi$", "2"], answer: "$\\frac{\\pi}{2}$", point: "含π系数", explanation: "$\\pi$ 是常数。" },
            { question: "单项式 $3a^2bc^3$ 的次数是 (    )。", options: ["6", "5", "3", "7"], answer: "6", point: "次数", explanation: "$2+1+3=6$（注意 $b$ 的指数是 1）。" },
            { question: "关于多项式 $x^2 - 3x + 5$，说法错误的是 (    )。", options: ["一次项系数是 3", "它是二次三项式", "最高次项是 $x^2$", "常数项是 5"], answer: "一次项系数是 3", point: "多项式项", explanation: "系数要带符号，应为 -3。" },
            { question: "多项式 $2x^2y - 3xy^3 + y - 1$ 的次数是 (    )。", options: ["4", "2", "3", "7"], answer: "4", point: "多项式次数", explanation: "最高次项 $-3xy^3$ 的次数是 $1+3=4$。" },
            { question: "下列关于多项式项的说法中，正确的是 (    )。", options: ["多项式中不含字母的项叫做常数项", "$x^2 - y^2$ 的项是 $x^2, y^2$", "$x + \\frac{1}{x}$ 是二项式", "次数是所有项次数的和"], answer: "多项式中不含字母的项叫做常数项", point: "项的定义", explanation: "项包含前面的符号。" },
            { question: "已知一个多项式是三次二项式，则它可能是 (    )。", options: ["$x^2y - 1$", "$x^3 + y^3 + 1$", "$3x + 2$", "$x^3 + x^4$"], answer: "$x^2y - 1$", point: "多项式命名", explanation: "次数为3，项数为2。" },
            { question: "下列式子中，属于整式的是 (    )。", options: ["$\\frac{x + y}{2}$", "$\\frac{1}{a} + 1$", "$\\sqrt{x}$", "$|x|$"], answer: "$\\frac{x + y}{2}$", point: "整式范围", explanation: "整式包括单项式和多项式，分母不含字母。" }
        ],

        // =============================================
        // 3.5 整式的加减 (9题)
        // =============================================
        addition_subtraction: [
            { question: "下列各组单项式中，是同类项的是 (    )。", options: ["$x^2y$ 与 $-3yx^2$", "$2a^2b$ 与 $2ab^2$", "$3x^2$ 与 $x^3$", "$ab$ 与 $abc$"], answer: "$x^2y$ 与 $-3yx^2$", point: "同类项定义", explanation: "字母相同且指数相同。" },
            { question: "关于同类项的说法正确的是 (    )。", options: ["所有的常数项都是同类项", "字母相同就是同类项", "只有系数相同才是", "同类项系数必相同"], answer: "所有的常数项都是同类项", point: "常数同类项", explanation: "常数项视为同类。" },
            { question: "若 $x^m y^2$ 与 $-2x^3 y^n$ 是同类项，则 $m+n=$ (    )。", options: ["5", "6", "1", "-1"], answer: "5", point: "同类项参数", explanation: "$m=3, n=2$。" },
            { question: "合并同类项 $3x - 5x$ 的结果是 (    )。", options: ["$-2x$", "$-2$", "$2x$", "$-8x$"], answer: "$-2x$", point: "合并法则", explanation: "$(3-5)x = -2x$。" },
            { question: "下列合并同类项正确的是 (    )。", options: ["$4x^2y - 4yx^2 = 0$", "$3a + 2b = 5ab$", "$3x^2 + 2x^3 = 5x^5$", "$7a - a = 7$"], answer: "$4x^2y - 4yx^2 = 0$", point: "合并判断", explanation: "系数相减为 0。" },
            { question: "化简 $2(x - y) - 3(x + y)$ 的结果是 (    )。", options: ["$-x - 5y$", "$-x - y$", "$5x - y$", "$-x + 5y$"], answer: "$-x - 5y$", point: "去括号", explanation: "$2x-2y-3x-3y = -x-5y$。" },
            { question: "多项式 $(2x - 3)$ 与 $(x + 1)$ 的和是 (    )。", options: ["$3x - 2$", "$3x - 4$", "$x - 2$", "$3x + 2$"], answer: "$3x - 2$", point: "整式加法", explanation: "$2x+x-3+1 = 3x-2$。" },
            { question: "已知 $A = x^2 - 2x$，$B = x^2 + 1$，则 $A - B$ 为 (    )。", options: ["$-2x - 1$", "$-2x + 1$", "$2x^2 - 2x + 1$", "$-2x$"], answer: "$-2x - 1$", point: "整式减法", explanation: "$x^2-2x-(x^2+1) = -2x-1$。" },
            { question: "一个多项式减去 $(x^2 - y^2)$ 等于 $(x^2 + y^2)$，则这个多项式是 (    )。", options: ["$2x^2$", "$2y^2$", "$-2x^2$", "$-2y^2$"], answer: "$2x^2$", point: "逆运算", explanation: "差+减式：$(x^2+y^2)+(x^2-y^2)=2x^2$。" }
        ],

        // =============================================
        // 3.6 整式的乘法 (10题)
        // =============================================
        multiplication: [
            { question: "计算 $3x^2 \\cdot 5x^3$ 的结果是 (    )。", options: ["$15x^5$", "$8x^5$", "$15x^6$", "$8x^6$"], answer: "$15x^5$", point: "单项式乘法", explanation: "系数相乘，指数相加。" },
            { question: "计算 $(-2a^2b) \\cdot (-3ab^3)$ 的结果是 (    )。", options: ["$6a^3b^4$", "$-6a^3b^4$", "$6a^2b^3$", "$5a^3b^4$"], answer: "$6a^3b^4$", point: "负数乘法", explanation: "负负得正，指数累加。" },
            { question: "下列运算正确的是 (    )。", options: ["$(-3x^2) \\cdot (2x^2) = -6x^4$", "$(2x^2) \\cdot (3x^3) = 6x^6$", "$(ax) \\cdot (bx) = abx$", "$4x^2 \\cdot 2x^2 = 8x^2$"], answer: "$(-3x^2) \\cdot (2x^2) = -6x^4$", point: "乘法辨析", explanation: "系数乘系数，指数加指数。" },
            { question: "计算 $2x(x + 3)$ 的结果是 (    )。", options: ["$2x^2 + 6x$", "$2x^2 + 3$", "$2x + 6$", "$x^2 + 6x$"], answer: "$2x^2 + 6x$", point: "单乘多", explanation: "分配律：$2x \\cdot x + 2x \\cdot 3$。" },
            { question: "计算 $-3a^2(2a - 4b)$ 的结果是 (    )。", options: ["$-6a^3 + 12a^2b$", "$-6a^3 - 12a^2b$", "$-6a^2 + 12a^2b$", "$6a^3 - 12a^2b$"], answer: "$-6a^3 + 12a^2b$", point: "负号分配", explanation: "注意 $-3a^2 \\times -4b = +12a^2b$。" },
            { question: "若单项式乘多项式结果为 $3x^3 - 6x^2$，单项式为 $3x$，则多项式为 (    )。", options: ["$x^2 - 2x$", "$x^2 + 2x$", "$x - 2$", "$x^2 - 2$"], answer: "$x^2 - 2x$", point: "乘法逆运", explanation: "每一项除以 $3x$。" },
            { question: "计算 $(x + 1)(x + 2)$ 的结果是 (    )。", options: ["$x^2 + 3x + 2$", "$x^2 + 2$", "$x^2 + 2x + 1$", "$x^2 + x + 2$"], answer: "$x^2 + 3x + 2$", point: "多乘多", explanation: "$x^2 + 2x + x + 2$。" },
            { question: "计算 $(2a - 3)(a + 4)$ 的结果是 (    )。", options: ["$2a^2 + 5a - 12$", "$2a^2 - 5a - 12$", "$2a^2 + 11a - 12$", "$2a^2 - 12$"], answer: "$2a^2 + 5a - 12$", point: "多乘多进阶", explanation: "$8a - 3a = 5a$。" },
            { question: "若 $(x + m)(x - 3) = x^2 - x - 6$，则 $m$ 的值是 (    )。", options: ["2", "-2", "3", "-3"], answer: "2", point: "系数对应", explanation: "一次项系数 $m-3 = -1$。" },
            { question: "计算 $(x^2 + x + 1)(x - 1)$ 的结果是 (    )。", options: ["$x^3 - 1$", "$x^3 + 1$", "$x^3 + 2x^2 + 2x + 1$", "$x^3 - 2x^2 - 2x + 1$"], answer: "$x^3 - 1$", point: "立方差展开", explanation: "中间项全部抵消。" }
        ],

        // =============================================
        // 3.7 整式的混合运算 (12题)
        // =============================================
        mixed_operations: [
            { question: "无括号时，整式混合运算的顺序是 (    )。", options: ["先乘方，再乘除，后加减", "从左到右", "先加减，再乘除", "先乘除，再加减，后乘方"], answer: "先乘方，再乘除，后加减", point: "运算顺序", explanation: "数学通用优先级。" },
            { question: "计算 $(2x)^2 + x \\cdot 3x$ 第一步是 (    )。", options: ["积的乘方 $(2x)^2$", "乘法 $x \\cdot 3x$", "加法", "合并同类项"], answer: "积的乘方 $(2x)^2$", point: "优先级", explanation: "乘方优先级最高。" },
            { question: "带括号的混合运算顺序是 (    )。", options: ["先小括号，再中括号，后大括号", "总是先算乘方", "先算括号外", "随意顺序"], answer: "先小括号，再中括号，后大括号", point: "括号规则", explanation: "由内向外。" },
            { question: "计算 $a^2 \\cdot a^3 + a^5$ 的结果是 (    )。", options: ["$2a^5$", "$a^{10}$", "$a^6$", "$2a^6$"], answer: "$2a^5$", point: "乘加混合", explanation: "$a^5 + a^5 = 2a^5$。" },
            { question: "计算 $2x \\cdot 3x - x^2$ 的结果是 (    )。", options: ["$5x^2$", "$5x$", "$6x^2$", "$4x^2$"], answer: "$5x^2$", point: "乘减混合", explanation: "$6x^2 - x^2 = 5x^2$。" },
            { question: "化简 $(x^3)^2 + x^2 \\cdot x^4$ 的结果是 (    )。", options: ["$2x^6$", "$x^6 + x^8$", "$x^9 + x^6$", "$2x^{12}$"], answer: "$2x^6$", point: "乘方混合", explanation: "$x^6 + x^6 = 2x^6$。" },
            { question: "计算 $a^3 \\cdot a^2 - (a^2)^3 \\div a$ 的结果是 (    )。", options: ["0", "$a^5$", "$2a^5$", "$a^4$"], answer: "0", point: "除减混合", explanation: "$a^5 - a^5 = 0$。" },
            { question: "化简 $x^2 \\cdot x^3 + (x^2)^2 \\cdot x - 2x^5$ 的结果是 (    )。", options: ["0", "$x^5$", "$2x^5$", "$x^5 + x^4 - 2x^5$"], answer: "0", point: "多步混合", explanation: "$x^5 + x^5 - 2x^5 = 0$。" },
            { question: "计算 $3a^2 \\cdot a^4 + (-2a^3)^2$ 的结果是 (    )。", options: ["$7a^6$", "$-a^6$", "$7a^{12}$", "$a^6$"], answer: "$7a^6$", point: "符号混合", explanation: "$3a^6 + 4a^6 = 7a^6$。" },
            { question: "化简 $-2x(x - 3) + 2x^2$ 的结果是 (    )。", options: ["$6x$", "$4x^2 - 6x$", "$-4x^2 + 6x$", "$6x + 4x^2$"], answer: "$6x$", point: "去括号混合", explanation: "$-2x^2 + 6x + 2x^2 = 6x$。" },
            { question: "计算 $a^2 - (a + 1)(a - 1)$ 的结果是 (    )。", options: ["1", "-1", "$2a^2 - 1$", "0"], answer: "1", point: "乘法公式混合", explanation: "$a^2 - (a^2 - 1) = 1$。" },
            { question: "计算 $-3x^2 - (x - 2x^2)$ 的结果是 (    )。", options: ["$-x^2 - x$", "$-5x^2 - x$", "$-x^2 + x$", "$-5x^2 + x$"], answer: "$-x^2 - x$", point: "纯加减混合", explanation: "$-3x^2 - x + 2x^2 = -x^2 - x$。" }
        ],

        // =============================================
        // 3.8 乘法公式 (9题)
        // =============================================
        formulas: [
            { question: "计算 $(x + 3)(x - 3)$ 的结果是 (    )。", options: ["$x^2 - 9$", "$x^2 - 3$", "$x^2 + 9$", "$x^2 - 6x + 9$"], answer: "$x^2 - 9$", point: "平方差公式", explanation: "$a^2 - b^2$。" },
            { question: "计算 $(-2a + b)(2a + b)$ 的结果是 (    )。", options: ["$b^2 - 4a^2$", "$4a^2 - b^2$", "$-4a^2 - b^2$", "$b^2 - 2a^2$"], answer: "$b^2 - 4a^2$", point: "平方差变式", explanation: "$(b-2a)(b+2a) = b^2 - 4a^2$。" },
            { question: "计算 $(x + y - 1)(x - y + 1)$ 的结果是 (    )。", options: ["$x^2 - (y - 1)^2$", "$x^2 - y^2 - 1$", "$(x + y)^2 - 1$", "$x^2 - y^2 + 1$"], answer: "$x^2 - (y - 1)^2$", point: "分组平方差", explanation: "$[x + (y-1)][x - (y-1)]$。" },
            { question: "计算 $(a - b)^2$ 的展开结果是 (    )。", options: ["$a^2 - 2ab + b^2$", "$a^2 - b^2$", "$a^2 + b^2$", "$a^2 + 2ab + b^2$"], answer: "$a^2 - 2ab + b^2$", point: "完全平方公式", explanation: "切勿漏掉中间项。" },
            { question: "计算 $(-2x + 3y)^2$ 的结果是 (    )。", options: ["$4x^2 - 12xy + 9y^2$", "$4x^2 + 12xy + 9y^2$", "$-4x^2 + 12xy - 9y^2$", "$4x^2 + 9y^2$"], answer: "$4x^2 - 12xy + 9y^2$", point: "公式符号", explanation: "中间项符号由积决定。" },
            { question: "若 $x^2 + kx + 25$ 是完全平方式，则 $k$ 的值是 (    )。", options: ["$\\pm 10$", "5", "10", "$\\pm 5$"], answer: "$\\pm 10$", point: "公式逆用", explanation: "中间项为 $\\pm 2 \\times 5 = \\pm 10$。" },
            { question: "计算 $(x + 2)(x^2 - 2x + 4)$ 的结果是 (    )。", options: ["$x^3 + 8$", "$x^3 + 4$", "$x^3 - 8$", "$x^3 + 2x^2 + 8$"], answer: "$x^3 + 8$", point: "立方和公式", explanation: "$a^3 + b^3$。" },
            { question: "计算 $(a - 3)(a^2 + 3a + 9)$ 的结果是 (    )。", options: ["$a^3 - 27$", "$a^3 + 27$", "$a^3 - 9$", "$a^3 - 6a + 9$"], answer: "$a^3 - 27$", point: "立方差公式", explanation: "$a^3 - b^3$。" },
            { question: "计算 $(x - y)(x + y)(x^2 + y^2)$ 的结果是 (    )。", options: ["$x^4 - y^4$", "$x^4 + y^4$", "$x^4 - 2x^2y^2 + y^4$", "$x^2 - y^2$"], answer: "$x^4 - y^4$", point: "连续平方差", explanation: "$(x^2-y^2)(x^2+y^2)$。" }
        ],

        // =============================================
        // 3.9 - 3.11 因式分解 (18题)
        // =============================================
        factorization: [
            { question: "下列式子中，属于因式分解变形的是 (    )。", options: ["$a^2 - 4 = (a+2)(a-2)$", "$(x+1)(x-1) = x^2 - 1$", "$x^2 - 2x + 1 = x(x-2) + 1$", "$m(a+b) = ma + mb$"], answer: "$a^2 - 4 = (a+2)(a-2)$", point: "因式分解定义", explanation: "和化为积。" },
            { question: "把一个多项式化成几个整式的 (    ) 的形式叫做因式分解。", options: ["积", "和", "差", "商"], answer: "积", point: "分解本质", explanation: "逆运算。" },
            { question: "若 $x^2 + px + q$ 分解为 $(x-1)(x+2)$，则 $p, q$ 分别是 (    )。", options: ["$p=1, q=-2$", "$p=-1, q=2$", "$p=1, q=2$", "$p=-1, q=-2$"], answer: "$p=1, q=-2$", point: "分解系数", explanation: "$(x-1)(x+2) = x^2+x-2$。" },
            { question: "单项式 $4x^2y$ 与 $6xy^2$ 的系数的最大公约数是 (    )。", options: ["2", "4", "6", "12"], answer: "2", point: "公因数", explanation: "4和6的最大公约数。" },
            { question: "多项式 $8a^3b^2 - 12a^2b^3$ 的最大公因式是 (    )。", options: ["$4a^2b^2$", "$2ab$", "$4a^3b^3$", "$8a^2b^2$"], answer: "$4a^2b^2$", point: "最大公因式", explanation: "系数最大公约数+字母最低次幂。" },
            { question: "多项式 $3(x-y)^2 - 6(y-x)$ 的公因式是 (    )。", options: ["$3(x-y)$", "$3$", "$x-y$", "$6(x-y)$"], answer: "$3(x-y)$", point: "变号提取", explanation: "将 $y-x$ 变为 $-(x-y)$。" },
            { question: "分解因式 $5x - 5y = $ (    )。", options: ["$5(x-y)$", "$5x-y$", "$5(x+y)$", "$x-y$"], answer: "$5(x-y)$", point: "提公因式简单", explanation: "提取系数 5。" },
            { question: "分解因式 $3x^2y - 6xy^2 = $ (    )。", options: ["$3xy(x-2y)$", "$3xy(x-y)$", "$3(x^2y-2xy^2)$", "$3xy(x+2y)$"], answer: "$3xy(x-2y)$", point: "提公因式中等", explanation: "提取 $3xy$。" },
            { question: "分解因式 $-4a^3 + 16a^2 - 8a = $ (    )。", options: ["$-4a(a^2 - 4a + 2)$", "$4a(-a^2 + 4a - 2)$", "$-4a(a^2 + 4a - 2)$", "$-4(a^3 - 4a^2 + 2a)$"], answer: "$-4a(a^2 - 4a + 2)$", point: "提负公因式", explanation: "变号：$-4a(a^2 - 4a + 2)$。" },
            { question: "分解因式 $x^2 - 16 = $ (    )。", options: ["$(x+4)(x-4)$", "$(x-4)^2$", "$(x+4)^2$", "$(x-8)(x+2)$"], answer: "$(x+4)(x-4)$", point: "平方差分解", explanation: "$a^2-b^2$。" },
            { question: "分解因式 $a^2 + 6a + 9 = $ (    )。", options: ["$(a+3)^2$", "$(a-3)^2$", "$(a+9)^2$", "$(a+3)(a-3)$"], answer: "$(a+3)^2$", point: "完全平方分解", explanation: "完全平方式。" },
            { question: "分解因式 $2x^2 - 8 = $ (    )。", options: ["$2(x+2)(x-2)$", "$2(x-2)^2$", "$2(x^2-4)$", "无法分解"], answer: "$2(x+2)(x-2)$", point: "综合分解", explanation: "先提 2，再平方差。" },
            { question: "分解因式 $ax + ay + bx + by = $ (    )。", options: ["$(a+b)(x+y)$", "$a(x+y)+b(x+y)$", "$(a+x)(b+y)$", "$ab(x+y)$"], answer: "$(a+b)(x+y)$", point: "分组分解基础", explanation: "$a(x+y)+b(x+y)$。" },
            { question: "分解因式 $x^2 - xy + 2x - 2y = $ (    )。", options: ["$(x+2)(x-y)$", "$(x-2)(x+y)$", "$x(x-y)+2(x-y)$", "$(x-y)(x-2)$"], answer: "$(x+2)(x-y)$", point: "分组分解变号", explanation: "提取 $(x-y)$。" },
            { question: "分解因式 $a^2 - b^2 + a - b = $ (    )。", options: ["$(a-b)(a+b+1)$", "$(a-b)(a+b)$", "$(a+b)(a-b+1)$", "$a(a+1)-b(b+1)$"], answer: "$(a-b)(a+b+1)$", point: "分组综合", explanation: "$(a-b)(a+b) + (a-b)$。" },
            { question: "分解因式 $x^2 + 3x + 2 = $ (    )。", options: ["$(x+1)(x+2)$", "$(x-1)(x-2)$", "$(x+3)(x+1)$", "$(x+2)(x-1)$"], answer: "$(x+1)(x+2)$", point: "十字相乘基础", explanation: "$1 \\times 2 = 2, 1+2=3$。" },
            { question: "分解因式 $x^2 - 5x + 6 = $ (    )。", options: ["$(x-2)(x-3)$", "$(x+2)(x+3)$", "$(x-1)(x-6)$", "$(x+1)(x-6)$"], answer: "$(x-2)(x-3)$", point: "十字相乘负号", explanation: "$(-2) \\times (-3) = 6$。" },
            { question: "分解因式 $2x^2 + 5x + 2 = $ (    )。", options: ["$(2x+1)(x+2)$", "$(2x+2)(x+1)$", "$(x+5)(2x+1)$", "$(2x-1)(x-2)$"], answer: "$(2x+1)(x+2)$", point: "十字相乘进阶", explanation: "$2x \\cdot 2 + x \\cdot 1 = 5x$。" }
        ]
    },

    // 核心生成函数
    generateQuiz: function() {
        let allQuestions = [];
        
        // 遍历所有模块，提取题目
        const categories = Object.keys(this.database);
        
        categories.forEach(cat => {
            this.database[cat].forEach(q => {
                allQuestions.push({
                    ...q,
                    options: this.shuffleOptions(q.options, q.answer)
                });
            });
        });

        // 打乱题目顺序
        return allQuestions.sort(() => Math.random() - 0.5);
    },

    // 智能建议
    getAdvice: function(score, wrongPoints) {
        let adviceHTML = "";
        
        if (score === 100) {
            adviceHTML += "<div class='mb-4 p-4 bg-green-50 rounded-lg text-green-700 font-bold'><i class='fa-solid fa-flag-checkered mr-2'></i>代数大师！你已经完全征服了整式与因式分解，这是初中数学最核心的计算能力！</div>";
        } else if (score >= 80) {
            adviceHTML += "<div class='mb-4 p-4 bg-blue-50 rounded-lg text-blue-700 font-bold'>成绩优异！你的代数运算基础很扎实。</div>";
        } else {
            adviceHTML += "<div class='mb-4 p-4 bg-yellow-50 rounded-lg text-yellow-700 font-bold'>基础薄弱。整式运算环环相扣，建议从<strong>幂的运算法则</strong>开始重新梳理。</div>";
        }

        if (wrongPoints.length > 0) {
            adviceHTML += "<h4 class='font-bold text-slate-800 mb-2'>📉 痛点狙击</h4>";
            adviceHTML += "<div class='overflow-hidden rounded-lg border border-slate-200'><table class='min-w-full text-sm text-left text-slate-500'><thead class='text-xs text-slate-700 uppercase bg-slate-50'><tr><th class='px-6 py-3'>知识点</th><th class='px-6 py-3'>频次</th><th class='px-6 py-3'>复习策略</th></tr></thead><tbody>";

            const counts = {};
            wrongPoints.forEach(p => counts[p] = (counts[p] || 0) + 1);
            const sortedPoints = Object.keys(counts).sort((a,b) => counts[b] - counts[a]);

            sortedPoints.forEach(point => {
                let strategy = "复习课本例题。";
                if (point.includes("幂")) strategy = "💡 记住口诀：乘法指数相加，乘方指数相乘。";
                else if (point.includes("符号")) strategy = "💡 负号是最大的陷阱，去括号时一定要注意变号。";
                else if (point.includes("公式")) strategy = "💡 完全平方公式不要漏掉中间的 2ab。";
                else if (point.includes("分解")) strategy = "💡 提公因式是第一步，分解一定要彻底。";
                else if (point.includes("运算")) strategy = "💡 严格遵守先乘方、再乘除、后加减的顺序。";

                adviceHTML += `<tr class='bg-white border-b hover:bg-slate-50'><td class='px-6 py-4 font-medium text-slate-900'>${point}</td><td class='px-6 py-4 text-red-600 font-bold'>${counts[point]}</td><td class='px-6 py-4'>${strategy}</td></tr>`;
            });

            adviceHTML += "</tbody></table></div>";
        }

        return adviceHTML;
    }
};

window.AppLibrary = window.AppLibrary || {};
window.AppLibrary.Chapter3Generator = Chapter3_Generator;