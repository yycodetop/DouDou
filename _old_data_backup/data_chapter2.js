/**
 * 第二章：实数 (终极融合版)
 * 特性：
 * 1. 结构对齐：增加 sections 映射，支持“专项突破”模式。
 * 2. 智能反馈：集成 getAdvice 可视化归纳表格。
 * 3. 题库完整：保留所有 82 道精选试题，涵盖概念、计算与估算。
 */

const Chapter2_Generator = {
    info: {
        id: "ch2",
        title: "第二章 实数",
        description: "82道精选试题，从平方根辨析到无理数估算",
        icon: "fa-solid fa-square-root-variable"
    },

    // 模块标题映射 (这是“专项突破”能显示按钮的关键)
    sections: {
        "concepts": "2.1 实数的概念与分类",
        "squareRoots": "2.2 平方根与算术平方根",
        "cubeRoots": "2.3 立方根",
        "operations": "2.4 平方根分类与运算",
        "estimation": "2.5 无理数的估算"
    },

    // 辅助工具
    shuffleOptions: function(options) {
        return [...options].sort(() => Math.random() - 0.5);
    },

    // 核心题库 (包含之前整理的 82 道题)
    database: {
        // =============================================
        // 模块一：实数的概念与分类 (10题)
        // =============================================
        concepts: [
            { question: "下列关于无理数的说法，正确的是 (    )", options: ["无理数是无限不循环小数", "无理数是无限小数", "无理数是低位循环的小数", "带根号的数都是无理数"], answer: "无理数是无限不循环小数", point: "无理数定义", explanation: "无理数的定义是无限不循环小数。无限小数包含循环小数（有理数）。" },
            { question: "在实数 $\\pi$，$3.14$，$\\frac{22}{7}$，$\\sqrt{4}$ 中，属于无理数的是 (    )", options: ["$\\pi$", "$3.14$", "$\\frac{22}{7}$", "$\\sqrt{4}$"], answer: "$\\pi$", point: "无理数识别", explanation: "$\\pi$ 是无理数；$3.14$ 是有限小数；$\\frac{22}{7}$ 是分数；$\\sqrt{4}=2$ 是整数。" },
            { question: "关于数字 $0$ 的描述，下列分类正确的是 (    )", options: ["是有理数，也是实数", "是正实数", "是无理数", "既不是有理数也不是无理数"], answer: "是有理数，也是实数", point: "实数分类", explanation: "0 是整数，属于有理数，当然也是实数。" },
            { question: "在 $\\frac{1}{3}$，$\\sqrt{5}$，$0$，$\\pi$，$\\sqrt{0.16}$ 中，无理数出现的频数是 (    )", options: ["2", "1", "3", "4"], answer: "2", point: "无理数计数", explanation: "无理数有 $\\sqrt{5}$ 和 $\\pi$。注意 $\\sqrt{0.16}=0.4$ 是有理数。" },
            { question: "下列各组数中，三个数都是无理数的一组是 (    )", options: ["$\\sqrt{2}$，$\\pi$，$0.101001...$", "$\\sqrt{9}$，$\\sqrt{3}$，$\\pi$", "$0$，$\\pi$，$\\sqrt{5}$", "$\\sqrt{2}$，$0.3$，$\\frac{\pi}{2}$"], answer: "$\\sqrt{2}$，$\\pi$，$0.101001...$", point: "无理数组合", explanation: "规律构造的不循环小数也是无理数。其他选项均含有理数。" },
            { question: "数轴上的点与 (    ) 具有一一对应的关系。", options: ["实数", "有理数", "无理数", "整数"], answer: "实数", point: "实数与数轴", explanation: "实数集填满了数轴，与数轴上的点一一对应。" },
            { question: "下列命题中，属于真命题的是 (    )", options: ["无理数都是无限小数", "无限小数都是无理数", "实数分为正实数和负实数", "两个无理数的和一定是无理数"], answer: "无理数都是无限小数", point: "命题判断", explanation: "无理数一定是无限小数，但无限小数不一定是无理数（循环小数）。" },
            { question: "下列四个实数中，比 $3$ 小的无理数是 (    )", options: ["$\\sqrt{7}$", "$2$", "$\\sqrt{10}$", "$\\pi$"], answer: "$\\sqrt{7}$", point: "实数比大小", explanation: "$\\sqrt{9}=3$，$\\sqrt{7} < \\sqrt{9}$。$2$ 虽然小但是有理数。" },
            { question: "设 $a$ 是最小的正整数，$b$ 是最大的负整数，$c$ 是绝对值最小的实数，则 $a+b+c$ 的值为 (    )", options: ["0", "1", "-1", "2"], answer: "0", point: "实数性质", explanation: "$a=1, b=-1, c=0$。$1+(-1)+0=0$。" },
            { question: "在实数范围内，下列说法正确的是 (    )", options: ["每一个实数都可以在数轴上找到唯一的对应点", "一个实数的平方根总有两个", "若 $a^2 = b^2$，则 $a=b$", "所有的实数都有倒数"], answer: "每一个实数都可以在数轴上找到唯一的对应点", point: "实数综合", explanation: "A错(负数无平方根)；B错(互为相反数亦可)；D错(0无倒数)。" }
        ],

        // =============================================
        // 模块二：平方根与算术平方根 (24题)
        // =============================================
        squareRoots: [
            { question: "计算 $(-7)^2$ 的结果是 (    )", options: ["49", "-49", "14", "-14"], answer: "49", point: "平方运算", explanation: "负数的偶次幂为正。" },
            { question: "下列各数中，平方后等于 $0.04$ 的数是 (    )", options: ["$\\pm 0.2$", "0.2", "-0.2", "0.02"], answer: "$\\pm 0.2$", point: "开平方逆运算", explanation: "互为相反数的两个数平方相等。" },
            { question: "对于任意实数 $a$，下列关于 $a^2$ 的描述正确的是 (    )", options: ["$a^2$ 是非负数", "$a^2$ 总是正数", "$a^2$ 总是负数", "$a^2$ 符号与 $a$ 相同"], answer: "$a^2$ 是非负数", point: "平方非负性", explanation: "$0^2=0$，其余为正，故为非负数。" },
            { question: "已知一个数的平方等于 $a$，求这个数的运算叫做 (    )", options: ["开平方", "乘方", "算术平方根", "平方"], answer: "开平方", point: "运算定义", explanation: "开平方是平方的逆运算。" },
            { question: "下列关于“开平方”与“平方”关系的描述，错误的是 (    )", options: ["任何数都可以进行开平方运算", "它们互为逆运算", "开平方的结果叫做平方根", "任何数都可以进行平方运算"], answer: "任何数都可以进行开平方运算", point: "运算范围", explanation: "负数不能开平方。" },
            { question: "下列式子能表示“开平方”运算过程的是 (    )", options: ["已知 $x^2=25$，求 $x$", "已知 $x=5$，求 $x^2$", "已知 $x=25$，求 $\\sqrt{x}$", "已知 $x=25$，求 $x^2$"], answer: "已知 $x^2=25$，求 $x$", point: "运算理解", explanation: "已知幂求底数的过程。" },
            { question: "$121$ 的平方根是 (    )", options: ["$\\pm 11$", "11", "-11", "$\\pm 1.1$"], answer: "$\\pm 11$", point: "求平方根", explanation: "正数有两个平方根，符号为正负。" },
            { question: "下列说法中，正确的是 (    )", options: ["0 的平方根是 0", "-4 的平方根是 -2", "1 的平方根是 1", "带根号的数都有两个平方根"], answer: "0 的平方根是 0", point: "特殊数的平方根", explanation: "0 的平方根唯一。" },
            { question: "若一个数的平方根等于它本身，则这个数是 (    )", options: ["0", "1", "0 或 1", "不存在"], answer: "0", point: "平方根性质", explanation: "只有 0 符合。" },
            { question: "$144$ 的算术平方根是 (    )", options: ["12", "-12", "$\\pm 12$", "1.2"], answer: "12", point: "算术平方根", explanation: "算术平方根特指非负的那个根。" },
            { question: "下列各式正确的是 (    )", options: ["$-\\sqrt{9} = -3$", "$\\sqrt{25} = \\pm 5$", "$\\sqrt{-16} = -4$", "$\\sqrt{0.4} = 0.2$"], answer: "$-\\sqrt{9} = -3$", point: "符号意义", explanation: "$\\sqrt{25}=5$；负数不可开方；$0.2^2=0.04$。" },
            { question: "若 $\\sqrt{a} = 3$，则 $a$ 的值是 (    )", options: ["9", "$\\pm 9$", "$\\sqrt{3}$", "6"], answer: "9", point: "逆向求解", explanation: "$3^2 = 9$。" },
            { question: "在代数式 $\\sqrt{x}$ 中，$x$ 的名称是 (    )", options: ["被开方数", "根号", "算术平方根", "平方根"], answer: "被开方数", point: "术语", explanation: "根号下的数叫被开方数。" },
            { question: "符号 $\\sqrt{10}$ 读作 (    )", options: ["10 的算术平方根", "10 的平方根", "根号下 10", "10 的开方"], answer: "10 的算术平方根", point: "读法", explanation: "这是标准数学读法。" },
            { question: "下列关于符号“ $\\sqrt{\\quad}$ ”的说法，错误的是 (    )", options: ["它可以用来表示任何数的平方根", "它表示开平方运算", "它是算术平方根的专用符号", "它源自对简洁性的追求"], answer: "它可以用来表示任何数的平方根", point: "符号限制", explanation: "它只能表示算术平方根，表示平方根需加 $\\pm$。" },
            { question: "下列根式中，在实数范围内没有意义的是 (    )", options: ["$\\sqrt{-9}$", "$\\sqrt{0}$", "$\\sqrt{(-2)^2}$", "$-\\sqrt{4}$"], answer: "$\\sqrt{-9}$", point: "有意义条件", explanation: "被开方数不能为负。" },
            { question: "计算 $\\sqrt{(-5)^2}$ 的结果是 (    )", options: ["5", "-5", "$\\pm 5$", "25"], answer: "5", point: "化简计算", explanation: "$\\sqrt{25} = 5$。" },
            { question: "若代数式 $\\sqrt{2x - 4}$ 有意义，则 $x$ 的取值范围是 (    )", options: ["$x \\ge 2$", "$x > 2$", "$x = 2$", "$x \\le 2$"], answer: "$x \\ge 2$", point: "定义域", explanation: "$2x-4 \\ge 0 \\Rightarrow x \\ge 2$。" },
            { question: "$\\sqrt{16}$ 的平方根是 (    )", options: ["$\\pm 2$", "4", "$\\pm 4$", "2"], answer: "$\\pm 2$", point: "复合开方", explanation: "先算 $\\sqrt{16}=4$，再求 4 的平方根 $\\pm 2$。" },
            { question: "求 $\\sqrt{81}$ 的平方根，正确的计算过程是 (    )", options: ["$\\sqrt{81} = 9$，9 的平方根是 $\\pm 3$", "$\\sqrt{81} = \\pm 9$", "81 的平方根是 $\\pm 9$", "$\\sqrt{81} = 9$，9 的算术平方根是 3"], answer: "$\\sqrt{81} = 9$，9 的平方根是 $\\pm 3$", point: "逻辑辨析", explanation: "两步走：先化简，再求根。" },
            { question: "$\\sqrt{0.0001}$ 的平方根是 (    )", options: ["$\\pm 0.1$", "0.1", "$\\pm 0.01$", "$\\pm 0.0001$"], answer: "$\\pm 0.1$", point: "小数开方", explanation: "$\\sqrt{0.0001}=0.01$，0.01的平方根是$\\pm 0.1$。" },
            { question: "$\\sqrt{16}$ 的算术平方根是 (    )", options: ["2", "$\\pm 2$", "4", "$\\pm 4$"], answer: "2", point: "复合算术根", explanation: "$\\sqrt{16}=4$，4的算术平方根是2。" },
            { question: "计算 $\\sqrt{625}$ 的算术平方根，结果为 (    )", options: ["5", "25", "$\\pm 5$", "$\\pm 25$"], answer: "5", point: "大数开方", explanation: "$\\sqrt{625}=25$，25算术平方根为5。" },
            { question: "$\\sqrt{(-9)^2}$ 的算术平方根是 (    )", options: ["3", "-3", "9", "$\\pm 3$"], answer: "3", point: "负数平方根", explanation: "$\\sqrt{81}=9$，9的算术平方根是3。" }
        ],

        // =============================================
        // 模块三：立方根 (9题)
        // =============================================
        cubeRoots: [
            { question: "若 $x^3 = a$，那么 $x$ 叫做 $a$ 的 (    )", options: ["立方根", "平方根", "算术平方根", "立方"], answer: "立方根", point: "立方根定义", explanation: "立方运算的逆运算。" },
            { question: "符号 $\\sqrt[3]{a}$ 中的指数 “3” 叫做 (    )", options: ["根指数", "根号", "被开方数", "幂"], answer: "根指数", point: "术语", explanation: "左上角的数字叫根指数。" },
            { question: "$\\sqrt[3]{8}$ 读作 (    )", options: ["8 的立方根", "3 次根号 8", "根号 8 的 3 次方", "立方根号 8"], answer: "8 的立方根", point: "读法", explanation: "标准数学读法。" },
            { question: "计算 $\\sqrt[3]{64}$ 的结果是 (    )", options: ["4", "8", "$\\pm 4$", "16"], answer: "4", point: "立方根计算", explanation: "$4^3=64$。" },
            { question: "计算 $\\sqrt[3]{-125}$ 的结果是 (    )", options: ["-5", "5", "$\\pm 5$", "无意义"], answer: "-5", point: "负数立方根", explanation: "负数有一个负的立方根。" },
            { question: "计算 $\\sqrt[3]{-0.008}$ 的值是 (    )", options: ["-0.2", "0.2", "-0.02", "-2"], answer: "-0.2", point: "小数立方根", explanation: "$(-0.2)^3 = -0.008$。" },
            { question: "下列关于立方根特征的描述中，正确的是 (    )", options: ["任何实数都有且只有一个立方根", "正数有两个立方根", "负数没有立方根", "0 没有立方根"], answer: "任何实数都有且只有一个立方根", point: "立方根性质", explanation: "唯一性是立方根的重要特征。" },
            { question: "下列等式体现 $\\sqrt[3]{-a} = -\\sqrt[3]{a}$ 的是 (    )", options: ["$\\sqrt[3]{-27} = -\\sqrt[3]{27} = -3$", "$\\sqrt{(-3)^2} = 3$", "$\\sqrt[3]{8} = 2$", "$\\sqrt[3]{0} = 0$"], answer: "$\\sqrt[3]{-27} = -\\sqrt[3]{27} = -3$", point: "符号提权", explanation: "立方根的负号可以提取。" },
            { question: "计算 $\\sqrt[3]{(-4)^3}$ 的结果是 (    )", options: ["-4", "4", "$\\pm 4$", "16"], answer: "-4", point: "开立方性质", explanation: "$\\sqrt[3]{a^3} = a$。" }
        ],

        // =============================================
        // 模块四：平方根分类与运算 (21题)
        // =============================================
        operations: [
            { question: "下列关于平方根分类的说法中，正确的是 (    )", options: ["0 的平方根是 0", "正数的平方根只有一个", "负数有一个负的平方根", "所有实数都有两个平方根"], answer: "0 的平方根是 0", point: "分类讨论", explanation: "0 唯一。" },
            { question: "若数 $a$ 有两个平方根且和为 0，则 $a$ 满足 (    )", options: ["$a > 0$", "$a \\ge 0$", "$a < 0$", "任意实数"], answer: "$a > 0$", point: "性质逆推", explanation: "正数才有两个根。" },
            { question: "已知 $a = -(k^2 + 1)$，则 $a$ 的平方根情况 (    )", options: ["没有平方根", "有两个", "有一个", "取决于 k"], answer: "没有平方根", point: "代数式正负", explanation: "$k^2+1>0$，加负号必为负。" },
            { question: "计算 $3\\sqrt{2} + 5\\sqrt{2}$ 的结果是 (    )", options: ["$8\\sqrt{2}$", "$8\\sqrt{4}$", "$15\\sqrt{2}$", "16"], answer: "$8\\sqrt{2}$", point: "根式加法", explanation: "合并系数 $(3+5)\\sqrt{2}$。" },
            { question: "计算 $\\sqrt{12} - \\sqrt{3}$ 的结果是 (    )", options: ["$\\sqrt{3}$", "$\\sqrt{9}$", "$3\\sqrt{3}$", "3"], answer: "$\\sqrt{3}$", point: "根式减法", explanation: "$2\\sqrt{3}-\\sqrt{3}=\\sqrt{3}$。" },
            { question: "下列运算中，正确的是 (    )", options: ["$\\sqrt{8} + \\sqrt{18} = 5\\sqrt{2}$", "$\\sqrt{2} + \\sqrt{3} = \\sqrt{5}$", "$2 + \\sqrt{2} = 2\\sqrt{2}$", "$\\sqrt{12} - \\sqrt{8} = \\sqrt{4}$"], answer: "$\\sqrt{8} + \\sqrt{18} = 5\\sqrt{2}$", point: "运算辨析", explanation: "$2\\sqrt{2}+3\\sqrt{2}=5\\sqrt{2}$。" },
            { question: "计算 $\\sqrt{2} \\times \\sqrt{5}$ 的结果是 (    )", options: ["$\\sqrt{10}$", "$\\sqrt{7}$", "10", "$2\\sqrt{5}$"], answer: "$\\sqrt{10}$", point: "根式乘法", explanation: "$\\sqrt{2\\times5}=\\sqrt{10}$。" },
            { question: "计算 $2\\sqrt{3} \\times 3\\sqrt{6}$ 的结果化简后为 (    )", options: ["$18\\sqrt{2}$", "$6\\sqrt{18}$", "$36\\sqrt{2}$", "$18\\sqrt{3}$"], answer: "$18\\sqrt{2}$", point: "乘法化简", explanation: "$6\\sqrt{18}=18\\sqrt{2}$。" },
            { question: "若 $\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$ 成立，则条件是 (    )", options: ["$a \\ge 0, b \\ge 0$", "$a, b$ 任意", "$a, b$ 异号", "$ab \\ge 0$"], answer: "$a \\ge 0, b \\ge 0$", point: "乘法法则", explanation: "各项必须有意义。" },
            { question: "计算 $\\sqrt{15} \\div \\sqrt{3}$ 的结果是 (    )", options: ["$\\sqrt{5}$", "5", "$\\sqrt{12}$", "$\\frac{1}{5}$"], answer: "$\\sqrt{5}$", point: "根式除法", explanation: "$\\sqrt{15/3}=\\sqrt{5}$。" },
            { question: "化简 $\\sqrt{\\frac{8}{25}}$ 的结果是 (    )", options: ["$\\frac{2\\sqrt{2}}{5}$", "$\\frac{4}{5}$", "$\\frac{\\sqrt{8}}{5}$", "$\\frac{2\\sqrt{2}}{25}$"], answer: "$\\frac{2\\sqrt{2}}{5}$", point: "分式化简", explanation: "$\\sqrt{8}=2\\sqrt{2}, \\sqrt{25}=5$。" },
            { question: "关于除法性质 $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$ 的前提条件是 (    )", options: ["$a \\ge 0, b > 0$", "$a \\ge 0, b \\ge 0$", "$a > 0, b > 0$", "$ab \\ne 0$"], answer: "$a \\ge 0, b > 0$", point: "除法法则", explanation: "分母不能为0。" },
            { question: "属于最简二次根式的是 (    )", options: ["$\\sqrt{6}$", "$\\sqrt{8}$", "$\\sqrt{\\frac{1}{2}}$", "$\\sqrt{0.5}$"], answer: "$\\sqrt{6}$", point: "最简根式", explanation: "无分母，无开得尽方的因子。" },
            { question: "化简 $\\sqrt{72}$ 的结果是 (    )", options: ["$6\\sqrt{2}$", "$2\\sqrt{18}$", "$3\\sqrt{8}$", "12"], answer: "$6\\sqrt{2}$", point: "化简练习", explanation: "$\\sqrt{36\\times2}=6\\sqrt{2}$。" },
            { question: "将 $\\frac{1}{\\sqrt{3}}$ 化简为最简二次根式的结果是 (    )", options: ["$\\frac{\\sqrt{3}}{3}$", "$\\sqrt{3}$", "$\\frac{1}{3}$", "$\\frac{\\sqrt{3}}{9}$"], answer: "$\\frac{\\sqrt{3}}{3}$", point: "分母有理化", explanation: "上下同乘$\\sqrt{3}$。" },
            { question: "计算 $\\sqrt{2}(\\sqrt{2} + \\sqrt{8})$ 的结果是 (    )", options: ["6", "$2+8=10$", "$\\sqrt{20}$", "4"], answer: "6", point: "分配律", explanation: "$2+\\sqrt{16}=2+4=6$。" },
            { question: "计算 $(\\sqrt{3} + 1)(\\sqrt{3} - 1)$ 的结果是 (    )", options: ["2", "$\\sqrt{2}$", "4", "$\\sqrt{2}$"], answer: "2", point: "平方差公式", explanation: "$3-1=2$。" },
            { question: "在混合运算 $\\sqrt{2} \\times \\sqrt{6} + \\sqrt{3}$ 中，应先进行的运算是 (    )", options: ["乘法", "加法", "开方", "同时"], answer: "乘法", point: "运算顺序", explanation: "先乘除后加减。" },
            { question: "计算 $(\\sqrt{7})^2$ 与 $\\sqrt{7^2}$ 的值分别是 (    )", options: ["7 和 7", "7 和 -7", "$\\pm 7$ 和 7", "49 和 7"], answer: "7 和 7", point: "特殊性质", explanation: "正数结果相同。" },
            { question: "计算 $\\sqrt{(-5)^2}$ 的结果是 (    )", options: ["5", "-5", "$\\pm 5$", "25"], answer: "5", point: "绝对值性质", explanation: "$|-5|=5$。" },
            { question: "关于性质 $\\sqrt{a^2} = |a|$，正确的是 (    )", options: ["当 $a < 0$ 时，$\\sqrt{a^2} = -a$", "当 $a < 0$ 时，$\\sqrt{a^2} = a$", "只对正数成立", "结果可为负"], answer: "当 $a < 0$ 时，$\\sqrt{a^2} = -a$", point: "性质深化", explanation: "负数的绝对值是其相反数。" }
        ],

        // =============================================
        // 模块五：无理数估算 (18题)
        // =============================================
        estimation: [
            { question: "$\\sqrt{11}$ 的值在两个连续整数之间，这两个整数是 (    )", options: ["3 和 4", "2 和 3", "4 和 5", "5 和 6"], answer: "3 和 4", point: "估算基础", explanation: "$3^2=9 < 11 < 16=4^2$。" },
            { question: "若 $n < \\sqrt{30} < n+1$ ($n$ 为正整数)，则 $n$ 的值是 (    )", options: ["5", "4", "6", "25"], answer: "5", point: "估算整数", explanation: "$25 < 30 < 36$。" },
            { question: "估计 $\\sqrt{55}$ 的大小，下列结果正确的是 (    )", options: ["$7 < \\sqrt{55} < 8$", "$6 < \\sqrt{55} < 7$", "$8 < \\sqrt{55} < 9$", "$5 < \\sqrt{55} < 6$"], answer: "$7 < \\sqrt{55} < 8$", point: "大数估算", explanation: "$49 < 55 < 64$。" },
            { question: "比较大小：$\\sqrt{3}$ 与 $1.5$ 的关系是 (    )", options: ["$\\sqrt{3} > 1.5$", "$\\sqrt{3} < 1.5$", "$\\sqrt{3} = 1.5$", "无法比较"], answer: "$\\sqrt{3} > 1.5$", point: "平方法", explanation: "$3 > 2.25$。" },
            { question: "下列各式中，正确的是 (    )", options: ["$\\sqrt{10} > 3$", "$\\sqrt{10} < 3$", "$\\sqrt{15} > 4$", "$\\sqrt{5} < 2$"], answer: "$\\sqrt{10} > 3$", point: "大小比较", explanation: "$10 > 9$。" },
            { question: "在 $\\sqrt{2}, \\sqrt{3}, 1.6, \\sqrt{5}$ 中，最小的数是 (    )", options: ["$\\sqrt{2}$", "$\\sqrt{3}$", "1.6", "$\\sqrt{5}$"], answer: "$\\sqrt{2}$", point: "多值比较", explanation: "$2 < 2.56(1.6^2)$。" },
            { question: "$\\sqrt{20}$ 的整数部分是 (    )", options: ["4", "2", "5", "16"], answer: "4", point: "整数部分", explanation: "在 4 和 5 之间。" },
            { question: "实数 $\\sqrt{3} + 1$ 的整数部分是 (    )", options: ["2", "1", "3", "4"], answer: "2", point: "混合估算", explanation: "$1.7+1=2.7$。" },
            { question: "$5 - \\sqrt{2}$ 的整数部分是 (    )", options: ["3", "4", "2", "5"], answer: "3", point: "减法估算", explanation: "$5-1.4=3.6$。" },
            { question: "$\\sqrt{7}$ 的小数部分可以表示为 (    )", options: ["$\\sqrt{7} - 2$", "$\\sqrt{7} - 3$", "0.645", "$2 - \\sqrt{7}$"], answer: "$\\sqrt{7} - 2$", point: "小数部分", explanation: "原数 - 整数部分。" },
            { question: "$\\sqrt{11} - 3$ 的小数部分是 (    )", options: ["$\\sqrt{11} - 3$", "$\\sqrt{11} - 4$", "$\\sqrt{11}$", "$3 - \\sqrt{11}$"], answer: "$\\sqrt{11} - 3$", point: "小数辨析", explanation: "该数本身就在 0-1 之间。" },
            { question: "设 $a$ 为 $\\sqrt{13}$ 的整数部分，$b$ 为其小数部分，则 $b$ 等于 (    )", options: ["$\\sqrt{13} - 3$", "$\\sqrt{13} - 4$", "3", "$\\sqrt{13}$"], answer: "$\\sqrt{13} - 3$", point: "代数表示", explanation: "整数部分为 3。" },
            { question: "估计 $\\sqrt{10}$ 的值在下列哪两个数之间？ (    )", options: ["3.1 和 3.2", "3.0 和 3.1", "3.2 和 3.3", "3.5 和 3.6"], answer: "3.1 和 3.2", point: "十分位估算", explanation: "$3.1^2=9.61, 3.2^2=10.24$。" },
            { question: "$\\sqrt{2}$ 的值精确到 0.1 的近似值是 (    )", options: ["1.4", "1.5", "1.41", "1.42"], answer: "1.4", point: "近似值", explanation: "$1.4^2=1.96$ 最接近。" },
            { question: "已知 $3.6^2 = 12.96, 3.7^2 = 13.69$，可知 $\\sqrt{13}$ 更接近 (    )", options: ["3.6", "3.7", "3.65", "4"], answer: "3.6", point: "逼近比较", explanation: "12.96 离 13 更近。" },
            { question: "已知 $\\sqrt{2} \\approx 1.414$，则 $\\sqrt{200}$ 的值约为 (    )", options: ["14.14", "141.4", "1.414", "28.28"], answer: "14.14", point: "利用性质", explanation: "$10\\sqrt{2}$。" },
            { question: "已知 $\\sqrt{3} \\approx 1.732$，则 $\\sqrt{0.03}$ 的值约为 (    )", options: ["0.1732", "1.732", "17.32", "0.01732"], answer: "0.1732", point: "小数点移动", explanation: "缩小 10 倍。" },
            { question: "已知 $\\sqrt{5} \\approx 2.236$，则 $\\sqrt{80}$ 的值约为 (    )", options: ["8.944", "4.472", "2.236", "11.18"], answer: "8.944", point: "综合计算", explanation: "$4\\sqrt{5} \\approx 8.944$。" }
        ]
    },

    // 核心生成函数：整合打乱
    generateQuiz: function() {
        let quizQuestions = [];
        let index = 1;

        // 遍历所有模块，提取题目并打乱选项
        const categories = ["concepts", "squareRoots", "cubeRoots", "operations", "estimation"];
        
        categories.forEach(cat => {
            this.database[cat].forEach(q => {
                quizQuestions.push({
                    id: `ch2-q-${index++}`,
                    point: q.point,
                    question: q.question,
                    options: this.shuffleOptions(q.options),
                    answer: q.answer,
                    explanation: `<strong>【解析】</strong>${q.explanation}`
                });
            });
        });

        // 打乱题目顺序
        return quizQuestions.sort(() => Math.random() - 0.5);
    },

    // 智能建议生成器 (迭代升级)
    getAdvice: function(score, wrongPoints) {
        let adviceHTML = "";
        
        if (score === 100) {
            adviceHTML += "<div class='mb-4 p-4 bg-green-50 rounded-lg text-green-700 font-bold'><i class='fa-solid fa-flag-checkered mr-2'></i>满分通关！你对实数体系掌握得非常扎实。</div>";
        } else if (score >= 80) {
            adviceHTML += "<div class='mb-4 p-4 bg-blue-50 rounded-lg text-blue-700 font-bold'>成绩优秀！继续保持对细节的关注。</div>";
        } else {
            adviceHTML += "<div class='mb-4 p-4 bg-yellow-50 rounded-lg text-yellow-700 font-bold'>基础有待加强。建议重点区分平方根与算术平方根的概念。</div>";
        }

        if (wrongPoints.length > 0) {
            adviceHTML += "<h4 class='font-bold text-slate-800 mb-2'>📉 薄弱知识点归纳</h4>";
            adviceHTML += "<div class='overflow-hidden rounded-lg border border-slate-200'><table class='min-w-full text-sm text-left text-slate-500'><thead class='text-xs text-slate-700 uppercase bg-slate-50'><tr><th class='px-6 py-3'>考点</th><th class='px-6 py-3'>频次</th><th class='px-6 py-3'>复习策略</th></tr></thead><tbody>";

            const counts = {};
            wrongPoints.forEach(p => counts[p] = (counts[p] || 0) + 1);
            const sortedPoints = Object.keys(counts).sort((a,b) => counts[b] - counts[a]);

            sortedPoints.forEach(point => {
                let strategy = "回归课本定义。";
                if (point.includes("平方根")) strategy = "牢记：正数的平方根有两个(±)，算术平方根只有一个(+)；负数无平方根。";
                else if (point.includes("立方根")) strategy = "立方根是唯一的，符号与原数一致。";
                else if (point.includes("无理数")) strategy = "注意：π、无限不循环小数、开方开不尽的数。";
                else if (point.includes("估算")) strategy = "利用平方逼近法，找最近的两个整数。";
                else if (point.includes("运算")) strategy = "注意：先乘方，再乘除，后加减；根式加减类似合并同类项。";

                adviceHTML += `<tr class='bg-white border-b hover:bg-slate-50'><td class='px-6 py-4 font-medium text-slate-900'>${point}</td><td class='px-6 py-4 text-red-600 font-bold'>${counts[point]}</td><td class='px-6 py-4'>${strategy}</td></tr>`;
            });

            adviceHTML += "</tbody></table></div>";
        }

        return adviceHTML;
    }
};

window.AppLibrary = window.AppLibrary || {};
window.AppLibrary.Chapter2Generator = Chapter2_Generator;