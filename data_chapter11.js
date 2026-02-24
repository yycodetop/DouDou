/**
 * 第十一章：反比例函数专题特训 (60题完整版)
 * 模块划分：定义与k、图象理解、函数性质、渐近线、线面交点、实际综合应用
 */

const Chapter11_Generator = {
    info: {
        id: "ch11",
        title: "第十一章 反比例函数",
        description: "60道特训题：掌握双曲线的象限分布、k的几何意义（面积模型）、渐近线规律及物理背景下的反比例建模",
        icon: "fa-solid fa-chart-area"
    },

    sections: {
        "inv_def_k": "11.1 定义与系数 k 的作用",
        "inv_graph": "11.2 图象绘制与理解",
        "inv_props": "11.3 反比例函数的性质",
        "inv_asymptote": "11.4 渐近线特征分析",
        "inv_intersect": "11.5 与一次函数的交点",
        "inv_comprehensive": "11.6 实际应用与物理建模"
    },

    shuffleOptions: function(options) {
        return [...options].sort(() => Math.random() - 0.5);
    },

    database: {
        // --- 11.1 定义与系数 k 的作用 (10题) ---
        inv_def_k: [
            { question: "下列函数中，属于反比例函数的是 (    )", options: ["$y = 2/x$", "$y = x/2$", "$y = 2x$", "$y = x^2$"], answer: "$y = 2/x$", point: "反比例函数定义", explanation: "反比例函数标准形式为 $y = k/x (k \\ne 0)$。" },
            { question: "若 $y = (k-1)x^{k^2-2}$ 是反比例函数，则 $k$ 的值为 (    )", options: ["-1", "1", "$\\pm 1$", "0"], answer: "-1", point: "定义参数判定", explanation: "指数 $k^2-2 = -1 \\Rightarrow k^2 = 1 \\Rightarrow k = \\pm 1$；且系数 $k-1 \\ne 0$，故只能取 -1。" },
            { question: "反比例函数 $y = k/x$ 中，$k$ 被称为 (    )", options: ["反比例系数", "比例常数", "斜率", "截距"], answer: "反比例系数", point: "术语理解", explanation: "这是描述反比例关系强度的核心常数。" },
            { question: "已知反比例函数经过点 $(2, 3)$，则 $k$ 的值为 (    )", options: ["6", "1.5", "5", "-6"], answer: "6", point: "求k值", explanation: "$k = xy = 2 \\times 3 = 6$。" },
            { question: "若点 $P(x, y)$ 在 $y = -4/x$ 上，则 $xy$ 的值恒为 (    )", options: ["-4", "4", "0", "无法确定"], answer: "-4", point: "k的代数意义", explanation: "$xy = k$ 是反比例函数的变形形式。" },
            { question: "在反比例函数 $y = k/x$ 中，自变量 $x$ 的取值范围是 (    )", options: ["$x \\ne 0$", "$x > 0$", "全体实数", "$x < 0$"], answer: "$x \\ne 0$", point: "定义域", explanation: "分式分母不能为 0。" },
            { question: "从 $y = k/x$ 图象上任一点向两轴作垂线，所得矩形的面积等于 (    )", options: ["$|k|$", "$k$", "$2k$", "$k^2$"], answer: "$|k|$", point: "k的几何意义", explanation: "面积 $S = |x| \\cdot |y| = |xy| = |k|$。" },
            { question: "下列等式中，能表示 $y$ 是 $x$ 的反比例函数的是 (    )", options: ["$xy = 5$", "$y = 5x^{-1}$", "$y = 5/x$", "以上全对"], answer: "以上全对", point: "表现形式", explanation: "这三种写法在数学本质上是完全等价的。" },
            { question: "已知 $y$ 与 $x$ 成反比例，当 $x=3$ 时 $y=4$。当 $x=2$ 时 $y=$ (    )", options: ["6", "12", "8", "3"], answer: "6", point: "函数值计算", explanation: "$k = 12$，当 $x=2$ 时，$y = 12/2 = 6$。" },
            { question: "若 $k < 0$，反比例函数 $y = k/x$ 的图象位于 (    )", options: ["第二、四象限", "第一、三象限", "第一、二象限", "第三、四象限"], answer: "第二、四象限", point: "象限分布", explanation: "$k$ 的符号决定了分支所在的象限。" }
        ],

        // --- 11.2 图象绘制与理解 (10题) ---
        inv_graph: [
            { question: "反比例函数的图象由 (    ) 条分支组成。", options: ["2", "1", "4", "无数"], answer: "2", point: "图象组成", explanation: "这种图形在数学上被称为双曲线。" },
            { question: "绘制反比例函数图象的第一步通常是 (    )", options: ["列表", "描点", "找渐近线", "连线"], answer: "列表", point: "作图步骤", explanation: "先通过计算获得足够的坐标点。" },
            { question: "在列表取点时，为了使图象更准确，取值应 (    )", options: ["尽量多且分布均匀", "只取正数", "只取整数", "取 0"], answer: "尽量多且分布均匀", point: "作图技巧", explanation: "特别是在接近坐标轴（$x$ 很小或很大）时多取点。" },
            { question: "下列关于 $y = 2/x$ 图象的描述，正确的是 (    )", options: ["开口方向向上", "关于原点对称", "关于 $x$ 轴对称", "是一条直线"], answer: "关于原点对称", point: "对称性特征", explanation: "反比例函数是奇函数，图象关于原点成中心对称。" },
            { question: "若 $|k|$ 越大，反比例函数的图象分支 (    )", options: ["越远离原点", "越靠近原点", "越陡峭", "越平缓"], answer: "越远离原点", point: "k的大小对图象的影响", explanation: "$k$ 变大意味着相同 $x$ 下 $y$ 的绝对值变大，图形外扩。" },
            { question: "反比例函数的图象 (    ) 与坐标轴相交。", options: ["一定不", "一定", "可能", "只有一个交点"], answer: "一定不", point: "位置限制", explanation: "因为分母和分式值均不能为 0。" },
            { question: "已知 $k > 0$，在每个象限内，图象呈现 (    ) 趋势。", options: ["下降", "上升", "水平", "垂直"], answer: "下降", point: "单调性直观", explanation: "从左往右看，$y$ 随 $x$ 增大而减小。" },
            { question: "抛物线是二次函数图象，那么双曲线是 (    ) 函数图象。", options: ["反比例", "一次", "正比例", "分式"], answer: "反比例", point: "图形命名", explanation: "名称对应关系。" },
            { question: "关于 $y = 1/x$ 和 $y = -1/x$ 图象的关系，说法正确的是 (    )", options: ["关于 $x$ 轴对称", "关于 $y$ 轴对称", "关于原点对称", "A 和 B 都对"], answer: "A 和 B 都对", point: "图象变换", explanation: "变号导致在任意一轴上的翻转。" },
            { question: "反比例函数图象是 (    ) 图形。", options: ["轴对称且中心对称", "仅轴对称", "仅中心对称", "不规则"], answer: "轴对称且中心对称", point: "对称性综合", explanation: "关于原点中心对称，关于直线 $y=x$ 和 $y=-x$ 轴对称。" }
        ],

        // --- 11.3 反比例函数的性质 (10题) ---
        inv_props: [
            { question: "当 $k > 0$ 时，函数 $y = k/x$ 的图象在 (    )", options: ["第一、三象限", "第二、四象限", "第一、二象限", "第三、四象限"], answer: "第一、三象限", point: "象限判定", explanation: "同号得正，一、三象限点的横纵坐标同号。" },
            { question: "当 $k < 0$ 时，在每个象限内，$y$ 随 $x$ 的增大而 (    )", options: ["增大", "减小", "不变", "无法确定"], answer: "增大", point: "增减性", explanation: "$k$ 为负时，随着 $x$ 增大，绝对值减小但数值增大（负数逻辑）。" },
            { question: "若点 $A(x_1, y_1)$ 和 $B(x_2, y_2)$ 都在 $y = 3/x$ 上，且 $0 < x_1 < x_2$，则 (    )", options: ["$y_1 > y_2$", "$y_1 < y_2$", "$y_1 = y_2$", "无法比较"], answer: "$y_1 > y_2$", point: "单调性比较", explanation: "在一象限内，$y$ 随 $x$ 增大而减小。" },
            { question: "下列说法正确的是 (    )", options: ["反比例函数在整个定义域内是减函数", "反比例函数在每个象限内是单调的", "反比例函数一定经过第一象限", "反比例函数没有对称轴"], answer: "反比例函数在每个象限内是单调的", point: "性质严谨性", explanation: "不能说“在定义域内”，因为 $x=0$ 处断开了。" },
            { question: "若点 $(-1, y_1)$ 和 $(2, y_2)$ 在 $y = 1/x$ 上，则 $y_1$ 与 $y_2$ 的大小关系是 (    )", options: ["$y_1 < y_2$", "$y_1 > y_2$", "$y_1 = y_2$", "不确定"], answer: "$y_1 < y_2$", point: "跨象限比较", explanation: "$y_1 = -1$（负），$y_2 = 0.5$（正）。" },
            { question: "反比例函数 $y = (k-2)/x$ 的图象在二、四象限，则 $k$ 的范围是 (    )", options: ["$k < 2$", "$k > 2$", "$k \ne 2$", "$k = 0$"], answer: "$k < 2$", point: "参数逆推", explanation: "系数 $k-2 < 0 \\Rightarrow k < 2$。" },
            { question: "反比例函数图象关于直线 (    ) 对称。", options: ["$y = x$", "$x = 0$", "$y = 1$", "$x + y = 1$"], answer: "$y = x$", point: "轴对称性", explanation: "$x, y$ 互换后方程 $yx = k$ 不变。" },
            { question: "若 $k > 0$，随着 $|x|$ 趋近于无穷大，$|y|$ 趋近于 (    )", options: ["0", "无穷大", "k", "1"], answer: "0", point: "极限趋势", explanation: "分母越大，分式值越小。" },
            { question: "对于 $y = 5/x$，若 $x$ 变为原来的 2 倍，则 $y$ 变为原来的 (    )", options: ["1/2", "2 倍", "不变", "1/4"], answer: "1/2", point: "比例性质", explanation: "这是反比例关系的本质特征。" },
            { question: "若反比例函数图象不经过点 $(-2, 3)$，则其 $k$ 值一定不是 (    )", options: ["-6", "6", "-1.5", "1"], answer: "-6", point: "点线关系", explanation: "点在图象上要求 $xy = k$。" }
        ],

        // --- 11.4 渐近线特征分析 (10题) ---
        inv_asymptote: [
            { question: "反比例函数的渐近线是 (    )", options: ["$x$ 轴和 $y$ 轴", "直线 $y = x$", "原点", "不存在渐近线"], answer: "$x$ 轴和 $y$ 轴", point: "渐近线定义", explanation: "图象无限靠近但永不相交的直线。" },
            { question: "“渐近”的意思在数学上是指图象与直线的距离 (    )", options: ["无限趋近于 0", "保持恒定", "逐渐变大", "忽大忽小"], answer: "无限趋近于 0", point: "数学术语", explanation: "描述极限靠近的动态过程。" },
            { question: "因为反比例函数有渐近线，所以它的图象 (    )", options: ["不经过原点", "不与坐标轴交", "具有两个分支", "以上全对"], answer: "以上全对", point: "性质推论", explanation: "这些特征均源于渐近线的限制。" },
            { question: "随着 $x$ 的绝对值越来越小，图象会 (    )", options: ["无限靠近 $y$ 轴", "无限靠近 $x$ 轴", "远离原点", "变成直线"], answer: "无限靠近 $y$ 轴", point: "垂直方向渐近", explanation: "当 $x \to 0$ 时，$y \to \infty$。" },
            { question: "下列函数中，没有渐近线的是 (    )", options: ["$y = 2x - 1$", "$y = 3/x$", "$y = 1/(x-1)$", "$y = (2x+1)/x$"], answer: "$y = 2x - 1$", point: "对比分析", explanation: "多项式函数（一次、二次）通常没有渐近线。" },
            { question: "渐近线在实际画图中起到的主要作用是 (    )", options: ["确定图象的边界和走势", "标出坐标点", "计算 $k$ 值", "美化图形"], answer: "确定图象的边界和走势", point: "绘图意义", explanation: "作为图象延伸的“轨道”。" },
            { question: "若反比例函数图象的一支向右延伸时离 $x$ 轴越来越近，说明它 (    )", options: ["以 $x$ 轴为渐近线", "以 $y$ 轴为渐近线", "开口向上", "正在穿过坐标轴"], answer: "以 $x$ 轴为渐近线", point: "水平方向渐近", explanation: "这是渐近线的直观动态描述。" },
            { question: "方程 $x = 0$ 是哪条渐近线的代数表示？ (    )", options: ["$y$ 轴", "$x$ 轴", "原点", "直线 $y = 1$"], answer: "$y$ 轴", point: "坐标轴方程", explanation: "$y$ 轴上所有点的横坐标均为 0。" },
            { question: "反比例函数 $y = 1/x$ 与它的渐近线的交点个数为 (    )", options: ["0", "1", "2", "无数"], answer: "0", point: "严格定义", explanation: "“渐近”排除“相交”。" },
            { question: "在物理实验中，当压力 $F$ 恒定时，压强 $P$ 与受力面积 $S$ 成反比，则 $P-S$ 图象 (    )", options: ["以坐标轴为渐近线", "是一条过原点直线", "是一个圆", "是抛物线分支"], answer: "以坐标轴为渐近线", point: "实际关联", explanation: "物理模型中 $P = F/S$ 符合反比例函数特征。" }
        ],

        // --- 11.5 与一次函数的交点 (10题) ---
        inv_intersect: [
            { question: "求反比例函数 $y = k/x$ 与一次函数 $y = ax+b$ 的交点，需要解 (    )", options: ["方程组", "不等式", "一元一次方程", "直接观察"], answer: "方程组", point: "交点本质", explanation: "联立两个解析式求解。" },
            { question: "反比例函数与一次函数在坐标系中最多有 (    ) 个交点。", options: ["2", "1", "0", "无数"], answer: "2", point: "交点个数", explanation: "联立后通常化为一元二次方程。" },
            { question: "若反比例函数 $y = 1/x$ 与直线 $y = x$ 相交，交点坐标为 (    )", options: ["$(1,1)$ 和 $(-1,-1)$", "$(1,1)$", "$(-1,-1)$", "$(0,0)$"], answer: "$(1,1)$ 和 $(-1,-1)$", point: "基本计算", explanation: "$x = 1/x \Rightarrow x^2 = 1$。" },
            { question: "若直线经过原点，且与反比例函数相交，则两个交点 (    )", options: ["关于原点对称", "关于 $x$ 轴对称", "关于 $y$ 轴对称", "重合"], answer: "关于原点对称", point: "对称性应用", explanation: "直线与双曲线均关于原点对称，其交点亦然。" },
            { question: "若一次函数 $y = kx+b$ 与反比例函数无交点，说明联立方程 (    )", options: ["无实数根", "有相等根", "有无数根", "计算错了"], answer: "无实数根", point: "判别式关联", explanation: "代数无解对应几何无交点。" },
            { question: "已知交点为 $(1, 2)$，则这两个函数的解析式可能是 (    )", options: ["$y = 2/x$ 和 $y = x+1$", "$y = 1/x$ 和 $y = 2x$", "$y = 2/x$ 和 $y = 2x$", "A 和 C"], answer: "A 和 C", point: "代入验证", explanation: "点坐标必须同时满足两个解析式。" },
            { question: "直线 $y = -1$ 与反比例函数 $y = 2/x$ 的交点在第 (    ) 象限。", options: ["三", "一", "二", "四"], answer: "三", point: "象限判定综合", explanation: "$y = -1 \Rightarrow x = -2$，点为 $(-2, -1)$。" },
            { question: "若 $k > 0, b > 0$，直线 $y = x+b$ 与 $y = k/x$ (    ) 有交点。", options: ["一定", "可能", "一定不", "只有一个"], answer: "一定", point: "位置规律", explanation: "一三象限的分支必然会被斜率为正且向上平移的直线截断。" },
            { question: "解方程组 $\begin{cases} y = 4/x \\ y = x \end{cases}$ 得 $x^2 = 4$，这步变形体现了 (    )", options: ["代入消元法", "加减消元法", "换元法", "降次法"], answer: "代入消元法", point: "解题技巧", explanation: "将 $y$ 替换为关于 $x$ 的式子。" },
            { question: "观察图象，若直线在双曲线上方，意味着 (    )", options: ["一次函数值大于反比例函数值", "一次函数值更小", "它们相等", "无解"], answer: "一次函数值大于反比例函数值", point: "不等式直观", explanation: "上下位置关系对应函数值的大小关系。" }
        ],

        // --- 11.6 实际应用与物理建模 (10题) ---
        inv_comprehensive: [
            { question: "路程 $s$ 一定时，速度 $v$ 与时间 $t$ 的关系是 (    )", options: ["$v = s/t$", "$v = st$", "$v = s+t$", "$s = v+t$"], answer: "$v = s/t$", point: "行程模型", explanation: "速度与时间成反比例。" },
            { question: "某工程总量为 1，工人数 $n$ 与完成时间 $T$ 成反比。若 5 人需 10 天，则 10 人需 (    ) 天。", options: ["5", "2", "20", "8"], answer: "5", point: "工程模型", explanation: "$k = 5 \times 10 = 50$，$T = 50/10 = 5$。" },
            { question: "电池放电时，电流 $I$ 与放电时间 $t$ 成反比。已知 $I=2A$ 时 $t=10h$，则 $k$ 的物理意义是 (    )", options: ["总电量（安培小时）", "放电速度", "电池电压", "电阻"], answer: "总电量（安培小时）", point: "物理背景", explanation: "$k = I \cdot t$，单位为 $A \cdot h$，即电池容量。" },
            { question: "面积为 10 的矩形，长 $y$ 与宽 $x$ 的关系是 (    )", options: ["$y = 10/x$", "$y = 10x$", "$y = x+10$", "$x+y=10$"], answer: "$y = 10/x$", point: "几何模型", explanation: "$xy = Area$ 是标准反比例形式。" },
            { question: "压力 $F$ 恒定时，压强 $P$ 与受力面积 $S$ 的关系是 (    )", options: ["$P = F/S$", "$P = FS$", "$P = S/F$", "$F = P/S$"], answer: "$P = F/S$", point: "物理压强模型", explanation: "经典反比例应用。" },
            { question: "一辆货车运输 60 吨物资，次数 $n$ 与单次运量 $m$ 的关系中，$k$ 为 (    )", options: ["60", "1", "30", "无法确定"], answer: "60", point: "总量确定", explanation: "$nm = 60$。" },
            { question: "在 $y = k/x$ 的应用中，自变量 $x$ 通常不能取负数，这是因为 (    )", options: ["实际物理量（如时间、面积）通常为正", "计算不方便", "函数性质要求", "没有原因"], answer: "实际物理量（如时间、面积）通常为正", point: "定义域实际意义", explanation: "数学模型必须服务于物理现实。" },
            { question: "若 $y = 100/x$ 表示下载 100MB 文件的速度 $y$ 与时间 $x$ 的关系，要使下载时间缩短一半，速度必须 (    )", options: ["翻倍", "增加 50%", "减少一半", "不变"], answer: "翻倍", point: "变动比例", explanation: "反比例关系的比例特质。" },
            { question: "气体体积 $V$ 与压强 $P$ 成反比（玻意耳定律），图象应在第 (    ) 象限。", options: ["一", "三", "一、三", "二、四"], answer: "一", point: "象限实际筛选", explanation: "压强和体积均为正值。" },
            { question: "解决反比例应用题的核心步骤是 (    )", options: ["求出常数 k", "画出图象", "列表", "求导"], answer: "求出常数 k", point: "建模核心", explanation: "确定了 $k$ 就确定了变量间的精确联动规律。" }
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
        let adviceHTML = `<div class='mb-4 p-4 ${score >= 80 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'} rounded-lg font-bold'>${score === 100 ? '双曲线专家！你已掌握反比例函数的全部精髓。' : '反比例函数侧重考察比例平衡，建议多结合物理模型理解。'}</div>`;
        if (wrongPoints.length > 0) {
            adviceHTML += "<h4 class='font-bold text-slate-800 mb-2'>📊 靶向复习建议</h4><table class='min-w-full text-sm text-left text-slate-500'><tbody>";
            [...new Set(wrongPoints)].forEach(point => {
                let strategy = "回顾课本定义。";
                if (point.includes("定义")) strategy = "⚠️ 关键：掌握 $y=k/x, xy=k, y=kx^{-1}$ 三种变式。";
                else if (point.includes("性质")) strategy = "💡 秘籍：$k>0$ 减，$k<0$ 增；注意跨象限不能直接比较。";
                else if (point.includes("渐近线")) strategy = "🔍 逻辑：记住‘无限靠近、永不相交’。";
                else if (point.includes("面积")) strategy = "🚀 几何：矩形面积恒等于 $|k|$，三角形面积恒等于 $|k|/2$。";
                adviceHTML += `<tr class='border-b'><td class='py-2 font-medium text-slate-900'>${point}</td><td class='py-2'>${strategy}</td></tr>`;
            });
            adviceHTML += "</tbody></table>";
        }
        return adviceHTML;
    }
};

window.AppLibrary = window.AppLibrary || {};
window.AppLibrary.Chapter11Generator = Chapter11_Generator;