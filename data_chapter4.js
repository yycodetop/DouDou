/**
 * 第四章：分式 (终极融合版)
 * 特性：
 * 1. 结构对齐：增加 sections 映射，支持“专项突破”模式。
 * 2. 智能反馈：集成 getAdvice 可视化归纳表格。
 * 3. 题库完整：保留所有 35 道精选试题，涵盖分式运算核心。
 */

// --- 1. 核心工具库 ---
const Utils4 = {
    // 数组洗牌
    shuffle: (arr) => arr.sort(() => Math.random() - 0.5)
};

const Chapter4_Generator = {
    info: {
        id: "ch4",
        title: "第四章 分式",
        description: "从定义判定到混合运算技巧，35道题助你攻克代数变形难关",
        icon: "fa-solid fa-divide"
    },

    // 模块标题映射 (用于专项突破显示)
    sections: {
        "definition_properties": "4.1 分式的定义与性质",
        "addition_common_denom": "4.2 加减法与通分",
        "multi_simple_mixed": "4.2 乘除与混合运算"
    },

    // 辅助工具：打乱选项顺序
    shuffleOptions: function(options) {
        return [...options].sort(() => Math.random() - 0.5);
    },

    // 核心题库数据库
    database: {
        // =============================================
        // 4.1 分式的定义与性质 (10题)
        // =============================================
        definition_properties: [
            { question: "在代数式 $\\frac{x}{3}$，$\\frac{2}{x}$，$\\frac{x+y}{\\pi}$，$\\frac{a-b}{a}$ 中，分式的个数是 (    )", options: ["2", "1", "3", "4"], answer: "2", point: "分式定义判定", explanation: "分母中含有代表未知量的字母的代数式才是分式。$\\pi$ 和 3 是常数。" },
            { question: "若分式 $\\frac{3}{x-1}$ 有意义，则 $x$ 的取值范围是 (    )", options: ["$x \\ne 1$", "$x = 1$", "$x \\ne -1$", "$x \\ne 0$"], answer: "$x \\ne 1$", point: "分式有意义的条件", explanation: "分式有意义的前提是分母不等于 0，即 $x-1 \\ne 0$。" },
            { question: "分式 $\\frac{x+2}{x^2-4}$ 无意义时，$x$ 的值是 (    )", options: ["$x = \\pm 2$", "$x = 2$", "$x = -2$", "$x \\ne \\pm 2$"], answer: "$x = \\pm 2$", point: "分式无意义的条件", explanation: "令分母 $x^2-4=0$，解得 $x=\\pm 2$。此时分式失去意义。" },
            { question: "若分式 $\\frac{x^2-9}{x-3}$ 的值为 0，则 $x$ 的值是 (    )", options: ["$x = -3$", "$x = 3$", "$x = \\pm 3$", "$x = 0$"], answer: "$x = -3$", point: "分式值为零的判定", explanation: "分子为 0 且分母不为 0。当 $x=3$ 时分母为 0 无意义，故只能取 $x=-3$。" },
            { question: "已知分式 $\\frac{1}{|x|-2}$ 有意义，则 $x$ 应满足的条件是 (    )", options: ["$x \\ne \\pm 2$", "$x \\ne 2$", "$x \\ne -2$", "$x = 2$"], answer: "$x \\ne \\pm 2$", point: "定义域综合应用", explanation: "分母 $|x|-2 \\ne 0$，意味着 $x$ 绝对值不能为 2。" },
            { question: "分式的基本性质规定：分子与分母同时乘以或除以 (    )，分式的值不变。", options: ["同一个不为 0 的整式", "同一个整式", "同一个数", "任意整式"], answer: "同一个不为 0 的整式", point: "分式基本性质", explanation: "这是性质的核心前提，确保变形后分式仍有意义。" },
            { question: "与分式 $\\frac{-a}{b}$ 相等的是 (    )", options: ["$-\\frac{a}{b}$", "$\\frac{a}{b}$", "$\\frac{-a}{-b}$", "$-\\frac{-a}{b}$"], answer: "$-\\frac{a}{b}$", point: "分式符号法则", explanation: "分号、分子、分母三处符号，变动其中两处，值保持不变。" },
            { question: "化简分式 $\\frac{12x^2y}{4xy^2}$ 的结果是 (    )", options: ["$\\frac{3x}{y}$", "$3xy$", "$\\frac{x}{3y}$", "$3x^2$"], answer: "$\\frac{3x}{y}$", point: "分式约分基础", explanation: "分子分母同时约去最大公因式 $4xy$。" },
            { question: "如果分式 $\\frac{x}{x+y}$ 中的 $x, y$ 都扩大为原来的 10 倍，那么分式的值 (    )", options: ["不变", "扩大 10 倍", "缩小 10 倍", "扩大 100 倍"], answer: "不变", point: "性质倍数应用", explanation: "$\\frac{10x}{10x+10y} = \\frac{10x}{10(x+y)} = \\frac{x}{x+y}$。" },
            { question: "不改变分式的值，将 $\\frac{0.2x-y}{x+0.5y}$ 的分子分母系数化为整数，结果为 (    )", options: ["$\\frac{2x-10y}{10x+5y}$", "$\\frac{2x-y}{x+5y}$", "$\\frac{x-5y}{5x+2.5y}$", "$\\frac{2x-10y}{x+5y}$"], answer: "$\\frac{2x-10y}{10x+5y}$", point: "分式系数化整", explanation: "利用性质，分子和分母整体同时乘以 10。" }
        ],

        // =============================================
        // 4.2.1 & 4.2.3 分式的加减与通分 (10题)
        // =============================================
        addition_common_denom: [
            { question: "计算 $\\frac{x}{a} + \\frac{y}{a}$ 的结果是 (    )", options: ["$\\frac{x+y}{a}$", "$\\frac{x+y}{2a}$", "$x+y$", "$\\frac{xy}{a}$"], answer: "$\\frac{x+y}{a}$", point: "同分母加法", explanation: "分母不变，分子相加。" },
            { question: "计算 $\\frac{3}{x-1} - \\frac{2}{x-1}$ 的结果是 (    )", options: ["$\\frac{1}{x-1}$", "1", "$\\frac{5}{x-1}$", "$\\frac{1}{0}$"], answer: "$\\frac{1}{x-1}$", point: "同分母减法", explanation: "直接对分子进行减法运算。" },
            { question: "计算 $\\frac{1}{a} + \\frac{1}{b}$ 的结果是 (    )", options: ["$\\frac{a+b}{ab}$", "$\\frac{2}{a+b}$", "$\\frac{1}{ab}$", "$a+b$"], answer: "$\\frac{a+b}{ab}$", point: "异分母加法基础", explanation: "异分母相加必须先通分为最简公分母 $ab$。" },
            { question: "计算 $\\frac{a}{a-b} + \\frac{b}{b-a}$ 的结果是 (    )", options: ["1", "-1", "$\\frac{a+b}{a-b}$", "0"], answer: "1", point: "变号加法技巧", explanation: "注意 $b-a = -(a-b)$，转化后原式变为 $\\frac{a-b}{a-b} = 1$。" },
            { question: "化简 $\\frac{x+1}{x-1} - \\frac{x-1}{x+1}$ 的结果是 (    )", options: ["$\\frac{4x}{x^2-1}$", "$\\frac{2}{x^2-1}$", "0", "$\\frac{2x^2+2}{x^2-1}$"], answer: "$\\frac{4x}{x^2-1}$", point: "复杂加减化简", explanation: "通分后分子为 $(x+1)^2 - (x-1)^2 = 4x$。" },
            { question: "分式 $\\frac{1}{2x}$ 与 $\\frac{1}{3y}$ 的最简公分母是 (    )", options: ["$6xy$", "$5xy$", "$xy$", "$6x^2y^2$"], answer: "$6xy$", point: "单项式通分", explanation: "系数取最小公倍数 6，字母取所有因式的最高次幂。" },
            { question: "分式 $\\frac{1}{x+1}$ 与 $\\frac{1}{x-1}$ 的最简公分母是 (    )", options: ["$x^2-1$", "$x+1$", "$x-1$", "$x^2+1$"], answer: "$x^2-1$", point: "多项式通分", explanation: "取两分母的乘积 $(x+1)(x-1)$。" },
            { question: "将 $\\frac{1}{x}$ 与 $\\frac{1}{x^2+x}$ 通分后，前者的分子变为 (    )", options: ["$x+1$", "1", "$x$", "$x^2+x$"], answer: "$x+1$", point: "通分变形逻辑", explanation: "分母 $x$ 扩大为 $x(x+1)$，则分子也需乘以 $(x+1)$。" },
            { question: "确定 $\\frac{1}{a^2-b^2}$ 与 $\\frac{1}{a+b}$ 的最简公分母是 (    )", options: ["$a^2-b^2$", "$a+b$", "$(a^2-b^2)(a+b)$", "$a-b$"], answer: "$a^2-b^2$", point: "分解公分母", explanation: "$a^2-b^2$ 包含了另一个分母因子 $(a+b)$。" },
            { question: "三个分式 $\\frac{1}{x-1}, \\frac{1}{x^2-1}, \\frac{1}{1-x}$ 的最简公分母是 (    )", options: ["$x^2-1$", "$(x^2-1)(1-x)$", "$x-1$", "$x+1$"], answer: "$x^2-1$", point: "符号与通分", explanation: "$1-x$ 与 $x-1$ 互为相反数，公分母取 $x^2-1$ 即可涵盖所有项。" }
        ],

        // =============================================
        // 4.2.2 & 4.2.4 & 4.2.5 乘除、化简与混合技巧 (15题)
        // =============================================
        multi_simple_mixed: [
            { question: "计算 $\\frac{a}{b} \\cdot \\frac{b^2}{c}$ 的结果是 (    )", options: ["$\\frac{ab}{c}$", "$\\frac{a}{c}$", "$\\frac{b}{ac}$", "$abc$"], answer: "$\\frac{ab}{c}$", point: "乘法法则应用", explanation: "约去公因式 $b$ 后得出结果。" },
            { question: "计算 $\\frac{x}{y} \\div \\frac{x}{y^2}$ 的结果是 (    )", options: ["$y$", "1", "$\\frac{1}{y}$", "$x^2$"], answer: "$y$", point: "除法变乘法", explanation: "乘以倒数：$\\frac{x}{y} \\cdot \\frac{y^2}{x} = y$。" },
            { question: "计算 $(\\frac{-2a}{b^2})^3$ 的结果是 (    )", options: ["$\\frac{-8a^3}{b^6}$", "$\\frac{-6a^3}{b^5}$", "$\\frac{8a^3}{b^6}$", "$\\frac{-8a^3}{b^5}$"], answer: "$\\frac{-8a^3}{b^6}$", point: "分式乘方运算", explanation: "分子分母分别乘方，奇次方保留负号，指数相乘。" },
            { question: "计算 $\\frac{x^2-1}{x} \\cdot \\frac{1}{x+1}$ 的结果是 (    )", options: ["$\\frac{x-1}{x}$", "$\\frac{x+1}{x}$", "$x-1$", "$\\frac{1}{x}$"], answer: "$\\frac{x-1}{x}$", point: "约分技巧应用", explanation: "分解 $x^2-1$ 为 $(x+1)(x-1)$ 后约分。" },
            { question: "计算 $\\frac{a^2-4}{a+1} \\div \\frac{a-2}{a^2+a}$ 的结果是 (    )", options: ["$a(a+2)$", "$a+2$", "$\\frac{a}{a+2}$", "$a^2+2a+1$"], answer: "$a(a+2)$", point: "综合乘除分解", explanation: "分解因式并变除为乘：$\\frac{(a+2)(a-2)}{a+1} \\cdot \\frac{a(a+1)}{a-2}$。" },
            { question: "化简 $\\frac{a^2-b^2}{a+b}$ 的结果是 (    )", options: ["$a-b$", "$a+b$", "$a^2-b$", "1"], answer: "$a-b$", point: "公式法化简", explanation: "利用平方差公式展开并约分。" },
            { question: "化简 $\\frac{ax+ay}{x+y}$ 的结果是 (    )", options: ["$a$", "$x+y$", "$ax$", "$a+1$"], answer: "$a$", point: "提公因式化简", explanation: "提取 $a$ 得 $\\frac{a(x+y)}{x+y} = a$。" },
            { question: "已知 $x=2025$，计算 $\\frac{x^2-1}{x^2+x} \\cdot \\frac{x}{x-1}$ 的值是 (    )", options: ["1", "2025", "2024", "0"], answer: "1", point: "先化简再求值", explanation: "化简结果为 1，与 $x$ 的具体值无关。" },
            { question: "在分式化简中，下列变形错误的是 (    )", options: ["$\\frac{x^2+y^2}{x+y} = x+y$", "$\\frac{a-b}{b-a} = -1$", "$\\frac{2x}{4x^2} = \\frac{1}{2x}$", "$\\frac{x^2-x}{x} = x-1$"], answer: "$\\frac{x^2+y^2}{x+y} = x+y$", point: "常见化简误区", explanation: "约分是针对因式而言，分子项不能分别约分。" },
            { question: "化简繁分式 $\\frac{1}{1 + \\frac{1}{x}}$ 的结果是 (    )", options: ["$\\frac{x}{x+1}$", "$x+1$", "$\\frac{1}{x+1}$", "$\\frac{x+1}{x}$"], answer: "$\\frac{x}{x+1}$", point: "繁分式处理技巧", explanation: "分母先求和得 $\\frac{x+1}{x}$，取倒数得 $\\frac{x}{x+1}$。" },
            { question: "分式混合运算的优先级顺序规则是 (    )", options: ["先乘除，后加减，有括号先算内", "从左到右依次", "先加减，后乘除", "先通分，再约分"], answer: "先乘除，后加减，有括号先算内", point: "运算优先级", explanation: "遵循标准数学混合运算等级。" },
            { question: "计算 $(1 - \\frac{1}{x}) \\cdot \\frac{x}{x-1}$ 的结果是 (    )", options: ["1", "0", "$x$", "$\\frac{x-1}{x}$"], answer: "1", point: "括号混合运算", explanation: "括号内化为 $\\frac{x-1}{x}$，积为 1。" },
            { question: "计算 $\\frac{a}{a+1} \\cdot (a+1) - 1$ 的结果是 (    )", options: ["$a-1$", "0", "$a$", "$2a$"], answer: "$a-1$", point: "约分混合技巧", explanation: "先约分得 $a$，再减 1。" },
            { question: "计算 $\\frac{x-1}{x} \\div (x - \\frac{1}{x}) + \\frac{1}{x+1}$ 的结果是 (    )", options: ["$\\frac{2}{x+1}$", "$\\frac{1}{x+1}$", "$\\frac{1}{x}$", "1"], answer: "$\\frac{2}{x+1}$", point: "复杂混合技巧", explanation: "$\\frac{x-1}{x} \\cdot \\frac{x}{x^2-1} + \\frac{1}{x+1} = \\frac{1}{x+1} + \\frac{1}{x+1}$。" },
            { question: "已知 $x + \\frac{1}{x} = 3$，求 $x^2 + \\frac{1}{x^2}$ 的值是 (    )", options: ["7", "9", "11", "5"], answer: "7", point: "整体代换法技巧", explanation: "两边平方：$(x + \\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2} = 9$。" }
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
            adviceHTML += "<div class='mb-4 p-4 bg-green-50 rounded-lg text-green-700 font-bold'><i class='fa-solid fa-star text-yellow-500 mr-2'></i>满分通关！你对分式的运算法则和化简技巧掌握得炉火纯青。</div>";
        } else if (score >= 80) {
            adviceHTML += "<div class='mb-4 p-4 bg-blue-50 rounded-lg text-blue-700 font-bold'>成绩优秀！分式是代数运算的基石，请继续保持。</div>";
        } else {
            adviceHTML += "<div class='mb-4 p-4 bg-yellow-50 rounded-lg text-yellow-700 font-bold'>需要加油！分式运算的难点在于符号的处理和彻底化简。</div>";
        }

        if (wrongPoints.length > 0) {
            adviceHTML += "<h4 class='font-bold text-slate-800 mb-2'>🔍 错题知识点深度归纳</h4>";
            adviceHTML += "<div class='overflow-hidden rounded-lg border border-slate-200'><table class='min-w-full text-sm text-left text-slate-500'><thead class='text-xs text-slate-700 uppercase bg-slate-50'><tr><th class='px-6 py-3'>知识板块</th><th class='px-6 py-3'>错误频次</th><th class='px-6 py-3'>核心突破点</th></tr></thead><tbody>";

            const counts = {};
            wrongPoints.forEach(p => counts[p] = (counts[p] || 0) + 1);
            const sortedPoints = Object.keys(counts).sort((a,b) => counts[b] - counts[a]);

            sortedPoints.forEach(point => {
                let strategy = "建议回看基础定义。";
                if (point.includes("定义") || point.includes("意义")) strategy = "牢记：分母不等于 0 是分式存在的前提。";
                else if (point.includes("判定")) strategy = "区分分子为 0 与分式无意义的区别。";
                else if (point.includes("性质")) strategy = "注意：扩大倍数时，分子分母必须整体乘除。";
                else if (point.includes("加减") || point.includes("通分")) strategy = "异分母加减必须先找最简公分母，分子相加减时注意带括号。";
                else if (point.includes("约分") || point.includes("化简")) strategy = "约分前先因式分解！项（加减关系）不能直接约分。";
                else if (point.includes("混合") || point.includes("代换")) strategy = "注意运算顺序，灵活运用完全平方公式进行整体变形。";

                adviceHTML += `<tr class='bg-white border-b hover:bg-slate-50'><td class='px-6 py-4 font-medium text-slate-900'>${point}</td><td class='px-6 py-4 text-red-600 font-bold'>${counts[point]}</td><td class='px-6 py-4'>${strategy}</td></tr>`;
            });

            adviceHTML += "</tbody></table></div>";
            adviceHTML += "<p class='mt-4 text-xs text-slate-400'>* 根据您的错题情况，系统已自动优化后续复习优先级。</p>";
        }

        return adviceHTML;
    }
};

window.AppLibrary = window.AppLibrary || {};
window.AppLibrary.Chapter4Generator = Chapter4_Generator;