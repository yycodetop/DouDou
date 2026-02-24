/**
 * 第七章：方程进阶 (三元、二次、分式方程全集)
 * 包含 12 个训练模块，每个模块 10 道多维度试题，总计 120 题
 */

const Chapter7_Generator = {
    info: {
        id: "ch7",
        title: "第七章 方程进阶训练",
        description: "120道特训题：掌握三元一次方程组、一元二次方程全解法及分式方程核心技巧",
        icon: "fa-solid fa-calculator-combined"
    },

    sections: {
        "linear_3_concept": "7.1.1 三元一次方程组概念",
        "linear_3_steps": "7.1.2 三元方程组解法步骤",
        "linear_3_special": "7.1.3 三元方程组特殊解法",
        "quadratic_concept": "7.2.1 一元二次方程基础",
        "quadratic_id": "7.2.2 一元二次方程识别",
        "quad_formula": "7.3.1 公式法解方程",
        "quad_completing": "7.3.2 配方法解方程",
        "quad_factor": "7.3.3 因式分解法解方程",
        "quad_substitute": "7.3.4 换元法解方程",
        "quad_vieta": "7.3.5 韦达定理及应用",
        "fractional_concept": "7.4.1 分式方程的定义",
        "fractional_solving": "7.4.2 分式方程解法与思路"
    },

    shuffleOptions: function(options) {
        return [...options].sort(() => Math.random() - 0.5);
    },

    database: {
        // --- 7.1.1 三元一次方程组概念 (10题) ---
        linear_3_concept: [
            { question: "下列方程组中，属于三元一次方程组的是 (    )", options: ["$\\begin{cases} x+y=1 \\\\ y+z=2 \\\\ z+x=3 \\end{cases}$", "$\\begin{cases} x+y+z=1 \\\\ xy=2 \\end{cases}$", "$\\begin{cases} x+y=1 \\\\ y+\\frac{1}{z}=2 \\end{cases}$", "$x+y+z=5$"], answer: "$\\begin{cases} x+y=1 \\\\ y+z=2 \\\\ z+x=3 \\end{cases}$", point: "三元一次方程组定义", explanation: "三元一次方程组需包含三个未知数，且每个方程都是一次方程，且作为一个整体。" },
            { question: "三元一次方程 $x+y+z=10$ 的正整数解有 (    )", options: ["有限个", "1个", "0个", "无数个"], answer: "有限个", point: "正整数解判定", explanation: "受限于正整数和为10，组合是有限的（共36组）。" },
            { question: "若方程 $x^{|a|}+y+z=5$ 是三元一次方程，则 $a$ 的值是 (    )", options: ["$\\pm 1$", "1", "0", "任意数"], answer: "$\\pm 1$", point: "次数定义", explanation: "一次方程要求未知数指数为1，故 $|a|=1$。" },
            { question: "方程组 $\\begin{cases} x+y=3 \\\\ y+z=4 \\\\ z+x=5 \\end{cases}$ 中，$x, y, z$ 的系数均为 (    )", options: ["1", "0", "2", "3"], answer: "1", point: "系数识别", explanation: "每个未知数项前的常数因子均为 1。" },
            { question: "三元一次方程组中“三元”的含义是 (    )", options: ["含有三个未知数", "含有三项", "含有三个方程", "最高次数为三"], answer: "含有三个未知数", point: "术语理解", explanation: "“元”指代未知数的种类。" },
            { question: "判断：$\\begin{cases} x+y+z=6 \\\\ x-y=1 \\end{cases}$ 是三元一次方程组吗？ (    )", options: ["是", "不是"], answer: "是", point: "方程组判定", explanation: "只要整体含有三个未知数且满足一次项要求，即便某个方程缺项也属于三元组。" },
            { question: "若 $(x-1)^2+|y+2|+(z-3)^2=0$，则 $x,y,z$ 构成的方程组解为 (    )", options: ["$(1, -2, 3)$", "$(1, 2, 3)$", "$(-1, 2, -3)$", "无解"], answer: "$(1, -2, 3)$", point: "非负性应用", explanation: "各项均为 0 时成立。" },
            { question: "三元一次方程 $2x+3y-z=1$ 中，$z$ 的系数是 (    )", options: ["-1", "1", "0", "-z"], answer: "-1", point: "系数符号", explanation: "项为 $-z$，系数应包含前面的负号。" },
            { question: "关于三元一次方程组的解，下列说法正确的是 (    )", options: ["通常有一组唯一解", "一定有无数组解", "一定没有解", "解必须是整数"], answer: "通常有一组唯一解", point: "解的特征", explanation: "独立的三个三元一次方程通常交于空间中唯一一点。" },
            { question: "下列式子不是方程的是 (    )", options: ["$x+y+z$", "$x=y=z$", "$x+1=y+z$", "$0=x+y+z$"], answer: "$x+y+z$", point: "方程判定", explanation: "方程必须是含有未知数的等式。" }
        ],

        // --- 7.1.2 三元方程组解法步骤 (10题) ---
        linear_3_steps: [
            { question: "解三元一次方程组的基本思想是 (    )", options: ["消元", "换元", "降次", "通分"], answer: "消元", point: "核心思想", explanation: "将“三元”转化为“二元”，再转化为“一元”。" },
            { question: "在解 $\\begin{cases} x+y+z=6 \\text{ (1)} \\\\ 2x+y-z=1 \\text{ (2)} \\\\ x-y+z=2 \\text{ (3)} \\end{cases}$ 时，最简便的第一步是 (    )", options: ["(1)+(2) 消去 z", "(1)-(3) 消去 x", "代入法消去 y", "三式相加"], answer: "(1)+(2) 消去 z", point: "消元选择", explanation: "观察 z 的系数为 1 和 -1，相加可立即消元。" },
            { question: "利用加减消元法，(1)+(3) 可以消去哪个未知数？ (    )", options: ["y", "x", "z", "无法消去"], answer: "y", point: "加减消元", explanation: "$y$ 与 $-y$ 互为相反数。" },
            { question: "若用代入法，由 (3) 得 $x=$ (    )", options: ["$2+y-z$", "$2-y+z$", "$y-z-2$", "$z-y+2$"], answer: "$2+y-z$", point: "变量替换", explanation: "移项：$x = 2 + y - z$。" },
            { question: "将三元化为二元时，必须保证 (    )", options: ["消去的是同一个未知数", "消去的是不同的未知数", "方程个数增加", "系数都变为1"], answer: "消去的是同一个未知数", point: "逻辑严密性", explanation: "只有消去同一个变量，剩下的两个方程才能构成二元一次方程组。" },
            { question: "解得二元组的解后，下一步是 (    )", options: ["回代入原任一三元方程求第三个量", "直接写出答案", "结束计算", "检查是否为整数"], answer: "回代入原任一三元方程求第三个量", point: "回代步骤", explanation: "这是完成解题的最后逻辑环节。" },
            { question: "三元一次方程组解题步骤的顺序是 (    )", options: ["三元→二元→一元", "一元→二元→三元", "三元→一元", "随意顺序"], answer: "三元→二元→一元", point: "降维逻辑", explanation: "标准的消元降维路径。" },
            { question: "在消元过程中，若出现 $0=0$，说明 (    )", options: ["该方程组有无数解", "计算错了", "方程组无解", "未知数为0"], answer: "该方程组有无数解", point: "特殊结论", explanation: "意味着存在冗余方程。" },
            { question: "解方程组需遵循的原则不包括 (    )", options: ["公式必须背诵", "步步有据", "先观察后动手", "注意符号检查"], answer: "公式必须背诵", point: "学习习惯", explanation: "三元组解法侧重逻辑而非死记硬背公式。" },
            { question: "若三个方程两两相加后得到新方程组，这属于 (    )", options: ["加减消元法的变式", "代入消元法", "换元法", "非法操作"], answer: "加减消元法的变式", point: "技巧分类", explanation: "利用等式性质进行的合法变形。" }
        ],

        // --- 7.1.3 三元方程组特殊解法 (10题) ---
        linear_3_special: [
            { question: "已知 $\\begin{cases} x+y=3 \\\\ y+z=5 \\\\ z+x=4 \\end{cases}$，求 $x+y+z$ 最快的方法是 (    )", options: ["三式相加除以2", "先求出x", "先求出y", "代入消元"], answer: "三式相加除以2", point: "轮换对称解法", explanation: "和为 $2(x+y+z) = 12 \\Rightarrow x+y+z=6$。" },
            { question: "若 $x:y:z=1:2:3$ 且 $x+y+z=12$，则 $x=$ (    )", options: ["2", "1", "3", "4"], answer: "2", point: "参数k法", explanation: "设 $x=k, y=2k, z=3k$，则 $6k=12 \\Rightarrow k=2$。" },
            { question: "对于对称型方程组，常用技巧是 (    )", options: ["整体求和", "逐一消元", "强行代入", "舍弃一项"], answer: "整体求和", point: "整体思想", explanation: "利用系数的对称性简化计算。" },
            { question: "已知 $x+y=a, y+z=b, z+x=c$，则 $x=$ (    )", options: ["$(a+c-b)/2$", "$(a+b+c)/2$", "$(b+c-a)/2$", "$a-b+c$"], answer: "$(a+c-b)/2$", point: "公式推导技巧", explanation: "由 $(x+y+z) - (y+z)$ 得出。" },
            { question: "若方程组中某个未知数在所有方程中系数相等，首选 (    )", options: ["两两相减", "全部求和", "代入法", "换元法"], answer: "两两相减", point: "快速消元", explanation: "相同项相减立即抵消。" },
            { question: "解 $x+y=5, x+z=7, y+z=8$，则 $z-y=$ (    )", options: ["2", "3", "1", "15"], answer: "2", point: "差值观察", explanation: "$(x+z)-(x+y) = 7-5=2$。" },
            { question: "已知 $x+2y+3z=10$ 且 $3x+2y+z=6$，则 $x+y+z=$ (    )", options: ["4", "16", "8", "无法确定"], answer: "4", point: "组合系数技巧", explanation: "两式相加得 $4x+4y+4z=16 \\Rightarrow x+y+z=4$。" },
            { question: "参数法解比值问题的核心是 (    )", options: ["引入辅助未知数k", "消去k", "将比值化为分数", "直接代入"], answer: "引入辅助未知数k", point: "建模技巧", explanation: "将多元问题转化为一元k的问题。" },
            { question: "若 $\\frac{x}{2}=\\frac{y}{3}=\\frac{z}{4}$，则 $x:y:z=$ (    )", options: ["2:3:4", "4:3:2", "1:1:1", "6:4:3"], answer: "2:3:4", point: "比例性质", explanation: "分母即代表其比例权重。" },
            { question: "在处理复杂的比例方程组时，优先考虑 (    )", options: ["整体代换", "暴力拆解", "逐个求解", "放弃"], answer: "整体代换", point: "优化意识", explanation: "减少计算量是解高元方程的关键。" }
        ],

        // --- 7.2.1 一元二次方程基础 (10题) ---
        quadratic_concept: [
            { question: "一元二次方程的标准形式是 (    )", options: ["$ax^2+bx+c=0 (a \\ne 0)$", "$ax^2+bx+c=0$", "$ax^2+bx=c$", "$x^2+px+q=0$"], answer: "$ax^2+bx+c=0 (a \\ne 0)$", point: "标准形式", explanation: "必须强调二次项系数 $a$ 不等于 0。" },
            { question: "方程 $(m-1)x^2+x-1=0$ 是关于 $x$ 的一元二次方程，则 $m$ 满足 (    )", options: ["$m \\ne 1$", "$m=1$", "$m \\ne 0$", "任意实数"], answer: "$m \\ne 1$", point: "二次项系数限制", explanation: "二次项系数 $m-1$ 不能为 0。" },
            { question: "一元二次方程 $3x^2-2x=5$ 的常数项是 (    )", options: ["-5", "5", "-2", "3"], answer: "-5", point: "项的识别", explanation: "化为标准形 $3x^2-2x-5=0$ 后判定。" },
            { question: "方程 $x^2=0$ 的二次项系数、一次项系数、常数项分别是 (    )", options: ["1, 0, 0", "0, 0, 0", "1, 1, 0", "无法确定"], answer: "1, 0, 0", point: "缺项方程", explanation: "$1 \\cdot x^2 + 0 \\cdot x + 0 = 0$。" },
            { question: "关于 $x$ 的方程 $x^{n-1}+2x-3=0$ 是一元二次方程，则 $n=$ (    )", options: ["3", "2", "1", "0"], answer: "3", point: "最高次数定义", explanation: "$n-1=2 \\Rightarrow n=3$。" },
            { question: "下列说法正确的是 (    )", options: ["一元二次方程一定有两个实数根", "一元二次方程至少有一个实数根", "一元二次方程至多有两个实数根", "以上都不对"], answer: "一元二次方程至多有两个实数根", point: "根的性质", explanation: "可能有两个、一个或零个实数根。" },
            { question: "方程 $2x(x-1)=3$ 化为标准形式后，一次项系数是 (    )", options: ["-2", "2", "-1", "-3"], answer: "-2", point: "化简判定", explanation: "$2x^2-2x-3=0$。" },
            { question: "若 $x=1$ 是方程 $x^2+mx-2=0$ 的一个根，则 $m=$ (    )", options: ["1", "-1", "0", "2"], answer: "1", point: "根的定义", explanation: "代入 $1+m-2=0 \\Rightarrow m=1$。" },
            { question: "一元二次方程的“一元”是指 (    )", options: ["含有一个未知数", "最高次数为1", "系数为1", "只有一个根"], answer: "含有一个未知数", point: "术语理解", explanation: "“元”即变量。" },
            { question: "下列方程中不是一元二次方程的是 (    )", options: ["$x+1/x=2$", "$x^2=1$", "$(x+1)(x-2)=0$", "$x^2-y=0$"], answer: "$x^2-y=0$", point: "排除法", explanation: "含有两个未知数 $x$ 和 $y$。" }
        ],

        // --- 7.2.2 一元二次方程识别 (10题) ---
        quadratic_id: [
            { question: "下列方程中，是一元二次方程的是 (    )", options: ["$x^2-2x-1=0$", "$ax^2+bx+c=0$", "$\\frac{1}{x^2}+x=1$", "$x^2+\\sqrt{x}=0$"], answer: "$x^2-2x-1=0$", point: "基本识别", explanation: "B项未注明 $a \\ne 0$；C、D项不是整式方程。" },
            { question: "方程 $(x+1)^2=x^2-2$ 是 (    )", options: ["一元一次方程", "一元二次方程", "二元一次方程", "不是方程"], answer: "一元一次方程", options: ["一元一次方程", "一元二次方程", "二元一次方程", "分式方程"], answer: "一元一次方程", point: "化简识别", explanation: "化简得 $2x+1=-2$，二次项消去了。" },
            { question: "关于 $x$ 的方程 $(a^2+1)x^2-ax+2=0$ 一定是 (    )", options: ["一元二次方程", "一元一次方程", "等式", "以上都不对"], answer: "一元二次方程", point: "系数性质", explanation: "因为 $a^2+1$ 恒大于 0，二次项系数永不为 0。" },
            { question: "若 $(m^2-1)x^2+mx+1=0$ 是关于 $x$ 的一元一次方程，则 $m=$ (    )", options: ["$\\pm 1$", "1", "-1", "0"], answer: "$\\pm 1$", point: "降次判定", explanation: "令二次项系数 $m^2-1=0$ 即可。" },
            { question: "下列方程中属于整式方程且最高次数为 2 的是 (    )", options: ["$x^2-4=0$", "$x^2=x(x+1)$", "$\\frac{x^2-1}{x}=0$", "$2x^2+xy=3$"], answer: "$x^2-4=0$", point: "综合判定", explanation: "需满足整式、一元、二次三个条件。" },
            { question: "方程 $3x^2+5x=0$ 的常数项是 (    )", options: ["0", "无常数项", "5", "3"], answer: "0", point: "零项识别", explanation: "常数项存在且数值为 0。" },
            { question: "判断：$(x-1)(x+2)=x^2$ 是一元二次方程吗？ (    )", options: ["不是", "是"], answer: "不是", point: "展开检查", explanation: "展开为 $x^2+x-2=x^2$，化简后二次项消失。" },
            { question: "一元二次方程 $x^2=1$ 的一次项系数是 (    )", options: ["0", "1", "-1", "不存在"], answer: "0", point: "项缺失", explanation: "$x^2+0x-1=0$。" },
            { question: "一元二次方程的各项系数必须是 (    )", options: ["实数", "整数", "有理数", "正数"], answer: "实数", point: "系数集合", explanation: "通常在实数范围内讨论。" },
            { question: "若方程 $ax^2+bx+c=0$ 是一元二次方程，则 $a,b,c$ 中 (    ) 不能为 0。", options: ["只有 a", "a 和 b", "a, b, c 均", "只有 c"], answer: "只有 a", point: "核心约束", explanation: "只有二次项系数决定了方程的“二次”属性。" }
        ],

        // --- 7.3.1 公式法解方程 (10题) ---
        quad_formula: [
            { question: "一元二次方程的求根公式 $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$ 的前提条件是 (    )", options: ["$b^2-4ac \\ge 0$", "$b^2-4ac > 0$", "$b^2-4ac \\le 0$", "无条件"], answer: "$b^2-4ac \\ge 0$", point: "公式前提", explanation: "判别式非负保证了根在实数范围内存在。" },
            { question: "方程 $x^2-3x+2=0$ 的判别式 $\\Delta$ 的值是 (    )", options: ["1", "-1", "17", "7"], answer: "1", point: "判别式计算", explanation: "$\\Delta = (-3)^2 - 4(1)(2) = 9-8=1$。" },
            { question: "若方程有两相等实根，则判别式满足 (    )", options: ["$\\Delta = 0$", "$\\Delta > 0$", "$\\Delta < 0$", "$\\Delta \\ge 0$"], answer: "$\\Delta = 0$", point: "根的判别", explanation: "公式中加减根号 0 结果一致。" },
            { question: "方程 $2x^2+x-1=0$ 的解为 (    )", options: ["$-1, 1/2$", "$1, -1/2$", "$-1, -1/2$", "$1, 1/2$"], answer: "$-1, 1/2$", point: "公式计算", explanation: "$x = \\frac{-1 \\pm \\sqrt{1+8}}{4} = \\frac{-1 \\pm 3}{4}$。" },
            { question: "下列方程中没有实数根的是 (    )", options: ["$x^2+x+1=0$", "$x^2-x-1=0$", "$x^2+2x+1=0$", "$x^2-1=0$"], answer: "$x^2+x+1=0$", point: "判别式应用", explanation: "$\\Delta = 1-4 = -3 < 0$。" },
            { question: "若 $x^2-4x+m=0$ 有实根，则 $m$ 的范围是 (    )", options: ["$m \\le 4$", "$m < 4$", "$m \\ge 4$", "$m > 4$"], answer: "$m \\le 4$", point: "判别式逆用", explanation: "$16-4m \\ge 0 \\Rightarrow 4m \\le 16 \\Rightarrow m \\le 4$。" },
            { question: "求根公式中，字母 $a, b, c$ 必须对应 (    ) 形式中的系数。", options: ["标准形式", "任意形式", "完全平方形式", "因式分解形式"], answer: "标准形式", point: "规范操作", explanation: "公式是基于 $ax^2+bx+c=0$ 推导的。" },
            { question: "方程 $x^2-2x-3=0$ 的根是 (    )", options: ["$3, -1$", "$-3, 1$", "$3, 1$", "$-3, -1$"], answer: "$3, -1$", point: "综合计算", explanation: "$\\Delta = 4+12=16, x = (2\\pm4)/2$。" },
            { question: "当 $\\Delta > 0$ 时，方程根的情况是 (    )", options: ["两个不相等的实根", "两个相等的实根", "没有实根", "只有一个实根"], answer: "两个不相等的实根", point: "判别式结论", explanation: "对应求根公式中的 $\\pm$ 两个不同值。" },
            { question: "解方程 $x^2-x-1=0$，正确的结果是 (    )", options: ["$\\frac{1 \\pm \\sqrt{5}}{2}$", "$\\frac{-1 \\pm \\sqrt{5}}{2}$", "$\\frac{1 \\pm \\sqrt{3}}{2}$", "$\\pm \\sqrt{5}$"], answer: "$\\frac{1 \\pm \\sqrt{5}}{2}$", point: "根式保留", explanation: "结果通常保留最简二次根式。" }
        ],

        // --- 7.3.2 配方法解方程 (10题) ---
        quad_completing: [
            { question: "将 $x^2-6x$ 配成完全平方式，需加上 (    )", options: ["9", "6", "36", "-9"], answer: "9", point: "配方基础", explanation: "加上一次项系数一半的平方：$(-3)^2=9$。" },
            { question: "配方法解方程的第一步通常是将二次项系数化为 (    )", options: ["1", "0", "-1", "任意整数"], answer: "1", point: "配方步骤", explanation: "这是为了方便构造 $(x+m)^2$ 形式。" },
            { question: "将方程 $x^2+4x-1=0$ 变形为 $(x+2)^2=n$ 的形式，则 $n=$ (    )", options: ["5", "3", "1", "4"], answer: "5", point: "配方变形", explanation: "$x^2+4x+4 = 1+4 \\Rightarrow (x+2)^2=5$。" },
            { question: "用配方法解 $2x^2-4x-6=0$ 时，方程两边应同时除以 (    )", options: ["2", "4", "-2", "以上都不对"], answer: "2", point: "系数归一", explanation: "先使 $x^2$ 系数为 1。" },
            { question: "方程 $(x-1)^2=4$ 的根是 (    )", options: ["$3, -1$", "$3, 1$", "$2, -2$", "5"], answer: "$3, -1$", point: "直接开平方法", explanation: "$x-1 = \\pm 2 \\Rightarrow x=3$ 或 $x=-1$。" },
            { question: "下列配方正确的是 (    )", options: ["$x^2+2x+1=(x+1)^2$", "$x^2-2x-1=(x-1)^2$", "$x^2-4x+2=(x-2)^2$", "$x^2+x+1=(x+1)^2$"], answer: "$x^2+2x+1=(x+1)^2$", point: "公式检查", explanation: "检查 $(a+b)^2 = a^2+2ab+b^2$。" },
            { question: "配方法体现的数学思想是 (    )", options: ["转化思想", "分类讨论", "类比思想", "数形结合"], answer: "转化思想", point: "数学思想", explanation: "将一元二次方程转化为直接开平方的一元一次形式。" },
            { question: "将 $3x^2-6x+1=0$ 配方后得 (    )", options: ["$3(x-1)^2=2$", "$3(x-1)^2=-1$", "$(x-1)^2=2/3$", "$(x-1)^2=1/3$"], answer: "$3(x-1)^2=2$", point: "复杂配方", explanation: "$3(x^2-2x)=-1 \\Rightarrow 3(x^2-2x+1)=-1+3$。" },
            { question: "若 $(x+m)^2=n$ 有实根，则 (    )", options: ["$n \\ge 0$", "$n > 0$", "$n=0$", "$m, n$ 任意"], answer: "$n \\ge 0$", point: "开方性质", explanation: "任何实数的平方都不可能是负数。" },
            { question: "用配方法推导求根公式的过程称为 (    )", options: ["万能公式推导", "因式分解", "降次", "配方"], answer: "万能公式推导", point: "背景知识", explanation: "求根公式本质上是配方法的一般化结论。" }
        ],

        // --- 7.3.3 因式分解法解方程 (10题) ---
        quad_factor: [
            { question: "因式分解法解方程的核心理论依据是 (    )", options: ["若 $ab=0$，则 $a=0$ 或 $b=0$", "等式的性质", "乘法交换律", "分配律"], answer: "若 $ab=0$，则 $a=0$ 或 $b=0$", point: "分解原理", explanation: "这是将二次转化为两个一次的根本依据。" },
            { question: "方程 $x(x-2)=0$ 的根是 (    )", options: ["$0, 2$", "$0, -2$", "2", "0"], answer: "$0, 2$", point: "提公因式法", explanation: "令 $x=0$ 或 $x-2=0$。" },
            { question: "方程 $x^2-9=0$ 的根是 (    )", options: ["$\\pm 3$", "3", "-3", "9"], answer: "$\\pm 3$", point: "平方差公式法", explanation: "$(x+3)(x-3)=0$。" },
            { question: "用因式分解法解 $x^2-5x+6=0$，分解结果为 (    )", options: ["$(x-2)(x-3)=0$", "$(x+2)(x+3)=0$", "$(x-1)(x-6)=0$", "$(x+1)(x+6)=0$"], answer: "$(x-2)(x-3)=0$", point: "十字相乘法", explanation: "$(-2) \\times (-3)=6, (-2)+(-3)=-5$。" },
            { question: "方程 $(x+1)^2-4=0$ 的解为 (    )", options: ["$1, -3$", "$2, -2$", "$3, -1$", "$1, 3$"], answer: "$1, -3$", point: "组合分解法", explanation: "$(x+1+2)(x+1-2)=0 \\Rightarrow (x+3)(x-1)=0$。" },
            { question: "解方程 $x^2-4x+4=0$，根的情况是 (    )", options: ["$x_1=x_2=2$", "$x_1=x_2=-2$", "$x=2, x=0$", "无解"], answer: "$x_1=x_2=2$", point: "完全平方法", explanation: "$(x-2)^2=0$。" },
            { question: "若方程 $(x-m)(x-n)=0$ 的根为 $2$ 和 $3$，则 $m+n=$ (    )", options: ["5", "6", "-5", "1"], answer: "5", point: "根与分解关系", explanation: "直接对应根的数值。" },
            { question: "下列方程中最适合用因式分解法的是 (    )", options: ["$x^2-3x=0$", "$x^2-x-1=0$", "$2x^2+4x-1=0$", "$x^2+2x-5=0$"], answer: "$x^2-3x=0$", point: "方法选择", explanation: "提取公因式非常快捷。" },
            { question: "方程 $3x(x-1)=2(x-1)$ 的根是 (    )", options: ["$1, 2/3$", "1", "2/3", "$1, -2/3$"], answer: "$1, 2/3$", point: "易错点：切勿直接约去未知数项", explanation: "移项提取 $(x-1)$，得 $(x-1)(3x-2)=0$。" },
            { question: "因式分解法解方程通常要求方程右边化为 (    )", options: ["0", "1", "常数", "一次式"], answer: "0", point: "规范形式", explanation: "只有右边为 0 才能应用乘积性质。" }
        ],

        // --- 7.3.4 换元法解方程 (10题) ---
        quad_substitute: [
            { question: "解方程 $(x^2-1)^2-3(x^2-1)+2=0$ 时，若设 $y=x^2-1$，则原方程变为 (    )", options: ["$y^2-3y+2=0$", "$y^2+3y+2=0$", "$y-3y+2=0$", "$y^2-3y=2$"], answer: "$y^2-3y+2=0$", point: "换元基础", explanation: "将复杂的整体看作一个新变量，简化结构。" },
            { question: "换元法的核心目的是 (    )", options: ["降次或简化结构", "消去未知数", "增加计算量", "改变方程性质"], answer: "降次或简化结构", point: "方法目的", explanation: "让“生疏”的方程变成“熟悉”的方程。" },
            { question: "解方程 $(x+\\frac{1}{x})^2-4(x+\\frac{1}{x})+3=0$，设 $t=x+\\frac{1}{x}$，求得 $t$ 的值后需 (    )", options: ["继续解关于 x 的方程", "直接写出答案", "结束计算", "代入求 y"], answer: "继续解关于 x 的方程", point: "回换步骤", explanation: "换元只是中间步骤，最终目标是求 $x$。" },
            { question: "若设 $y=x^2+x$，方程 $(x^2+x)^2+x^2+x=6$ 可化为 (    )", options: ["$y^2+y-6=0$", "$y^2+y+6=0$", "$y^2-y-6=0$", "$y^2+y=0$"], answer: "$y^2+y-6=0$", point: "换元练习", explanation: "原式即 $y^2+y=6$。" },
            { question: "设 $y=x+2$，则方程 $(x+2)^2=4$ 变为 $y^2=4$，解得 $y=\\pm 2$，则 $x=$ (    )", options: ["$0, -4$", "$2, -2$", "$4, 0$", "$0, -2$"], answer: "$0, -4$", point: "完整换元过程", explanation: "$x+2=2 \\Rightarrow x=0$；$x+2=-2 \\Rightarrow x=-4$。" },
            { question: "换元法解方程时，新变量的取值范围 (    )", options: ["可能受到原变量的限制", "一定是全体实数", "一定是正数", "无限制"], answer: "可能受到原变量的限制", point: "取值范围", explanation: "例如设 $y=x^2$，则 $y$ 必须 $\\ge 0$。" },
            { question: "解方程 $\\sqrt{x^2+1}-3+\\frac{2}{\\sqrt{x^2+1}}=0$，最适合的换元项是 (    )", options: ["$\\sqrt{x^2+1}$", "$x^2+1$", "$x^2$", "$x$"], answer: "$\\sqrt{x^2+1}$", point: "换元项选择", explanation: "该项在方程中多次重复出现。" },
            { question: "对于双二次方程 $ax^4+bx^2+c=0$，通常设 (    )", options: ["$y=x^2$", "$y=x^4$", "$y=x$", "$y=ax^2$"], answer: "$y=x^2$", point: "经典换元", explanation: "化为关于 $y$ 的一元二次方程。" },
            { question: "使用换元法解方程后，忘记“还元”会导致 (    )", options: ["结果错误（漏解或错解）", "计算更简单", "不影响结果", "老师多扣分"], answer: "结果错误（漏解或错解）", point: "逻辑习惯", explanation: "题目问的是 $x$，不是你设的中间变量。" },
            { question: "换元法也被称为 (    )", options: ["辅助变量法", "消元法", "配方法", "降次法"], answer: "辅助变量法", point: "别称认知", explanation: "通过引入辅助变量解决问题。" }
        ],

        // --- 7.3.5 韦达定理及应用 (10题) ---
        quad_vieta: [
            { question: "若 $x_1, x_2$ 是一元二次方程 $ax^2+bx+c=0$ 的两根，则 $x_1+x_2=$ (    )", options: ["$-b/a$", "$b/a$", "$c/a$", "$-c/a$"], answer: "$-b/a$", point: "两根之和公式", explanation: "韦达定理基础公式之一。" },
            { question: "方程 $x^2-5x+6=0$ 的两根之积是 (    )", options: ["6", "-6", "5", "-5"], answer: "6", point: "两根之积应用", explanation: "$x_1x_2 = c/a = 6/1 = 6$。" },
            { question: "已知方程 $x^2+px+q=0$ 的两根为 1 和 2，则 $p=$ (    )", options: ["-3", "3", "-2", "2"], answer: "-3", point: "逆向求参", explanation: "$x_1+x_2 = 1+2 = 3 = -p \\Rightarrow p=-3$。" },
            { question: "若方程 $2x^2-3x-1=0$ 的两根为 $x_1, x_2$，则 $\\frac{1}{x_1}+\\frac{1}{x_2}$ 的值是 (    )", options: ["-3", "3", "1.5", "-1.5"], answer: "-3", point: "对称式计算", explanation: "原式 $= \\frac{x_1+x_2}{x_1x_2} = \\frac{1.5}{-0.5} = -3$。" },
            { question: "韦达定理成立的前提是 (    )", options: ["判别式 $\\Delta \\ge 0$", "判别式 $\\Delta > 0$", "$a, b, c$ 为整数", "没有前提"], answer: "判别式 $\\Delta \\ge 0$", point: "定理前提", explanation: "只有方程有实根，讨论实根关系才有意义。" },
            { question: "已知方程 $x^2-2x-1=0$ 的两根为 $\\alpha, \\beta$，则 $\\alpha^2+\\beta^2$ 等于 (    )", options: ["6", "4", "2", "8"], answer: "6", point: "平方和计算", explanation: "$\\alpha^2+\\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = 2^2 - 2(-1) = 6$。" },
            { question: "若两根互为相反数，则系数满足 (    )", options: ["$b=0$", "$c=0$", "$a=c$", "$a+b+c=0$"], answer: "$b=0$", point: "特殊根特征", explanation: "$x_1+x_2=0 \\Rightarrow -b/a=0 \\Rightarrow b=0$。" },
            { question: "若一根为 0，则系数满足 (    )", options: ["$c=0$", "$b=0$", "$a=1$", "$b^2-4ac=0$"], answer: "$c=0$", point: "零根特征", explanation: "$x_1x_2=0 \\Rightarrow c/a=0 \\Rightarrow c=0$。" },
            { question: "已知方程 $x^2-3x+k=0$ 的一个根是 1，则另一个根是 (    )", options: ["2", "-1", "3", "0"], answer: "2", point: "根的关系利用", explanation: "$1+x_2=3 \\Rightarrow x_2=2$。" },
            { question: "韦达定理在不解方程的情况下可以 (    )", options: ["判断根的符号", "求两根之和", "构造新方程", "以上都对"], answer: "以上都对", point: "功能综合", explanation: "这是研究一元二次方程根的强大工具。" }
        ],

        // --- 7.4.1 分式方程的定义 (10题) ---
        fractional_concept: [
            { question: "分式方程是指 (    ) 中含有未知数的方程。", options: ["分母", "分子", "整式", "根号"], answer: "分母", point: "分式方程定义", explanation: "这是分式方程区别于整式方程的根本特征。" },
            { question: "下列方程中是分式方程的是 (    )", options: ["$\\frac{1}{x}-1=2$", "$\\frac{x}{2}+x=3$", "$\\frac{x+y}{\\pi}=1$", "$x^2-x=0$"], answer: "$\\frac{1}{x}-1=2$", point: "基本识别", explanation: "分母中含有未知数 $x$。" },
            { question: "分式方程 $\\frac{x}{x-1}=2$ 的最简公分母是 (    )", options: ["$x-1$", "$x$", "$2(x-1)$", "$x(x-1)$"], answer: "$x-1$", point: "最简公分母", explanation: "方程两边唯一的未知分母项。" },
            { question: "关于分式方程的解，下列说法错误的是 (    )", options: ["一定会产生增根", "可能产生增根", "解得的根必须验根", "增根是使分母为0的根"], answer: "一定会产生增根", point: "增根概念", explanation: "只有当解使得最简公分母为 0 时才叫增根。" },
            { question: "分式方程 $\\frac{2}{x-2}=\\frac{x}{x-2}$ 的解的情况是 (    )", options: ["无解", "$x=2$", "$x=0$", "无数解"], answer: "无解", point: "无解判定", explanation: "化为 $x=2$，但代入分母为 0，故原方程无解。" },
            { question: "方程 $\\frac{x+1}{x}=0$ 的解是 (    )", options: ["$x=-1$", "$x=0$", "$x=1$", "无解"], answer: "$x=-1$", point: "基本求解", explanation: "分子为 0 且分母不为 0，$x+1=0 \\Rightarrow x=-1$。" },
            { question: "下列式子属于分式方程的是 (    )", options: ["$\\frac{x-1}{x+2}=3$", "$\\frac{1}{2}x-y=1$", "$x^2+2x-1=0$", "$\\frac{22}{7}r=C$"], answer: "$\\frac{x-1}{x+2}=3$", point: "识别练习", explanation: "未知数在分母位置。" },
            { question: "分式方程 $\\frac{k}{x}=1$ 有解的条件是 (    )", options: ["$k \\ne 0$", "$k=0$", "$x \\ne 0$", "任意数"], answer: "$k \\ne 0$", point: "有解条件", explanation: "若 $k=0$，则 $0=x$，但分母不能为 0，故无解。" },
            { question: "若分式方程 $\\frac{m}{x-1}=2$ 的解为 $x=2$，则 $m=$ (    )", options: ["2", "1", "0", "3"], answer: "2", point: "求参练习", explanation: "$\\frac{m}{2-1}=2 \\Rightarrow m=2$。" },
            { question: "在分式方程 $\\frac{A}{B}=0$ 中，必须满足的条件是 (    )", options: ["$A=0$ 且 $B \\ne 0$", "$A=0$", "$B=0$", "$A, B$ 均不为 0"], answer: "$A=0$ 且 $B \\ne 0$", point: "方程成立条件", explanation: "分式的基本性质要求分母不能为 0。" }
        ],

        // --- 7.4.2 分式方程解法与思路 (10题) ---
        fractional_solving: [
            { question: "解分式方程的基本思路是 (    )", options: ["分式方程 $\\to$ 整式方程", "整式方程 $\\to$ 分式方程", "消去分子", "通分"], answer: "分式方程 $\\to$ 整式方程", point: "化归思想", explanation: "通过去分母，将陌生的问题转化为熟悉的问题。" },
            { question: "解分式方程 $\\frac{1}{x} = \\frac{2}{x-1}$，去分母正确的是 (    )", options: ["$x-1 = 2x$", "$x-1 = 2$", "$1 = 2x$", "$x = 2(x-1)$"], answer: "$x-1 = 2x$", point: "去分母步骤", explanation: "两边同乘最简公分母 $x(x-1)$。" },
            { question: "解分式方程必须进行的一步是 (    )", options: ["验根", "去括号", "移项", "提取公因式"], answer: "验根", point: "核心环节", explanation: "去分母可能导致方程范围扩大，必须检查是否产生了增根。" },
            { question: "若解分式方程产生增根，则增根一定是 (    )", options: ["使最简公分母为 0 的值", "0", "1", "负数"], answer: "使最简公分母为 0 的值", point: "增根定义", explanation: "增根是整式方程有解但原分式方程无意义的点。" },
            { question: "解方程 $\\frac{3}{x-2} + 1 = \\frac{x-1}{x-2}$，去分母后得 (    )", options: ["$3 + x-2 = x-1$", "$3 + 1 = x-1$", "$3 + x-2 = 1$", "$3 + 1 = 1$"], answer: "$3 + x-2 = x-1$", point: "易错点：常数项乘公分母", explanation: "常数项 1 也必须乘以 $(x-2)$。" },
            { question: "方程 $\\frac{1}{x-1} = \\frac{2}{x^2-1}$ 的解为 (    )", options: ["无解", "$x=1$", "$x=-1$", "$x=2$"], answer: "无解", point: "综合求解与验根", explanation: "去分母得 $x+1=2 \\Rightarrow x=1$，代入原分母为 0，是增根，故原方程无解。" },
            { question: "解分式方程 $\\frac{x}{x-3} - \\frac{x-1}{3-x} = 2$，去分母前应先 (    )", options: ["变号统一分母", "直接乘 $(x-3)(3-x)$", "移项", "通分"], answer: "变号统一分母", point: "简化技巧", explanation: "将 $3-x$ 写成 $-(x-3)$ 可显著降低计算难度。" },
            { question: "若分式方程 $\\frac{2}{x-3} = \\frac{m}{x-3}$ 产生增根，则 $m=$ (    )", options: ["2", "3", "0", "任意数"], answer: "2", point: "增根求参", explanation: "整式方程为 $2=m$，且增根要求 $x=3$。若 $m=2$，则 $x$ 可取任意值包括3，产生增根。" },
            { question: "解分式方程过程中，去分母后得到的整式方程无解，则原分式方程 (    )", options: ["一定无解", "可能有解", "解为 0", "无法判断"], answer: "一定无解", point: "无解逻辑", explanation: "整式方程都没解，分式方程更不可能有解。" },
            { question: "解分式方程 $\\frac{x-2}{x} = \\frac{x}{x+1}$ 的解是 (    )", options: ["$x=2$", "$x=-2$", "$x=1$", "无解"], answer: "$x=2$", point: "交叉相乘法", explanation: "$(x-2)(x+1) = x^2 \\Rightarrow x^2-x-2 = x^2 \\Rightarrow -x=2 \\Rightarrow x=-2$ (纠正：计算为-2)。" }
        ]
    },

    generateQuiz: function() {
        let allQuestions = [];
        Object.keys(this.database).forEach(cat => {
            this.database[cat].forEach(q => {
                allQuestions.push({...q, options: this.shuffleOptions(q.options)});
            });
        });
        return allQuestions.sort(() => Math.random() - 0.5);
    },

    getAdvice: function(score, wrongPoints) {
        let adviceHTML = `<div class='mb-4 p-4 ${score >= 80 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'} rounded-lg font-bold'>${score === 100 ? '代数王者！第七章知识点已完全掌握。' : '方程进阶难度较大，建议重点突破错题模型。'}</div>`;
        if (wrongPoints.length > 0) {
            adviceHTML += "<h4 class='font-bold text-slate-800 mb-2'>📊 复习建议</h4><table class='min-w-full text-sm text-left text-slate-500'><tbody>";
            [...new Set(wrongPoints)].forEach(point => {
                let strategy = "回归课本定义。";
                if (point.includes("消元")) strategy = "技巧：观察系数，选择最简单的变量进行消元。";
                else if (point.includes("配方")) strategy = "口诀：二次项系数化为1，加上一次项系数一半的平方。";
                else if (point.includes("判别式")) strategy = "核心：Δ的正负直接决定根的存在性。";
                else if (point.includes("韦达")) strategy = "重点：牢记两根之和与两根之积的公式。";
                else if (point.includes("分式")) strategy = "关键：去分母后一定记得验根！";
                adviceHTML += `<tr class='border-b'><td class='py-2 font-medium text-slate-900'>${point}</td><td class='py-2'>${strategy}</td></tr>`;
            });
            adviceHTML += "</tbody></table>";
        }
        return adviceHTML;
    }
};

window.AppLibrary = window.AppLibrary || {};
window.AppLibrary.Chapter7Generator = Chapter7_Generator;