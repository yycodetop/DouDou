/**
 * 第九章：函数与一次函数全集 (50题整合版)
 * 包含：函数概念、表示法、一次函数性质、待定系数法、实际建模
 */

const Chapter9_Generator = {
    info: {
        id: "ch9",
        title: "第九章 函数与一次函数",
        description: "50道核心特训：从函数的定义判定到一次函数的斜率规律，全方位打通数形结合思维",
        icon: "fa-solid fa-chart-line"
    },

    sections: {
        "func_concepts": "9.1 函数的概念与定义",
        "func_representations": "9.2 函数的表示方法",
        "linear_basics": "9.3 一次函数图象与性质",
        "linear_solving": "9.4 解析式的求解(待定系数法)",
        "linear_apps": "9.5 一次函数实际应用模型"
    },

    shuffleOptions: function(options) {
        return [...options].sort(() => Math.random() - 0.5);
    },

    database: {
        // --- 7.1 函数的概念与定义 (10题) ---
        func_concepts: [
            { question: "在圆的周长公式 $C = 2\\pi r$ 中，变量是 (    )", options: ["$C$ 和 $r$", "$C, \\pi, r$", "$2$ 和 $\\pi$", "只有 $r$"], answer: "$C$ 和 $r$", point: "变量与常量", explanation: "数值发生变化的量是变量。2 和 $\\pi$ 是确定的常数。" },
            { question: "判断 $y$ 是 $x$ 的函数的关键特征是 (    )", options: ["对于每一个确定的 $x$，有唯一确定的 $y$ 对应", "$x$ 和 $y$ 必须成比例", "$x$ 增大时 $y$ 必须也增大", "图象必须是一条直线"], answer: "对于每一个确定的 $x$，有唯一确定的 $y$ 对应", point: "函数定义判定", explanation: "这是函数的核心定义：对应的唯一性。" },
            { question: "函数 $y = \\frac{1}{x-3}$ 中，自变量 $x$ 的取值范围是 (    )", options: ["$x \\ne 3$", "$x > 3$", "$x < 3$", "全体实数"], answer: "$x \\ne 3$", point: "分式取值范围", explanation: "分母不能为 0，即 $x-3 \\ne 0 \\Rightarrow x \\ne 3$。" },
            { question: "函数 $y = \\sqrt{x-2}$ 中，自变量 $x$ 的取值范围是 (    )", options: ["$x \\ge 2$", "$x > 2$", "$x \\ne 2$", "$x \\le 2$"], answer: "$x \\ge 2$", point: "根式取值范围", explanation: "二次根式被开方数非负：$x-2 \\ge 0 \\Rightarrow x \\ge 2$。" },
            { question: "若 $y = 3x - 2$，当 $x = 2$ 时，对应的函数值 $y$ 为 (    )", options: ["4", "8", "6", "2"], answer: "4", point: "函数值计算", explanation: "$y = 3(2) - 2 = 6 - 2 = 4$。" },
            { question: "下列图象中，不能表示 $y$ 是 $x$ 的函数的是 (    )", options: ["一个完整的圆", "一条斜直线", "抛物线", "水平线"], answer: "一个完整的圆", point: "垂直线判定法", explanation: "圆上部分 $x$ 对应两个 $y$ 值，不符合函数定义的唯一性。" },
            { question: "函数 $y = \\frac{\\sqrt{x+1}}{x}$ 中，自变量 $x$ 的范围是 (    )", options: ["$x \\ge -1$ 且 $x \\ne 0$", "$x > -1$", "$x \\ne 0$", "$x \\ge -1$"], answer: "$x \\ge -1$ 且 $x \\ne 0$", point: "复合范围", explanation: "需满足 $x+1 \\ge 0$ 且 $x \\ne 0$。" },
            { question: "已知 $f(x) = x^2 + 1$，则 $f(-1) =$ (    )", options: ["2", "0", "-2", "1"], answer: "2", point: "负数函数值", explanation: "$(-1)^2 + 1 = 1 + 1 = 2$。" },
            { question: "某人以匀速 $v$ 行走，路程 $s$ 与时间 $t$ 的关系中，常量是 (    )", options: ["速度 $v$", "$s$ 和 $t$", "时间 $t$", "路程 $s$"], answer: "速度 $v$", point: "常量识别", explanation: "题目明确“匀速”，说明速度保持不变。" },
            { question: "若 $y$ 是 $x$ 的函数，则 $x$ 被称为 (    )", options: ["自变量", "因变量", "常量", "系数"], answer: "自变量", point: "术语理解", explanation: "$x$ 是主动变化的输入量，称为自变量。" }
        ],

        // --- 7.2 函数的表示方法 (10题) ---
        func_representations: [
            { question: "用数学公式来表示函数关系的方法叫做 (    )", options: ["解析法", "列表法", "图象法", "描述法"], answer: "解析法", point: "解析法定义", explanation: "使用代数式表达变量关系的手段。" },
            { question: "列表法表示函数的优点是 (    )", options: ["能直接得到某些对应的具体值", "能反映整体趋势", "能概括无限个点", "便于理论推导"], answer: "能直接得到某些对应的具体值", point: "列表法优点", explanation: "列表法最直观，查表即得值。" },
            { question: "图象法表示函数最显著的特征是 (    )", options: ["直观展示变化趋势", "数值计算精确", "表达简便", "便于计算机处理"], answer: "直观展示变化趋势", point: "图象法优点", explanation: "趋势（升、降、平）一目了然。" },
            { question: "已知 $x$ 与 $y$ 的关系如下表，其解析式可能是 (    )\n$x$: 1, 2, 3\n$y$: 2, 4, 6", options: ["$y = 2x$", "$y = x+1$", "$y = x^2$", "$y = 2/x$"], answer: "$y = 2x$", point: "表转解析式", explanation: "观察规律：$y$ 始终是 $x$ 的 2 倍。" },
            { question: "在坐标系中，表示函数关系的图形称为函数的 (    )", options: ["图象", "轨迹", "坐标", "映射"], answer: "图象", point: "图象定义", explanation: "所有满足解析式的点 $(x, y)$ 构成的图形。" },
            { question: "函数 $y = x + 1$ 的图象是一条 (    )", options: ["直线", "射线", "曲线", "圆"], answer: "直线", point: "图象识别", explanation: "一次函数的图象均为直线。" },
            { question: "温度计显示的气温随时间变化的曲线，这种表示法属于 (    )", options: ["图象法", "解析法", "列表法", "模拟法"], answer: "图象法", point: "实际案例", explanation: "曲线是气温随时间变化的几何轨迹。" },
            { question: "购买单价为 3 元的笔记本 $x$ 本，总价 $y$ 元。这体现了哪种表示法？ (    )", options: ["解析法", "图象法", "列表法", "以上都不是"], answer: "解析法", point: "实际建模", explanation: "建立 $y = 3x$ 的数学模型过程。" },
            { question: "若函数图象经过点 $(1, 2)$，说明 (    )", options: ["当 $x=1$ 时，$y=2$", "该点不符合解析式", "该点是原点", "$x+y=1$"], answer: "当 $x=1$ 时，$y=2$", point: "点与图象关系", explanation: "图象上的点坐标必满足对应的函数解析式。" },
            { question: "一次函数 $y = x$ 的图象经过第 (    ) 象限。", options: ["一、三", "二、四", "一、二", "三、四"], answer: "一、三", point: "象限分布", explanation: "横纵坐标始终相同，且过原点。" }
        ],

        // --- 7.3 一次函数图象与性质 (10题) ---
        linear_basics: [
            { question: "一次函数 $y = kx + b$ 的前提条件是 (    )", options: ["$k \\ne 0$", "$b \\ne 0$", "$k > 0$", "$a, b, c$ 均为 0"], answer: "$k \\ne 0$", point: "定义约束", explanation: "若 $k=0$，则函数退化为常数函数，不再是“一次”的。" },
            { question: "正比例函数 $y = kx$ 的图象特征是 (    )", options: ["必过原点", "不经过原点", "平行于 $x$ 轴", "是一条曲线"], answer: "必过原点", point: "正比例特征", explanation: "当 $b=0$ 时，当 $x=0$ 则 $y=0$。" },
            { question: "在 $y = 2x - 3$ 中，斜率 $k$ 和截距 $b$ 分别是 (    )", options: ["$2, -3$", "$2, 3$", "$-3, 2$", "$-2, 3$"], answer: "$2, -3$", point: "系数识别", explanation: "$k$ 是 $x$ 的系数，$b$ 是常数项。" },
            { question: "若斜率 $k > 0$，则函数 $y = kx + b$ 的图象趋势是 (    )", options: ["随 $x$ 增大而增大", "随 $x$ 增大而减小", "水平直线", "无法确定"], answer: "随 $x$ 增大而增大", point: "单调性规律", explanation: "$k$ 的正负决定了直线的倾斜方向。" },
            { question: "一次函数 $y = -x + 1$ 的图象不经过第 (    ) 象限。", options: ["第三", "第一", "第二", "第四"], answer: "第三", point: "象限判定", explanation: "$k<0$ 过二四，$b>0$ 向上平移，故不经第三象限。" },
            { question: "斜率 $k$ 的含义是：每当 $x$ 增加 1，$y$ 就增加 (    )", options: ["$k$", "$1$", "$b$", "$kx$"], answer: "$k$", point: "斜率步长意义", explanation: "$\\Delta y = k \\cdot \\Delta x$，当 $\\Delta x=1$ 时 $\\Delta y=k$。" },
            { question: "若两直线平行，则它们的 (    ) 一定相同。", options: ["斜率 $k$", "截距 $b$", "交点", "解析式"], answer: "斜率 $k$", point: "平行性质", explanation: "倾斜程度一致即平行。" },
            { question: "函数 $y = 5x$ 经过 $x$ 增加 2 后，$y$ 增加了 (    )", options: ["10", "5", "2", "7"], answer: "10", point: "斜率应用", explanation: "$2 \\times 5 = 10$。" },
            { question: "绘制 $y = kx + b$ 图象最快的方法是 (    )", options: ["两点法", "描出 10 个点", "计算斜率", "看象限"], answer: "两点法", point: "绘图技巧", explanation: "两点确定一条直线，通常取与轴的交点。" },
            { question: "直线 $y = 3x - 6$ 与 $x$ 轴的交点坐标是 (    )", options: ["$(2, 0)$", "$(0, -6)$", "$(3, 0)$", "$(-2, 0)$"], answer: "$(2, 0)$", point: "轴交点", explanation: "令 $y=0 \\Rightarrow 3x=6 \\Rightarrow x=2$。" }
        ],

        // --- 7.4 解析式的求解(待定系数法) (10题) ---
        linear_solving: [
            { question: "已知一次函数过 $(1, 3)$ 和 $(2, 5)$，求 $k$ 的值 (    )", options: ["2", "1", "3", "0.5"], answer: "2", point: "斜率计算", explanation: "$k = (5-3)/(2-1) = 2$。" },
            { question: "经过点 $(0, 2)$ 且斜率为 3 的直线解析式为 (    )", options: ["$y = 3x + 2$", "$y = 2x + 3$", "$y = 3x - 2$", "$y = -3x + 2$"], answer: "$y = 3x + 2$", point: "点斜式应用", explanation: "$b$ 就是 $y$ 轴截距 2。" },
            { question: "待定系数法的基本步骤中，第一步通常是 (    )", options: ["设解析式 $y = kx + b$", "代入已知点", "解方程组", "写出答案"], answer: "设解析式 $y = kx + b$", point: "算法步骤", explanation: "先确定函数类型并设出含参表达式。" },
            { question: "已知直线与 $y=x+1$ 平行，且过原点，解析式为 (    )", options: ["$y = x$", "$y = -x$", "$y = x+1$", "$y = 2x$"], answer: "$y = x$", point: "平行线建模", explanation: "平行则 $k=1$，过原点则 $b=0$。" },
            { question: "若三点 $(1, 2), (2, 4), (3, m)$ 在同一直线上，则 $m = $ (    )", options: ["6", "5", "8", "4"], answer: "6", point: "三点共线", explanation: "斜率相等：$(4-2)/(2-1) = (m-4)/(3-2) \\Rightarrow 2 = m-4 \\Rightarrow m=6$。" },
            { question: "直线 $y = 2x - 4$ 向上平移 5 个单位后的解析式是 (    )", options: ["$y = 2x + 1$", "$y = 2x - 9$", "$y = 2(x+5)-4$", "$y = 7x - 4$"], answer: "$y = 2x + 1$", point: "图象平移", explanation: "上加下减：$-4 + 5 = 1$。" },
            { question: "已知 $f(x)$ 是一次函数，$f(1)=2, f(0)=-1$，则 $f(2) = $ (    )", options: ["5", "3", "4", "6"], answer: "5", point: "值预测", explanation: "$k = (2 - -1)/1 = 3$。$f(2) = f(1) + 3 = 2 + 3 = 5$。" },
            { question: "若直线经过第一、二、三象限，则 (    )", options: ["$k>0, b>0$", "$k>0, b<0$", "$k<0, b>0$", "$k<0, b<0$"], answer: "$k>0, b>0$", point: "系数逆推", explanation: "过一三则 $k>0$，过二（上移）则 $b>0$。" },
            { question: "已知 $y$ 与 $x$ 成正比例，当 $x=3$ 时 $y=6$，则解析式为 (    )", options: ["$y = 2x$", "$y = x+3$", "$y = 1/2x$", "$y = 6x$"], answer: "$y = 2x$", point: "正比例求解", explanation: "$6 = 3k \\Rightarrow k=2$。" },
            { question: "待定系数法解方程组时，如果有两个点，通常得到的是关于 (    ) 的二元一次方程组。", options: ["$k$ 和 $b$", "$x$ 和 $y$", "$x$ 和 $k$", "$y$ 和 $b$"], answer: "$k$ 和 $b$", point: "求解本质", explanation: "未知数是我们待定的系数 $k$ 和 $b$。" }
        ],

        // --- 7.5 一次函数实际应用模型 (10题) ---
        linear_apps: [
            { question: "汽车油箱有油 50L，行驶中每小时耗油 5L，剩余油量 $y$ 与时间 $t$ 的关系是 (    )", options: ["$y = 50 - 5t$", "$y = 50 + 5t$", "$y = 5t$", "$y = 50/t$"], answer: "$y = 50 - 5t$", point: "耗油模型", explanation: "总量减去消耗量。斜率 -5 代表下降速率。" },
            { question: "华氏度 $F$ 与摄氏度 $C$ 的关系是 $F = 1.8C + 32$。当 $C = 10$ 时，$F = $ (    )", options: ["50", "42", "18", "60"], answer: "50", point: "温度转换", explanation: "$1.8 \\times 10 + 32 = 18 + 32 = 50$。" },
            { question: "某工厂生产 A 产品，固定成本 2000 元，每件变动成本 10 元。总成本 $y$ 与产量 $x$ 的关系是 (    )", options: ["$y = 10x + 2000$", "$y = 2000x + 10$", "$y = 2010x$", "$y = 10x$"], answer: "$y = 10x + 2000$", point: "成本模型", explanation: "固定成本是截距，单价是斜率。" },
            { question: "一棵树苗高 50cm，每年长高 10cm。$n$ 年后的高度 $h$ 为 (    )", options: ["$h = 10n + 50$", "$h = 50n + 10$", "$h = 60n$", "$h = 10(n+50)$"], answer: "$h = 10n + 50$", point: "生长模型", explanation: "初始高度 + (增长率 $\times$ 时间)。" },
            { question: "手机套餐：月租 10 元，包含 100 分钟，超出部分 0.2 元/分。若通话 $x > 100$，费用 $y$ 为 (    )", options: ["$y = 0.2(x-100) + 10$", "$y = 0.2x + 10$", "$y = 0.2x$", "$y = 10.2x$"], answer: "$y = 0.2(x-100) + 10$", point: "分段计费模型", explanation: "基础费 + 超额费。" },
            { question: "水池排水：原有 30$m^3$，每分钟排 2$m^3$。排完水需要 (    ) 分钟。", options: ["15", "30", "60", "10"], answer: "15", point: "模型截止点", explanation: "令 $30 - 2t = 0 \\Rightarrow t = 15$。" },
            { question: "租车方案 A：300 元/天；方案 B：200 元/天 + 0.5 元/公里。跑 100 公里选哪个？ (    )", options: ["方案 B 更省钱", "方案 A 更省钱", "一样多", "无法判断"], answer: "方案 B 更省钱", point: "方案决策", explanation: "B: $200 + 0.5(100) = 250 < 300$。" },
            { question: "在速度 $v$ 时间 $t$ 距离 $s$ 的关系中，若 $s$ 固定，则 $v$ 与 $t$ (    ) 一次函数。", options: ["不是", "是", "可能是", "一定是"], answer: "不是", options: ["不是", "是", "正比例", "一次"], answer: "不是", point: "反比例对比", explanation: "$v = s/t$ 是反比例函数，图象是双曲线。" },
            { question: "某种弹簧挂重 $x$ kg，长度为 $y$ cm，关系为 $y = 0.5x + 10$。0.5 的物理意义是 (    )", options: ["每挂 1kg 伸长 0.5cm", "弹簧原长", "最大承重", "挂了 0.5kg"], answer: "每挂 1kg 伸长 0.5cm", point: "斜率物理意义", explanation: "斜率代表单位输入引起的输出变化量。" },
            { question: "一次函数在解决实际问题时，自变量的取值范围通常受 (    ) 限制。", options: ["实际物理意义", "解析式本身", "任意实数", "计算方便"], answer: "实际物理意义", point: "定义域应用", explanation: "例如时间、长度、件数不能为负数。" }
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
        let adviceHTML = `<div class='mb-4 p-4 ${score >= 80 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'} rounded-lg font-bold'>${score === 100 ? '函数之王！你已完全掌握初中函数的核心精髓。' : '函数是数形结合的桥梁，建议多在坐标系中画图辅助理解。'}</div>`;
        if (wrongPoints.length > 0) {
            adviceHTML += "<h4 class='font-bold text-slate-800 mb-2'>📊 重点突破建议</h4><table class='min-w-full text-sm text-left text-slate-500'><tbody>";
            [...new Set(wrongPoints)].forEach(point => {
                let strategy = "回归课本，梳理基础定义。";
                if (point.includes("判定")) strategy = "💡 秘诀：画一条竖线，如果与图形有两个交点，那就不是函数！";
                else if (point.includes("斜率")) strategy = "⚠️ 关键：$k$ 决定升降速度，也就是‘每增加 1 变多少’。";
                else if (point.includes("待定系数")) strategy = "🔍 模板：设 $y=kx+b$ $\\to$ 代入两点 $\\to$ 解二元一次方程组。";
                else if (point.includes("模型")) strategy = "🚀 建模：找准不变的初始量（截距）和变化的速率（斜率）。";
                adviceHTML += `<tr class='border-b'><td class='py-2 font-medium text-slate-900'>${point}</td><td class='py-2'>${strategy}</td></tr>`;
            });
            adviceHTML += "</tbody></table>";
        }
        return adviceHTML;
    }
};

window.AppLibrary = window.AppLibrary || {};
window.AppLibrary.Chapter9Generator = Chapter9_Generator;