/**
 * 第十章：二次函数全能特训 (100题完整版)
 * 模块划分：定义识别、参数影响、点位计算、绘图性质、单调最值、顶点式平移、线面交点、待定系数法、运动利润应用、增长率综合
 */

const Chapter10_Generator = {
    info: {
        id: "ch10",
        title: "第十章 二次函数专题",
        description: "100道深度试题：攻克抛物线参数陷阱、顶点式平移变换、动点交点判定以及复杂的经济/物理建模问题",
        icon: "fa-solid fa-chart-area"
    },

    sections: {
        "quad_def_id": "10.1 定义、识别与图象",
        "quad_params": "10.2 参数 a,b,c 对图象的影响",
        "quad_calculation": "10.3 关键点位计算(顶点/轴)",
        "quad_graphing": "10.4 图象绘制与特征",
        "quad_monotony": "10.5 单调性与最值分析",
        "quad_vertex_form": "10.6 顶点式变换与平移",
        "quad_intersections": "10.7 抛物线与直线交点",
        "quad_undetermined": "10.8 待定系数法求解析式",
        "quad_motion_profit": "10.9 应用:运动与利润模型",
        "quad_comprehensive": "10.10 应用:增长、存储与销量"
    },

    shuffleOptions: function(options) {
        return [...options].sort(() => Math.random() - 0.5);
    },

    database: {
        // --- 10.1 定义、识别与图象 (10题) ---
        quad_def_id: [
            { question: "下列函数中，属于二次函数的是 (    )", options: ["$y = x^2 - 1$", "$y = 2x+1$", "$y = 1/x^2$", "$y = \\sqrt{x^2+1}$"], answer: "$y = x^2 - 1$", point: "二次函数定义", explanation: "二次函数标准形式为 $y=ax^2+bx+c(a \\ne 0)$，必须是整式函数。" },
            { question: "若 $y = (m-1)x^{m^2+1}$ 是关于 $x$ 的二次函数，则 $m$ 的值是 (    )", options: ["-1", "1", "$\\pm 1$", "0"], answer: "-1", point: "定义参数判定", explanation: "指数 $m^2+1=2 \\Rightarrow m=\\pm 1$，且系数 $m-1 \\ne 0$，故只能取 -1。" },
            { question: "二次函数 $y = ax^2+bx+c$ 的图象统称为 (    )", options: ["抛物线", "双曲线", "波浪线", "折线"], answer: "抛物线", point: "图象名称", explanation: "这是二次函数特有的几何曲线名称。" },
            { question: "关于二次函数 $y = x^2$，下列说法正确的是 (    )", options: ["开口向上", "开口向下", "是一条直线", "经过第二、四象限"], answer: "开口向上", point: "基础图象特征", explanation: "二次项系数 $a=1 > 0$，开口向上。" },
            { question: "下列方程变形后不是二次函数的是 (    )", options: ["$y = (x+1)(x-1) - x^2$", "$y = x(x-2)$", "$y = -x^2$", "$y + x^2 = 1$"], answer: "$y = (x+1)(x-1) - x^2$", point: "化简识别", explanation: "化简后 $y = x^2-1-x^2 = -1$，变成了常数函数。" },
            { question: "二次函数解析式中，$a$ 的取值范围必须是 (    )", options: ["$a \\ne 0$", "$a > 0$", "$a < 0$", "全体实数"], answer: "$a \\ne 0$", point: "核心系数限制", explanation: "若 $a=0$，则最高次数降为一次或零次。" },
            { question: "在 $y = 3x^2 - 2x + 5$ 中，二次项系数、一次项系数、常数项分别是 (    )", options: ["3, -2, 5", "3, 2, 5", "3, -2, -5", "无法确定"], answer: "3, -2, 5", point: "项的识别", explanation: "系数需包含符号。" },
            { question: "下列图象中可能是二次函数的是 (    )", options: ["轴对称的曲线", "过原点的直线", "无限接近坐标轴的曲线", "圆"], answer: "轴对称的曲线", point: "图象感性认识", explanation: "抛物线具有高度的对称性特征。" },
            { question: "若函数 $y = x^{|k|}$ 是二次函数，则 $k=$ (    )", options: ["$\\pm 2$", "2", "-2", "0"], answer: "$\\pm 2$", point: "幂函数关联", explanation: "绝对值等于 2 即可。" },
            { question: "二次函数 $y = -x^2+1$ 的对称轴是 (    )", options: ["$y$ 轴", "$x$ 轴", "直线 $x=1$", "直线 $y=1$"], answer: "$y$ 轴", point: "简单对称轴", explanation: "$b=0$ 时，对称轴为 $y$ 轴（即直线 $x=0$）。" }
        ],

        // --- 10.2 参数 a,b,c 对图象的影响 (10题) ---
        quad_params: [
            { question: "当 $a > 0$ 时，抛物线的开口 (    )", options: ["向上", "向下", "向左", "向右"], answer: "向上", point: "a的符号", explanation: "系数 $a$ 的正负决定开口方向。" },
            { question: "若 $|a|$ 越大，则抛物线的开口 (    )", options: ["越窄", "越宽", "不变", "越高"], answer: "越窄", point: "a的绝对值", explanation: "$|a|$ 越大，函数值随 $x$ 变化越剧烈，图象越陡峭（窄）。" },
            { question: "参数 $c$ 的几何意义是抛物线与 (    ) 的交点纵坐标。", options: ["$y$ 轴", "$x$ 轴", "对称轴", "顶点"], answer: "$y$ 轴", point: "c的意义", explanation: "令 $x=0$，则 $y=c$，故交点为 $(0, c)$。" },
            { question: "若 $a$ 与 $b$ 同号（$ab > 0$），则对称轴在 $y$ 轴的 (    )", options: ["左侧", "右侧", "重合", "无法确定"], answer: "左侧", point: "ab符号判定", explanation: "对称轴 $x = -b/2a$。若同号则 $-b/2a < 0$。" },
            { question: "抛物线 $y = ax^2 + bx + c$ 经过原点，则必有 (    )", options: ["$c = 0$", "$a = 0$", "$b = 0$", "$a+b+c=0$"], answer: "$c = 0$", point: "过原点条件", explanation: "代入 $(0,0)$ 得 $c=0$。" },
            { question: "若 $b=0$，则抛物线的对称轴是 (    )", options: ["$y$ 轴", "$x$ 轴", "原点", "不存在"], answer: "$y$ 轴", point: "对称轴位置", explanation: "此时 $x = -0/2a = 0$。" },
            { question: "抛物线 $y = -2x^2 + 3$ 的开口方向和 $y$ 轴交点分别是 (    )", options: ["向下, (0, 3)", "向上, (0, 3)", "向下, (0, -2)", "向上, (0, 0)"], answer: "向下, (0, 3)", point: "综合参数", explanation: "$a=-2 < 0$ 开口下，$c=3$ 交于 3。" },
            { question: "已知 $a < 0$ 且 $b < 0$，则该抛物线对称轴位于 (    )", options: ["左侧", "右侧", "正上方", "负半轴"], answer: "左侧", point: "参数组合", explanation: "$-b/2a$ 中，$-b$ 为正，$2a$ 为负，结果为负。" },
            { question: "当 $a, b, c$ 满足什么条件时，抛物线顶点在 $x$ 轴上？ (    )", options: ["$b^2 - 4ac = 0$", "$c = 0$", "$b = 0$", "$a > 0$"], answer: "$b^2 - 4ac = 0$", point: "判别式关联", explanation: "顶点纵坐标为 0，即 $(4ac-b^2)/4a = 0 \\Rightarrow b^2-4ac=0$。" },
            { question: "若 $a < 0$ 且 $c < 0$，则抛物线一定 (    )", options: ["不经过第一象限", "经过原点", "开口向上", "与 $x$ 轴有两个交点"], answer: "不经过第一象限", point: "象限分布进阶", explanation: "开口下且与 $y$ 轴交于负半轴，最高点可能在下方。" }
        ],

        // --- 10.3 关键点位计算(顶点/轴) (10题) ---
        quad_calculation: [
            { question: "抛物线 $y = x^2 - 4x + 3$ 的对称轴方程是 (    )", options: ["$x = 2$", "$x = -2$", "$x = 4$", "$x = -4$"], answer: "$x = 2$", point: "对称轴公式", explanation: "$-b/2a = -(-4)/(2 \\times 1) = 2$。" },
            { question: "求二次函数 $y = x^2 - 2x + 5$ 的顶点坐标为 (    )", options: ["$(1, 4)$", "$(-1, 6)$", "$(1, 5)$", "$(2, 5)$"], answer: "$(1, 4)$", point: "顶点坐标计算", explanation: "横坐标 1，代入得 $y = 1-2+5=4$。" },
            { question: "抛物线 $y = 2(x-3)^2 + 1$ 的顶点坐标直接观察为 (    )", options: ["$(3, 1)$", "$(-3, 1)$", "$(3, -1)$", "$(-3, -1)$"], answer: "$(3, 1)$", point: "顶点式识别", explanation: "$y = a(x-h)^2+k$ 的顶点为 $(h, k)$。" },
            { question: "若对称轴为 $x = 1$，且经过 $(0, 0)$，则抛物线必过点 (    )", options: ["$(2, 0)$", "$(1, 0)$", "$(-1, 0)$", "$(1, 1)$"], answer: "$(2, 0)$", point: "对称性应用", explanation: "$(0,0)$ 关于 $x=1$ 对称的点是 $(2,0)$。" },
            { question: "二次函数 $y = ax^2+bx+c$ 顶点纵坐标公式为 (    )", options: ["$\\frac{4ac-b^2}{4a}$", "$\\frac{b^2-4ac}{4a}$", "$\\frac{-b}{2a}$", "$c - \\frac{b^2}{4a}$"], answer: "$\\frac{4ac-b^2}{4a}$", point: "顶点公式", explanation: "这是标准的一般式求顶点纵坐标公式。" },
            { question: "若 $y = x^2 + bx + c$ 的顶点是 $(2, 3)$，则 $b=$ (    )", options: ["-4", "4", "2", "-2"], answer: "-4", point: "逆向参数求解", explanation: "$-b/2 = 2 \\Rightarrow b = -4$。" },
            { question: "直线 $x = -1$ 是抛物线 $y = x^2 + mx + 2$ 的对称轴，则 $m=$ (    )", options: ["2", "-2", "1", "-1"], answer: "2", point: "对称轴参数", explanation: "$-m/2 = -1 \\Rightarrow m = 2$。" },
            { question: "抛物线 $y = x^2 - 6x$ 与 $x$ 轴的交点坐标是 (    )", options: ["$(0, 0)$ 和 $(6, 0)$", "$(0, 0)$ 和 $(-6, 0)$", "$(6, 0)$", "$(3, -9)$"], answer: "$(0, 0)$ 和 $(6, 0)$", point: "x轴截距", explanation: "令 $x(x-6)=0 \\Rightarrow x=0$ 或 $x=6$。" },
            { question: "若抛物线顶点在 $y$ 轴上，则参数满足 (    )", options: ["$b = 0$", "$c = 0$", "$a = 1$", "$b^2-4ac=0$"], answer: "$b = 0$", point: "特殊位置", explanation: "对称轴必须为 $x=0$。" },
            { question: "已知 $y = x^2 + 2x - 3$，与 $y$ 轴的交点坐标是 (    )", options: ["$(0, -3)$", "$(-3, 0)$", "$(0, 0)$", "$(1, 0)$"], answer: "$(0, -3)$", point: "y轴截距", explanation: "直接取常数项 $c$ 的值。" }
        ],

        // --- 10.4 图象绘制与特征 (10题) ---
        quad_graphing: [
            { question: "绘制二次函数图象常用的“五点法”，这五点通常不包括 (    )", options: ["任意 5 个非常大的点", "顶点", "与 $y$ 轴交点", "与 $x$ 轴交点（若存在）"], answer: "任意 5 个非常大的点", point: "绘图规范", explanation: "应选取反映核心特征的关键点。" },
            { question: "在画 $y = x^2$ 的图象时，第一步通常是 (    )", options: ["列表", "描点", "连线", "写解析式"], answer: "列表", point: "绘图步骤", explanation: "由数到形的标准流程。" },
            { question: "抛物线的连线应该是 (    )", options: ["平滑的曲线", "用直尺连接的折线", "虚线", "只点出点即可"], answer: "平滑的曲线", point: "图象特征", explanation: "函数是连续且变化的。" },
            { question: "关于抛物线的对称性，下列说法错误的是 (    )", options: ["抛物线关于顶点对称", "抛物线关于对称轴对称", "轴两侧对应的 $y$ 值相等", "顶点是对称轴上的唯一特殊点"], answer: "抛物线关于顶点对称", point: "对称逻辑", explanation: "抛物线是轴对称图形，不是中心对称图形。" },
            { question: "若抛物线开口向上，则其形状像 (    )", options: ["山谷", "山峰", "直线", "圆圈"], answer: "山谷", point: "直观形象", explanation: "具有最低点。" },
            { question: "抛物线 $y = x^2$ 与 $y = -x^2$ 关于 (    ) 对称。", options: ["$x$ 轴", "$y$ 轴", "原点", "直线 $x=1$"], answer: "$x$ 轴", point: "图象变换", explanation: "$y$ 变为 $-y$，上下颠倒。" },
            { question: "观察图象：若抛物线不与 $x$ 轴交，说明 $\\Delta$ (    )", options: ["小于 0", "大于 0", "等于 0", "无法判断"], answer: "小于 0", point: "数形结合", explanation: "无交点意味着对应的二次方程无实根。" },
            { question: "在同一坐标系中，$y = x^2$ 与 $y = 2x^2$ 的共同点是 (    )", options: ["顶点和对称轴相同", "开口大小相同", "经过的点完全相同", "都是开口向下"], answer: "顶点和对称轴相同", point: "对比分析", explanation: "顶点都在 $(0,0)$，轴都是 $y$ 轴。" },
            { question: "若抛物线经过 $(1, 2)$ 和 $(3, 2)$，则其对称轴是 (    )", options: ["$x = 2$", "$x = 1$", "$x = 3$", "$y = 2$"], answer: "$x = 2$", point: "中点特性", explanation: "对称轴横坐标 $x = (1+3)/2 = 2$。" },
            { question: "二次函数图象的“最高点”存在的前提是 (    )", options: ["$a < 0$", "$a > 0$", "$c > 0$", "必存在"], answer: "$a < 0$", point: "极值点概念", explanation: "开口向下才有最大值（最高点）。" }
        ],

        // --- 10.5 单调性与最值分析 (10题) ---
        quad_monotony: [
            { question: "对于 $y = x^2$，当 $x > 0$ 时，$y$ 随 $x$ 的增大而 (    )", options: ["增大", "减小", "不变", "先增后减"], answer: "增大", point: "单调性判定", explanation: "开口向上，对称轴右侧为增区间。" },
            { question: "函数 $y = -(x-1)^2 + 3$ 的最大值是 (    )", options: ["3", "1", "-1", "不存在"], answer: "3", point: "最值直接观察", explanation: "顶点纵坐标即为极值。" },
            { question: "若 $y = x^2 - 2x + c$ 的最小值是 2，则 $c = $ (    )", options: ["3", "2", "1", "0"], answer: "3", point: "最值计算", explanation: "顶点 $(1, 1-2+c) = (1, c-1)$。$c-1=2 \\Rightarrow c=3$。" },
            { question: "已知 $a < 0$，在对称轴的左侧，$y$ 随 $x$ 的增大而 (    )", options: ["增大", "减小", "不变", "随机"], answer: "增大", point: "单调性规律", explanation: "开口向下，轴左侧是上升段。" },
            { question: "判断：若 $f(1) < f(2)$ 且 $a > 0$，则对称轴一定在 $x=2$ 的 (    )", options: ["左侧", "右侧", "不确定"], answer: "左侧", point: "利用两点判单调", explanation: "$a>0$ 且值在增大，说明两点均在增区间（轴右侧）。" },
            { question: "二次函数在对称轴处取得 (    )", options: ["最大值或最小值", "零点", "平均值", "拐点"], answer: "最大值或最小值", point: "顶点意义", explanation: "顶点是图象的转折点，也是极值点。" },
            { question: "函数 $y = 2x^2 + 4x - 1$ 的增区间是 (    )", options: ["$x > -1$", "$x < -1$", "$x > -2$", "$x < 0$"], answer: "$x > -1$", point: "区间求解", explanation: "对称轴 $x = -4/4 = -1$，开口向上，轴右侧增。" },
            { question: "若 $x_1 < x_2 < h$ 且 $a > 0$，则 $y_1$ 与 $y_2$ 的关系是 (    )", options: ["$y_1 > y_2$", "$y_1 < y_2$", "$y_1 = y_2$", "无法比较"], answer: "$y_1 > y_2$", point: "单调性比较", explanation: "开口上，左侧减。$x$ 越大 $y$ 越小。" },
            { question: "直接使用顶点公式求 $y = ax^2+bx+c$ 最值的条件是 (    )", options: ["自变量 $x$ 为全体实数", "$x > 0$", "$x$ 在某段闭区间内", "$a$ 必须为正"], answer: "自变量 $x$ 为全体实数", point: "公式适用范围", explanation: "若定义域受限，最值可能在端点取得。" },
            { question: "函数 $y = x^2$ 在区间 $[-1, 2]$ 上的最大值是 (    )", options: ["4", "1", "0", "2"], answer: "4", point: "区间最值", explanation: "$(-1)^2=1, 2^2=4, 0^2=0$。最大为 4。" }
        ],

        // --- 10.6 顶点式变换与平移 (10题) ---
        quad_vertex_form: [
            { question: "将 $y = x^2 - 2x + 3$ 化为顶点式正确的是 (    )", options: ["$y = (x-1)^2 + 2$", "$y = (x-1)^2 + 3$", "$y = (x+1)^2 + 2$", "$y = (x-2)^2 + 1$"], answer: "$y = (x-1)^2 + 2$", point: "配方法转换", explanation: "$x^2-2x+1-1+3 = (x-1)^2+2$。" },
            { question: "顶点式 $y = a(x-h)^2 + k$ 中，$h$ 变大意味着图象 (    )", options: ["向右平移", "向左平移", "向上平移", "向下平移"], answer: "向右平移", point: "h的平移规律", explanation: "“左加右减”针对的是 $x$ 的变换。" },
            { question: "将 $y = 2(x+1)^2 - 4$ 展开为一般式是 (    )", options: ["$y = 2x^2 + 4x - 2$", "$y = 2x^2 + 2x - 4$", "$y = 2x^2 + 4x + 2$", "$y = 2x^2 - 2$"], answer: "$y = 2x^2 + 4x - 2$", point: "展开转换", explanation: "$2(x^2+2x+1)-4 = 2x^2+4x+2-4$。" },
            { question: "抛物线 $y = x^2$ 向左平移 2 个单位，再向上平移 3 个单位，解析式为 (    )", options: ["$y = (x+2)^2 + 3$", "$y = (x-2)^2 + 3$", "$y = (x+2)^2 - 3$", "$y = (x-2)^2 - 3$"], answer: "$y = (x+2)^2 + 3$", point: "综合平移", explanation: "左加右减，上加下减。" },
            { question: "若两抛物线 $a$ 值相同，说明它们 (    )", options: ["形状完全相同，仅位置不同", "开口方向相反", "顶点重合", "交点相同"], answer: "形状完全相同，仅位置不同", point: "a的物理含义", explanation: "$a$ 决定了弯曲程度和平行移动的一致性。" },
            { question: "顶点式中，当 $x = h$ 时，函数取得 (    )", options: ["极值 $k$", "零点", "截距", "$h$ 值"], answer: "极值 $k$", point: "顶点式优势", explanation: "一眼看出顶点坐标 $(h, k)$。" },
            { question: "将 $y = x^2 - 4$ 变为 $y = (x-1)^2 - 4$，属于 (    )", options: ["向右平移 1 单位", "向左平移 1 单位", "向上平移 1 单位", "向下平移 1 单位"], answer: "向右平移 1 单位", point: "平移判定", explanation: "$x$ 变成了 $x-1$。" },
            { question: "抛物线 $y = a(x-h)^2+k$ 关于 $x$ 轴对称后的解析式为 (    )", options: ["$y = -a(x-h)^2-k$", "$y = a(x+h)^2+k$", "$y = -a(x-h)^2+k$", "$y = a(x-h)^2-k$"], answer: "$y = -a(x-h)^2-k$", point: "翻转变换", explanation: "整体取负号。" },
            { question: "已知顶点 $(2, -1)$ 且 $a=1$，解析式为 (    )", options: ["$y = (x-2)^2 - 1$", "$y = (x+2)^2 - 1$", "$y = (x-2)^2 + 1$", "$y = x^2 - 2x - 1$"], answer: "$y = (x-2)^2 - 1$", point: "顶点式建模", explanation: "直接代入 $h=2, k=-1$。" },
            { question: "平移过程中，不发生变化的是 (    )", options: ["二次项系数 $a$", "一次项系数 $b$", "常数项 $c$", "顶点位置"], answer: "二次项系数 $a$", point: "平移本质", explanation: "平移不改变图形的形状和开口方向。" }
        ],

        // --- 10.7 抛物线与直线交点 (10题) ---
        quad_intersections: [
            { question: "求抛物线与直线的交点，本质是解 (    )", options: ["二元二次方程组", "一元一次方程", "一元二次方程", "分式方程"], answer: "二元二次方程组", point: "交点本质", explanation: "点需同时满足两个解析式。" },
            { question: "若直线与抛物线只有一个交点，则联立后的方程判别式 (    )", options: ["$\\Delta = 0$", "$\\Delta > 0$", "$\\Delta < 0$", "$\\Delta \\ge 0$"], answer: "$\\Delta = 0$", point: "交点个数判定", explanation: "切点情况，对应唯一解。" },
            { question: "抛物线 $y = x^2$ 与直线 $y = x$ 的交点是 (    )", options: ["$(0,0)$ 和 $(1,1)$", "$(0,0)$", "$(1,1)$", "无交点"], answer: "$(0,0)$ 和 $(1,1)$", point: "交点计算", explanation: "$x^2 = x \\Rightarrow x(x-1)=0$。" },
            { question: "若抛物线开口向上，直线斜率大于 0，它们 (    ) 有交点。", options: ["可能", "一定", "一定不", "只有一个"], answer: "可能", point: "位置关系", explanation: "取决于截距和相对位置。" },
            { question: "抛物线 $y = x^2 - 2$ 与 $x$ 轴的交点个数是 (    )", options: ["2个", "1个", "0个", "3个"], answer: "2个", point: "与坐标轴交点", explanation: "$\\Delta = 0 - 4(1)(-2) = 8 > 0$。" },
            { question: "直线 $y = k$ 与 $y = x^2 + 1$ 始终无交点，则 $k$ 的取值范围是 (    )", options: ["$k < 1$", "$k \le 1$", "$k > 1$", "$k = 0$"], answer: "$k < 1$", point: "动态交点", explanation: "抛物线最低点是 $(0, 1)$，直线需在其下方。" },
            { question: "若方程组 $\\begin{cases} y = x^2 \\\\ y = x-1 \\end{cases}$ 无解，说明图象 (    )", options: ["不相交", "相切", "相交", "重合"], answer: "不相交", point: "无解意义", explanation: "代数无解对应几何无公共点。" },
            { question: "判断直线 $y = 2x + 1$ 与 $y = x^2 + 2x + 1$ 的位置关系 (    )", options: ["相切（一个交点）", "相交（两个交点）", "相离", "垂直"], answer: "相切（一个交点）", point: "判定练习", explanation: "$2x+1 = x^2+2x+1 \\Rightarrow x^2=0 \\Rightarrow x=0$。" },
            { question: "抛物线与 $y$ 轴的交点个数 (    )", options: ["恒为 1 个", "0 个或 1 个", "2 个", "无数个"], answer: "恒为 1 个", point: "y轴交点规律", explanation: "定义域为全实数，当 $x=0$ 时有且只有一个 $y$ 值。" },
            { question: "若两抛物线 $y = x^2$ 与 $y = -x^2 + 2$ 相交，交点纵坐标为 (    )", options: ["1", "0", "2", "-1"], answer: "1", point: "双抛物线交点", explanation: "$x^2 = -x^2+2 \\Rightarrow 2x^2=2 \\Rightarrow x^2=1 \\Rightarrow y=1$。" }
        ],

        // --- 10.8 待定系数法求解析式 (10题) ---
        quad_undetermined: [
            { question: "已知抛物线经过三个点，通常设一般式 (    )", options: ["$y = ax^2+bx+c$", "$y = a(x-h)^2+k$", "$y = a(x-x_1)(x-x_2)$", "$y = kx+b$"], answer: "$y = ax^2+bx+c$", point: "设式技巧", explanation: "一般式最通用，适合三点代入。" },
            { question: "已知顶点坐标和另一点，首选设 (    )", options: ["顶点式", "一般式", "交点式", "正比例式"], answer: "顶点式", point: "方法选择", explanation: "可以减少未知数个数，计算更简便。" },
            { question: "已知抛物线与 $x$ 轴的两个交点坐标，首选设 (    )", options: ["交点式 $y = a(x-x_1)(x-x_2)$", "一般式", "顶点式", "斜截式"], answer: "交点式 $y = a(x-x_1)(x-x_2)$", point: "交点式应用", explanation: "利用根与因式的关系快速建模。" },
            { question: "待定系数法求二次函数至少需要几个独立条件？ (    )", options: ["3个", "2个", "1个", "4个"], answer: "3个", point: "条件个数", explanation: "对应 $a, b, c$ 三个待定系数。" },
            { question: "已知 $a=1$，且过点 $(0, 0)$ 和 $(1, 2)$，解析式为 (    )", options: ["$y = x^2 + x$", "$y = x^2 + 2x$", "$y = x^2$", "$y = 2x^2$"], answer: "$y = x^2 + x$", point: "简单计算", explanation: "$0 = c$；$2 = 1+b \\Rightarrow b=1$。" },
            { question: "若抛物线过点 $(1, 0), (3, 0), (0, 3)$，则其解析式为 (    )", options: ["$y = x^2 - 4x + 3$", "$y = x^2 + 4x + 3$", "$y = -x^2 + 4x - 3$", "$y = x^2 - 3$"], answer: "$y = x^2 - 4x + 3$", point: "交点式建模", explanation: "$y = a(x-1)(x-3)$，代入 $(0, 3) \\Rightarrow 3 = 3a \\Rightarrow a=1$。" },
            { question: "在解三元一次方程组求 $a,b,c$ 时，通常采用 (    )", options: ["消元法", "配方法", "图象法", "换元法"], answer: "消元法", point: "代数技巧", explanation: "先消去 $c$ 是常规套路。" },
            { question: "已知对称轴 $x=1$ 和点 $(0, 2), (2, 2)$ 无法确定解析式，是因为 (    )", options: ["点关于轴对称，相当于只给了一个有效点", "条件太多", "数值错误", "缺少顶点"], answer: "点关于轴对称，相当于只给了一个有效点", point: "条件有效性", explanation: "三点法要求三点不共线且不全对称（需三个独立方程）。" },
            { question: "若二次函数图象经过点 $(1, 4), (-1, 4), (0, 3)$，则其对称轴是 (    )", options: ["$y$ 轴", "$x = 1$", "$x = -1$", "$x = 3$"], answer: "$y$ 轴", point: "观察法求轴", explanation: "$(1,4)$ 和 $(-1,4)$ 纵坐标相同，中点在 0。" },
            { question: "求得 $a, b, c$ 后，最后一步应 (    )", options: ["写出完整的函数表达式", "画图", "验根", "求最值"], answer: "写出完整的函数表达式", point: "规范步骤", explanation: "将系数填回设出的模板中。" }
        ],

        // --- 10.9 应用:运动与利润模型 (10题) ---
        quad_motion_profit: [
            { question: "小球从地面抛出，高度 $h$ 与时间 $t$ 满足 $h = -5t^2 + 20t$，最高点高度是 (    )", options: ["20", "10", "40", "15"], answer: "20", point: "运动极值", explanation: "$t = -20/(-10) = 2$，$h = -20+40 = 20$。" },
            { question: "某种商品成本 40 元，售价 $x$ 元时销量为 $(100-x)$。利润 $y$ 的解析式为 (    )", options: ["$y = (x-40)(100-x)$", "$y = x(100-x) - 40$", "$y = 40(100-x)$", "$y = (100-x) - 40$"], answer: "$y = (x-40)(100-x)$", point: "利润建模", explanation: "总利润 = 单件利润 $\times$ 销售量。" },
            { question: "上题中，当售价定为 (    ) 元时利润最大。", options: ["70", "60", "50", "80"], answer: "70", point: "利润最值", explanation: "根为 40 和 100，顶点在 $(40+100)/2 = 70$。" },
            { question: "抛物线拱桥模型中，坐标原点通常选在 (    )", options: ["跨度中点、顶点或端点均可", "必须在顶点", "必须在水面", "任意远方"], answer: "跨度中点、顶点或端点均可", point: "建模习惯", explanation: "选择合适的原点可以简化解析式。" },
            { question: "烟花升空路径可看作抛物线。若 $h = -2t^2 + 12t + 1$，则开始燃放时（$t=0$）的高度是 (    )", options: ["1", "0", "12", "6"], answer: "1", point: "初始值", explanation: "即 $c$ 的物理意义。" },
            { question: "一运动员推铅球，铅球运行高度 $y$ 与水平距离 $x$ 为二次函数。铅球落地意味着 (    )", options: ["$y = 0$", "$x = 0$", "$y$ 取最大值", "速度为 0"], answer: "$y = 0$", point: "落地状态建模", explanation: "高度降为 0。" },
            { question: "某果园产橙子。若每亩植 30 棵，亩产 600 个；每多植 1 棵，单棵产量减 10 个。最大亩产量对应的棵数 (    )", options: ["45", "30", "60", "40"], answer: "45", point: "生产优化", explanation: "设多植 $x$ 棵，$y = (30+x)(600-10x) = -10x^2 + 300x + 18000$。轴在 $x = 15$，总棵数 $30+15=45$。" },
            { question: "在利润问题 $y = ax^2+bx+c$ 中，$a < 0$ 意味着 (    )", options: ["存在最高利润", "亏损无限增加", "售价越高越赚钱", "利润没有限制"], answer: "存在最高利润", point: "开口方向意义", explanation: "开口向下保证了极值的存在。" },
            { question: "隧道横截面为抛物线，宽 6m，高 9m。若以中点为原点，解析式形如 (    )", options: ["$y = ax^2 + 9$", "$y = ax^2$", "$y = a(x-3)^2$", "$y = 9x^2 + 6$"], answer: "$y = ax^2 + 9$", point: "几何建模", explanation: "顶点在 $(0, 9)$。" },
            { question: "喷水池喷出的水柱是抛物线。若水柱最高点 $(2, 4)$，则解析式必含因式 (    )", options: ["$(x-2)^2$", "$x^2$", "$(x+2)^2$", "$(x-4)^2$"], answer: "$(x-2)^2$", point: "顶点式反推", explanation: "顶点坐标决定了平移因式。" }
        ],

        // --- 10.10 应用:增长、存储与销量 (10题) ---
        section_8_5_2: [
            { question: "某城市人口年增长率为 $x$，当前 100 万，两年后人口 $y$ 为 (    )", options: ["$y = 100(1+x)^2$", "$y = 100(1+2x)$", "$y = 100 + x^2$", "$y = 200(1+x)$"], answer: "$y = 100(1+x)^2$", point: "复利增长模型", explanation: "连续增长属于二次模型的一种应用。" },
            { question: "某种存储业务，第一年存款 1000 元，第二年将本息全存入。利率 $x$ 满足二次模型，则 (    )", options: ["本质是 $(1+x)^2$ 关系", "是一次函数", "是反比例", "没有规律"], answer: "本质是 $(1+x)^2$ 关系", point: "存储模型", explanation: "利滚利模型是典型的二次模型。" },
            { question: "商品降价 $x$ 元，销量增加 $10x$ 件。原价 50 元销量 100 件。利润 $y$ 关于 $x$ 的关系是 (    )", options: ["二次函数", "一次函数", "反比例函数", "常数"], answer: "二次函数", point: "价格销量逻辑", explanation: "利润 = (单利-x)(销量+10x)，两项含 x 相乘得二次项。" },
            { question: "在“存储-收益”模型中，自变量利率 $x$ 通常的取值范围是 (    )", options: ["$0 < x < 1$", "$x > 0$", "任意实数", "$x < 0$"], answer: "$0 < x < 1$", point: "实际定义域", explanation: "利率通常为正的小数。" },
            { question: "某公司产量连续两年增长，平均增长率 $x$。若第一年 100 万，第三年达 144 万，方程为 (    )", options: ["$100(1+x)^2 = 144$", "$100(1+2x) = 144$", "$100x^2 = 144$", "$100 + 100(1+x)^2 = 144$"], answer: "$100(1+x)^2 = 144$", point: "产量增长", explanation: "标准二次增长模型。" },
            { question: "二次函数在预测资源枯竭时间时，通常寻找 (    )", options: ["函数值降为 0 的点", "顶点", "对称轴", "$y$ 轴截距"], answer: "函数值降为 0 的点", point: "预测建模", explanation: "资源量降为 0 意味着枯竭。" },
            { question: "贷款还款模型中，若每月还款额固定，剩余欠款与时间的关系 (    ) 二次函数。", options: ["通常不是", "一定是", "可能是", "无法判断"], answer: "通常不是", point: "金融常识", explanation: "通常涉及指数函数，但在简化模型中可能出现二次拟合。" },
            { question: "当商品单价过高导致销量为 0 时，利润 $y$ 为 (    )", options: ["0", "最大值", "最小值", "常数"], answer: "0", point: "极端情况分析", explanation: "卖不出去就没有利润。" },
            { question: "在二次函数应用中，通过顶点公式计算出的 $x$ 值必须 (    )", options: ["符合实际意义（如价格范围）", "是整数", "是正数", "无所谓"], answer: "符合实际意义（如价格范围）", point: "解的合理性", explanation: "如果顶点在定义域外，最值在边界取得。" },
            { question: "二次函数能够解决实际问题中的 (    ) 决策。", options: ["最大化或最小化", "求平均值", "分类汇总", "排序"], answer: "最大化或最小化", point: "模型功能", explanation: "利用极值点寻找最优解。" }
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
        let adviceHTML = `<div class='mb-4 p-4 ${score >= 80 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'} rounded-lg font-bold'>${score === 100 ? '抛物线之王！二次函数已完全掌握。' : '二次函数是数学的重难点，建议重点突破数形结合思想。'}</div>`;
        if (wrongPoints.length > 0) {
            adviceHTML += "<h4 class='font-bold text-slate-800 mb-2'>📊 靶向复习策略</h4><table class='min-w-full text-sm text-left text-slate-500'><tbody>";
            [...new Set(wrongPoints)].forEach(point => {
                let strategy = "回归课本定义与例题。";
                if (point.includes("参数")) strategy = "⚠️ 秘籍：$a$ 定开口，$c$ 定截距，$b$ 与 $a$ 联手定中轴。";
                else if (point.includes("平移")) strategy = "💡 口诀：左加右减括号内（$h$），上加下减括号外（$k$）。";
                else if (point.includes("最值")) strategy = "🔍 关键：先找对称轴，再看开口方向；注意区间定义域限制。";
                else if (point.includes("建模")) strategy = "🚀 技巧：找准自变量和因变量，利用顶点或交点信息设方程。";
                adviceHTML += `<tr class='border-b'><td class='py-2 font-medium text-slate-900'>${point}</td><td class='py-2'>${strategy}</td></tr>`;
            });
            adviceHTML += "</tbody></table>";
        }
        return adviceHTML;
    }
};

window.AppLibrary = window.AppLibrary || {};
window.AppLibrary.Chapter10Generator = Chapter10_Generator;