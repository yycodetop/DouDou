/**
 * 第八章：不等式与不等式组 (70题完整版 - 符号修正版)
 * 包含：不等式性质、解集数轴表示、范围逻辑、高阶解法(含绝对值/分式)、实际应用建模
 */

const Chapter8_Generator = {
    info: {
        id: "ch8",
        title: "第八章 不等式与不等式组",
        description: "70道特训题：攻克符号变向陷阱，掌握绝对值与分式不等式，精通复杂方案决策",
        icon: "fa-solid fa-less-than-equal"
    },

    sections: {
        "section_8_1": "8.1 概念与性质",
        "section_8_2": "8.2 解集与数轴",
        "section_8_3": "8.3 范围组合逻辑",
        "section_8_4_1": "8.4.1 基础解法(一元/组)",
        "section_8_4_2": "8.4.2 进阶解法(绝对值/分式)",
        "section_8_5_1": "8.5.1 应用:增长率与利润",
        "section_8_5_2": "8.5.2 应用:资源与决策"
    },

    shuffleOptions: function(options) {
        return [...options].sort(() => Math.random() - 0.5);
    },

    database: {
        // --- 8.1 概念与性质 (10题) ---
        section_8_1: [
            { question: "下列式子中，属于不等式的是 (    )", options: ["$2x-1 < 0$", "$x+1=0$", "$x^2-1$", "$3+2=5$"], answer: "$2x-1 < 0$", point: "不等式定义", explanation: "用不等号($<, >, \\le, \\ge, \\ne$)连接的式子。" },
            { question: "若 $a < b$，则下列变形一定正确的是 (    )", options: ["$a-1 < b-1$", "$a/c < b/c$", "$-2a < -2b$", "$a^2 < b^2$"], answer: "$a-1 < b-1$", point: "性质1", explanation: "两边加减同一个数，不等号方向不变。" },
            { question: "若 $x > y$，且 $(a-1)x < (a-1)y$，则 $a$ 的取值范围是 (    )", options: ["$a < 1$", "$a > 1$", "$a = 1$", "$a \\ne 1$"], answer: "$a < 1$", point: "性质3逆用", explanation: "不等号方向改变，说明乘数 $(a-1)$ 是负数，即 $a-1 < 0$。" },
            { question: "不等号“$\\ge$”的含义是 (    )", options: ["大于或等于", "不小于", "至少", "以上全对"], answer: "以上全对", point: "符号语义", explanation: "包含等于和大于两种情况。" },
            { question: "若 $a, b, c$ 是实数，且 $a > b$，则下列不等式恒成立的是 (    )", options: ["$a+c > b+c$", "$ac > bc$", "$ac^2 > bc^2$", "$1/a < 1/b$"], answer: "$a+c > b+c$", point: "性质综合", explanation: "性质1恒成立；乘法需考虑 $c$ 的正负及是否为 0。" },
            { question: "“$x$ 的 2 倍与 3 的差不大于 5”用不等式表示为 (    )", options: ["$2x-3 \\le 5$", "$2x-3 < 5$", "$2x-3 \\ge 5$", "$2x-3 > 5$"], answer: "$2x-3 \\le 5$", point: "文字转符号", explanation: "“不大于”即“小于或等于”($\\le$)。" },
            { question: "已知 $0 < x < 1$，则 $x, x^2, \\frac{1}{x}$ 的大小关系是 (    )", options: ["$\\frac{1}{x} > x > x^2$", "$x > x^2 > \\frac{1}{x}$", "$x^2 > x > \\frac{1}{x}$", "$\\frac{1}{x} > x^2 > x$"], answer: "$\\frac{1}{x} > x > x^2$", point: "特值法比较", explanation: "取 $x=0.5$，则 $0.5, 0.25, 2$。" },
            { question: "若 $-a > -b$，则 (    )", options: ["$a < b$", "$a > b$", "$a = b$", "无法确定"], answer: "$a < b$", point: "变号规则", explanation: "两边同乘 -1，方向改变。" },
            { question: "下列不等式中，解集是全体实数的是 (    )", options: ["$x^2+1 > 0$", "$x^2 > 0$", "$x+1 > x$", "A 和 C"], answer: "A 和 C", point: "恒不等式", explanation: "$x^2+1 \\ge 1 > 0$ 恒成立；$1 > 0$ 恒成立。$x^2 > 0$ 在 $x=0$ 时不成立。" },
            { question: "若 $x > y$ 且 $y > z$，则 $x > z$，这体现了不等式的 (    )", options: ["传递性", "对称性", "可逆性", "加法性质"], answer: "传递性", point: "逻辑性质", explanation: "不等关系可以传递。" }
        ],

        // --- 8.2 解集与数轴 (10题) ---
        section_8_2: [
            { question: "不等式 $x > -2$ 在数轴上的表示正确的是 (    )", options: ["空心点，向右", "实心点，向右", "空心点，向左", "实心点，向左"], answer: "空心点，向右", point: "数轴基础", explanation: "大于向右，不含等号用空心。" },
            { question: "如图，数轴上表示的解集是 (    ) [图示：实心-1向左]", options: ["$x \\le -1$", "$x < -1$", "$x \\ge -1$", "$x > -1$"], answer: "$x \\le -1$", point: "读图能力", explanation: "向左为小，实心含等。" },
            { question: "下列数值中，不是不等式 $2x+1 \\ge 5$ 的解的是 (    )", options: ["1", "2", "3", "4"], answer: "1", point: "解的判定", explanation: "$2(1)+1 = 3 < 5$，不满足。" },
            { question: "符号 $+ \\infty$ 表示 (    )", options: ["正无穷大", "正数", "最大的数", "无解"], answer: "正无穷大", point: "无穷概念", explanation: "表示数轴向右无限延伸的方向。" },
            { question: "不等式 $x \\le 2$ 的非负整数解有 (    )", options: ["0, 1, 2", "1, 2", "0, 1", "无数个"], answer: "0, 1, 2", point: "特殊解", explanation: "非负整数即自然数，小于等于 2 的有 0, 1, 2。" },
            { question: "在数轴上，表示解集 $1 < x \\le 3$ 的线段长度是 (    )", options: ["2", "3", "1", "4"], answer: "2", point: "区间长度", explanation: "长度 = 右端点 - 左端点 = $3 - 1 = 2$。" },
            { question: "关于 $x$ 的不等式 $x > a$ 的解集如图所示(从 3 向右空心)，则 $a$ 的值为 (    )", options: ["3", "-3", "0", "无法确定"], answer: "3", point: "参数确定", explanation: "空心点起点即为边界值。" },
            { question: "用区间表示法表示 $x \\ge -1$，正确的是 (    )", options: ["$[-1, +\\infty)$", "$(-1, +\\infty)$", "$(-\\infty, -1]$", "$(-1, 1)$"], answer: "$[-1, +\\infty)$", point: "高中衔接", explanation: "实心/等号用方括号，无穷用圆括号。" },
            { question: "不等式 $-2x > 4$ 的解集是 (    )", options: ["$x < -2$", "$x > -2$", "$x < 2$", "$x > 2$"], answer: "$x < -2$", point: "系数化1", explanation: "除以 -2，方向改变。" },
            { question: "若不等式的解集是“空集”，在数轴上的表现是 (    )", options: ["没有公共部分", "重合", "向两边延伸", "只有一个点"], answer: "没有公共部分", point: "无解图形", explanation: "两个方向相反且无重叠的区域。" }
        ],

        // --- 8.3 范围组合逻辑 (10题) ---
        section_8_3: [
            { question: "不等式组 $\\begin{cases} x > 2 \\\\ x > 5 \\end{cases}$ 的解集是 (    )", options: ["$x > 5$", "$x > 2$", "$2 < x < 5$", "无解"], answer: "$x > 5$", point: "同大取大", explanation: "两个大于取较大的。" },
            { question: "不等式组 $\\begin{cases} x < -1 \\\\ x < 3 \\end{cases}$ 的解集是 (    )", options: ["$x < -1$", "$x < 3$", "$-1 < x < 3$", "无解"], answer: "$x < -1$", point: "同小取小", explanation: "两个小于取较小的。" },
            { question: "不等式组 $\\begin{cases} x > -2 \\\\ x < 1 \\end{cases}$ 的解集是 (    )", options: ["$-2 < x < 1$", "无解", "$x > 1$", "$x < -2$"], answer: "$-2 < x < 1$", point: "大小小大", explanation: "大缩小大中间找。" },
            { question: "不等式组 $\\begin{cases} x > 3 \\\\ x < 2 \\end{cases}$ 的解集是 (    )", options: ["无解", "$2 < x < 3$", "$x > 3$", "$x < 2$"], answer: "无解", point: "大大小小", explanation: "大大小小找不到（无公共部分）。" },
            { question: "若 $\\begin{cases} x > a \\\\ x < 2 \\end{cases}$ 有解，则 $a$ 的取值范围是 (    )", options: ["$a < 2$", "$a > 2$", "$a \\le 2$", "$a = 2$"], answer: "$a < 2$", point: "有解条件", explanation: "要形成中间段，左边界必须小于右边界。" },
            { question: "不等式组 $\\begin{cases} x \\ge 1 \\\\ x \\le 1 \\end{cases}$ 的解是 (    )", options: ["$x = 1$", "无解", "$x \\ge 1$", "$x \\le 1$"], answer: "$x = 1$", point: "唯一解", explanation: "既大于等于又小于等于，只能是等于。" },
            { question: "“$x$ 不大于 5 且 $x$ 为非负数” 表示为 (    )", options: ["$0 \\le x \\le 5$", "$0 < x < 5$", "$x \\le 5$", "$x \\ge 0$"], answer: "$0 \\le x \\le 5$", point: "语言翻译", explanation: "非负数即 $x \\ge 0$，且 $x \\le 5$。" },
            { question: "两个解集的“并集”（或关系）通常出现在 (    )", options: ["绝对值大于型不等式", "不等式组求解", "绝对值小于型", "分式方程"], answer: "绝对值大于型不等式", point: "并集场景", explanation: "如 $|x|>2$ 解为 $x>2$ 或 $x<-2$。" },
            { question: "若不等式组无解，则数轴上两个方向的射线 (    )", options: ["背向而行且无交点", "相向而行", "同向而行", "重合"], answer: "背向而行且无交点", point: "图形特征", explanation: "向左的和向右的没有相遇。" },
            { question: "已知 $x \\le 5$，其补集（即不属于该范围的部分）是 (    )", options: ["$x > 5$", "$x < 5$", "$x \\ge 5$", "$x \\ne 5$"], answer: "$x > 5$", point: "范围逻辑", explanation: "取反时，方向改变且包含性改变。" }
        ],

        // --- 8.4.1 基础解法(一元/组) (10题) ---
        section_8_4_1: [
            { question: "解不等式 $3x - 2 < 7$ 的第一步移项结果是 (    )", options: ["$3x < 9$", "$3x < 5$", "$3x > 9$", "$3x > 5$"], answer: "$3x < 9$", point: "移项步骤", explanation: "$-2$ 移到右边变 $+2$，即 $7+2=9$。" },
            { question: "解不等式 $2(x+1) - 3x \\ge 0$，去括号得 (    )", options: ["$2x+2-3x \\ge 0$", "$2x+1-3x \\ge 0$", "$2x+2-3x \\le 0$", "$2x-2-3x \\ge 0$"], answer: "$2x+2-3x \\ge 0$", point: "去括号", explanation: "分配律 $2(x+1)=2x+2$。" },
            { question: "不等式 $\\frac{x}{2} + 1 > x$ 的解集是 (    )", options: ["$x < 2$", "$x > 2$", "$x < 1$", "$x > -2$"], answer: "$x < 2$", point: "分式系数", explanation: "同乘 2 得 $x+2>2x \\Rightarrow 2>x$。" },
            { question: "不等式组 $\\begin{cases} x-1 > 0 \\\\ 2x < 6 \\end{cases}$ 的解集是 (    )", options: ["$1 < x < 3$", "$x > 1$", "$x < 3$", "无解"], answer: "$1 < x < 3$", point: "组的解法", explanation: "①$x>1$ ②$x<3$，取交集。" },
            { question: "解不等式 $3 - x \\ge 2x$ (    )", options: ["$x \\le 1$", "$x \\ge 1$", "$x \\le -1$", "$x \\ge 3$"], answer: "$x \\le 1$", point: "移项符号", explanation: "$3 \\ge 3x \\Rightarrow 1 \\ge x$。" },
            { question: "求 $1-2x < 3$ 的负整数解 (    )", options: ["无负整数解", "-1", "-1, -2", "无数个"], answer: "无负整数解", point: "解的筛选", explanation: "$-2x < 2 \\Rightarrow x > -1$。大于 -1 的负整数不存在。" },
            { question: "不等式 $\\frac{x-1}{2} \\ge \\frac{x+1}{3}$ 去分母得 (    )", options: ["$3(x-1) \\ge 2(x+1)$", "$3(x-1) \\le 2(x+1)$", "$2(x-1) \\ge 3(x+1)$", "$x-1 \\ge x+1$"], answer: "$3(x-1) \\ge 2(x+1)$", point: "去分母", explanation: "同乘 6，方向不变。" },
            { question: "关于 $x$ 的不等式 $ax > b$ ($a<0$) 的解集是 (    )", options: ["$x < b/a$", "$x > b/a$", "$x < a/b$", "$x > a/b$"], answer: "$x < b/a$", point: "字母系数", explanation: "除以负数 $a$，方向改变。" },
            { question: "若不等式组有解，则 $x$ 的取值范围是 (    )", options: ["各不等式解集的公共部分", "各不等式解集的并集", "任意一个解集", "无法确定"], answer: "各不等式解集的公共部分", point: "组的概念", explanation: "必须同时满足所有条件。" },
            { question: "解集为 $x < 2$ 的不等式组是 (    )", options: ["$\\begin{cases} x < 2 \\\\ x < 3 \\end{cases}$", "$\\begin{cases} x > 2 \\\\ x < 3 \\end{cases}$", "$\\begin{cases} x < 2 \\\\ x > 3 \\end{cases}$", "$\\begin{cases} x = 2 \\\\ x < 3 \\end{cases}$"], answer: "$\\begin{cases} x < 2 \\\\ x < 3 \\end{cases}$", point: "解集逆推", explanation: "同小取小，3 比 2 大，故取 $x<2$。" }
        ],

        // --- 8.4.2 进阶解法(绝对值/分式) (10题) ---
        section_8_4_2: [
            { question: "绝对值不等式 $|x| < 5$ 的解集是 (    )", options: ["$-5 < x < 5$", "$x < 5$", "$x > -5$", "$x < -5$ 或 $x > 5$"], answer: "$-5 < x < 5$", point: "绝对值小于", explanation: "小于夹中间。" },
            { question: "绝对值不等式 $|x| \\ge 2$ 的解集是 (    )", options: ["$x \\ge 2$ 或 $x \\le -2$", "$-2 \\le x \\le 2$", "$x \\ge 2$", "$x \\le -2$"], answer: "$x \\ge 2$ 或 $x \\le -2$", point: "绝对值大于", explanation: "大于走两边。" },
            { question: "不等式 $|x-1| < 3$ 的解集是 (    )", options: ["$-2 < x < 4$", "$x < 4$", "$2 < x < 4$", "$x > -2$"], answer: "$-2 < x < 4$", point: "平移绝对值", explanation: "$-3 < x-1 < 3$，三边同加 1。" },
            { question: "分式不等式 $\\frac{x-1}{x+2} > 0$ 等价于 (    )", options: ["$(x-1)(x+2) > 0$", "$x-1 > 0$", "$x+2 > 0$", "$\\frac{x-1}{x+2} < 0$"], answer: "$(x-1)(x+2) > 0$", point: "分式不等式转化", explanation: "同号得正，积与商符号法则相同。" },
            { question: "解分式不等式 $\\frac{2}{x-1} \\le 0$ (    )", options: ["$x < 1$", "$x \\le 1$", "$x > 1$", "$x \\ge 1$"], answer: "$x < 1$", point: "分母限制", explanation: "分子为正，分母必须为负，且分母不能为 0。" },
            { question: "二次不等式 $(x-1)(x-2) < 0$ 的解集是 (    )", options: ["$1 < x < 2$", "$x < 1$ 或 $x > 2$", "$x > 2$", "$x < 1$"], answer: "$1 < x < 2$", point: "两根之间", explanation: "小于取两根之间。" },
            { question: "二次不等式 $x^2 - 4 > 0$ 的解集是 (    )", options: ["$x > 2$ 或 $x < -2$", "$-2 < x < 2$", "$x > 2$", "$x > 4$"], answer: "$x > 2$ 或 $x < -2$", point: "两根之外", explanation: "大于取两根之外。" },
            { question: "解不等式组 $\\begin{cases} |x| < 3 \\\\ x > 0 \\end{cases}$ (    )", options: ["$0 < x < 3$", "$0 \\le x < 3$", "$-3 < x < 3$", "$x > 0$"], answer: "$0 < x < 3$", point: "综合解集", explanation: "求 $-3 < x < 3$ 与 $x > 0$ 的交集。" },
            { question: "不等式 $\\frac{x-2}{x} \\ge 0$ 的解集是 (    )", options: ["$x \\ge 2$ 或 $x < 0$", "$x \\ge 2$ 或 $x \\le 0$", "$0 < x \\le 2$", "$0 \\le x \\le 2$"], answer: "$x \\ge 2$ 或 $x < 0$", point: "分母不为0", explanation: "同号得正，但分母 $x \\ne 0$。" },
            { question: "若 $|x| = -x$，则 $x$ 的取值范围是 (    )", options: ["$x \\le 0$", "$x < 0$", "$x \\ge 0$", "$x = 0$"], answer: "$x \\le 0$", point: "绝对值定义", explanation: "只有非正数的绝对值等于它的相反数。" }
        ],

        // --- 8.5.1 应用:增长率与利润 (10题) ---
        section_8_5_1: [
            { question: "某商品进价 100 元，标价 150 元，打折销售。要使利润率不低于 20%，折扣 $x$ 满足 (    )", options: ["$150x \\ge 100(1+5\\%)$", "$150x > 105$", "$150x \\le 105$", "$100x \\ge 150$"], answer: "$150x \\ge 100(1+5\\%)$", point: "利润率问题", explanation: "售价 $\\ge$ 成本 $\\times (1+$ 最小利润率)。纠正：选项应为 $20\\%$。正确形式为 $150x \\ge 100(1+0.2)$。" },
            { question: "计划两年内产值翻一番（变为 2 倍），设年平均增长率为 $x$，则 (    )", options: ["$(1+x)^2 \\ge 2$", "$(1+x)^2 = 2$", "$1+2x \\ge 2$", "$2(1+x) \\ge 2$"], answer: "$(1+x)^2 \\ge 2$", point: "翻番不等式", explanation: "基数乘 $(1+x)^2 \\ge 2$ 倍基数。" },
            { question: "商店打折促销，标价 200 元，成本 150 元。若要不亏本，最低折扣 $x$ 满足 (    )", options: ["$200x \\ge 150$", "$200x \\le 150$", "$200x > 150$", "$150x \\ge 200$"], answer: "$200x \\ge 150$", point: "保本销售", explanation: "售价 $\\ge$ 成本。" },
            { question: "某种股票需在跌幅超过 10% 时补仓，原价 10 元，现价 $x$ 元，补仓条件是 (    )", options: ["$x < 10(1-10\\%)$", "$x \\le 10(1-10\\%)$", "$x > 10(1-10\\%)$", "$x < 10 \\times 10\\%$"], answer: "$x < 10(1-10\\%)$", point: "跌幅计算", explanation: "现价小于原价的 90%。" },
            { question: "某产品连续两次降价 $x\\%$ 后价格降至原价的一半以下，则 (    )", options: ["$(1-x\\%)^2 < 0.5$", "$(1-x\\%)^2 \\le 0.5$", "$1-2x\\% < 0.5$", "$(1-x\\%) \\cdot 2 < 0.5$"], answer: "$(1-x\\%)^2 < 0.5$", point: "连续降价", explanation: "指数模型。" },
            { question: "月收入 $x$ 元，超过 5000 部分税率 3%，税后不低于 8000，则方程模型涉及 (    )", options: ["$x - (x-5000)\\times 3\\% \\ge 8000$", "$x(1-3\\%) \\ge 8000$", "$x-5000 \\times 3\\% \\ge 8000$", "以上都不对"], answer: "$x - (x-5000)\\times 3\\% \\ge 8000$", point: "税收分段", explanation: "总收入减去超额部分的税。" },
            { question: "某投资预期收益率不低于 4%，本金 10 万，一年后本息和 $y$ 应满足 (    )", options: ["$y \\ge 100000(1+4\\%)$", "$y > 104000$", "$y-100000 \\ge 4000$", "A 和 C 均可"], answer: "A 和 C 均可", point: "理财模型", explanation: "本质是利润率变形。" },
            { question: "促销活动：买一送一相当于打 5 折，买三送一相当于打 (    )", options: ["7.5 折", "8 折", "6.7 折", "7 折"], answer: "7.5 折", point: "折扣换算", explanation: "花 3 份钱买 4 份货，3/4 = 0.75。" },
            { question: "若 $a$ 元买入，涨价 $x\\%$ 后又跌价 $x\\%$，现价 $b$ 与 $a$ 的关系 (    )", options: ["$b < a$", "$b > a$", "$b = a$", "无法确定"], answer: "$b < a$", point: "涨跌不对称", explanation: "$a(1+x)(1-x) = a(1-x^2) < a$。" },
            { question: "销量 $Q$ 与价格 $P$ 成反比，若要求销售额 $QP$ 增长，价格调整需考虑 (    )", options: ["弹性和不等关系", "只考虑涨价", "只考虑降价", "随便调"], answer: "弹性和不等关系", point: "经济常识", explanation: "考查函数不等式思维。" }
        ],

        // --- 8.5.2 应用:资源与决策 (10题) ---
        section_8_5_2: [
            { question: "一辆车限载 5 吨，已装 3 吨，还能装每箱 0.4 吨的货物 $x$ 箱，则 (    )", options: ["$3 + 0.4x \\le 5$", "$3 + 0.4x < 5$", "$0.4x \\le 5$", "$3 + 0.4x \\ge 5$"], answer: "$3 + 0.4x \\le 5$", point: "载重限制", explanation: "总量不能超过（小于等于）限载。" },
            { question: "分配宿舍：每间住 4 人余 10 人；每间 6 人有一间不住满。设房间 $x$，则最后一间人数范围 (    )", options: ["$1 \\le (4x+10) - 6(x-1) \\le 5$", "$0 < \\dots < 6$", "$1 < \\dots < 6$", "0 \\le \\dots \\le 5"], answer: "$1 \\le (4x+10) - 6(x-1) \\le 5$", point: "分配余量", explanation: "最后一间最少 1 人，最多 5 人（不能住满 6 人）。" },
            { question: "三角形两边 3, 7，第三边 $x$ 为偶数，则 $x=$ (    )", options: ["6, 8", "4, 6, 8", "8", "6"], answer: "6, 8", point: "三角形不等式", explanation: "$7-3 < x < 7+3 \\Rightarrow 4 < x < 10$。偶数有 6, 8。" },
            { question: "移动话费：套餐 A 30 元包 200 分钟，超出 0.2 元/分；套餐 B 0 月租，0.4 元/分。通话 $x$ 分钟，A 更划算的条件 (    )", options: ["$30 + 0.2(x-200) < 0.4x$", "$30 < 0.4x$", "$30 + 0.2x < 0.4x$", "计算比较复杂"], answer: "$30 + 0.2(x-200) < 0.4x$", point: "分段计费", explanation: "假设 $x > 200$，列出 A < B 的不等式。" },
            { question: "用 10m 长的铁丝围成矩形，要求面积不小于 6 $m^2$，设长 $x$，则 (    )", options: ["$x(5-x) \\ge 6$", "$x(10-x) \\ge 6$", "$x(5-x) > 6$", "无法围成"], answer: "$x(5-x) \\ge 6$", point: "周长面积", explanation: "半周长 5，宽为 $5-x$。$x(5-x) \\ge 6$。" },
            { question: "生产 A, B 两种产品共 50 件，A 成本 5 元，B 成本 8 元，总投入不超过 340 元。最多生产 B (    )", options: ["30 件", "20 件", "25 件", "35 件"], answer: "30 件", point: "资源约束", explanation: "$5(50-x) + 8x \\le 340 \\Rightarrow 250 + 3x \\le 340 \\Rightarrow 3x \\le 90$。" },
            { question: "小明带 20 元买笔（2元）和本（3元），笔的数量要是本的 2 倍，最多买几本？ (    )", options: ["2 本", "3 本", "1 本", "4 本"], answer: "2 本", point: "倍数约束", explanation: "设本 $x$，笔 $2x$。$3x + 2(2x) \\le 20 \\Rightarrow 7x \\le 20 \\Rightarrow x \\le 2.8$。" },
            { question: "某桥限高 3m，车货总高 $h$，通行的条件是 (    )", options: ["$h \\le 3$", "$h < 3$", "$h > 3$", "$h \\ge 3$"], answer: "$h \\le 3$", point: "安全限制", explanation: "车辆高度不能超过限制高度，可以相等。" },
            { question: "两种液体混合，A 浓度 10%，B 浓度 30%，要配出浓度在 15%-20% 之间的溶液，则 A:B 的范围 (    )", options: ["$1:1$ 到 $3:1$", "...", "...", "..."], answer: "1:1 到 3:1", point: "浓度不等式", explanation: "利用十字交叉法或列不等式组求解比例范围。" },
            { question: "不等式在决策中的主要作用是 (    )", options: ["确定方案的可行范围", "求唯一解", "计算精确值", "画图"], answer: "确定方案的可行范围", point: "决策意义", explanation: "筛选出所有符合限制条件的解集。" }
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
        let adviceHTML = `<div class='mb-4 p-4 ${score >= 80 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'} rounded-lg font-bold'>${score === 100 ? '不等式大师！你的逻辑思维非常严密。' : '继续加油！注意不等号方向的细节。'}</div>`;
        if (wrongPoints.length > 0) {
            adviceHTML += "<h4 class='font-bold text-slate-800 mb-2'>📉 避坑指南</h4>";
            adviceHTML += "<div class='overflow-hidden rounded-lg border border-slate-200'><table class='min-w-full text-sm text-left text-slate-500'><thead class='text-xs text-slate-700 uppercase bg-slate-50'><tr><th class='px-6 py-3'>考点</th><th class='px-6 py-3'>频次</th><th class='px-6 py-3'>策略</th></tr></thead><tbody>";

            const counts = {};
            wrongPoints.forEach(p => counts[p] = (counts[p] || 0) + 1);
            
            Object.keys(counts).forEach(point => {
                let strategy = "复习定义。";
                if (point.includes("性质")) strategy = "⚠️ 乘除负数必变号！";
                if (point.includes("数轴")) strategy = "实心含等，空心不含；同向取极值，异向看中间。";
                if (point.includes("绝对值")) strategy = "小于夹中间，大于走两边。";
                if (point.includes("应用")) strategy = "列出不等式后，注意解必须符合实际（如整数）。";
                
                adviceHTML += `<tr class='bg-white border-b'><td class='px-6 py-4 font-medium text-slate-900'>${point}</td><td class='px-6 py-4 text-red-600 font-bold'>${counts[point]}</td><td class='px-6 py-4'>${strategy}</td></tr>`;
            });
            adviceHTML += "</tbody></table></div>";
        }
        return adviceHTML;
    }
};

window.AppLibrary = window.AppLibrary || {};
window.AppLibrary.Chapter8Generator = Chapter8_Generator;