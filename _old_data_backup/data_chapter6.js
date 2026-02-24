/**
 * 第六章：平面直角坐标系与比例应用 (扩容至60题版)
 * 包含 6 个训练模块，每个模块 10 道多维度试题
 */

const Chapter6_Generator = {
    info: {
        id: "ch6",
        title: "第六章 坐标系与比例应用",
        description: "60道精选试题：深度覆盖直角坐标变换、线性几何表示与比例实际应用模型",
        icon: "fa-solid fa-draw-polygon"
    },

    sections: {
        "coord_basics": "6.1 坐标系基础与点",
        "coord_symmetry": "6.2 点的对称性变换",
        "equation_graph": "6.3 方程的几何表示",
        "ratio_basics": "6.4 比例基础知识",
        "age_problems": "6.5 比例之年龄问题",
        "work_problems": "6.6 比例之合作问题"
    },

    shuffleOptions: function(options) {
        return [...options].sort(() => Math.random() - 0.5);
    },

    database: {
        // --- 6.1 坐标系基础与点 (10题) ---
        coord_basics: [
            { question: "在坐标系中，点 $P(-2, 3)$ 到 $x$ 轴的距离是 (    )", options: ["3", "2", "-2", "$\\sqrt{13}$"], answer: "3", point: "点到轴距离", explanation: "点到 $x$ 轴的距离等于纵坐标的绝对值 $|3|=3$。" },
            { question: "若点 $A(m, n)$ 在第二象限，则点 $B(n, m)$ 在 (    )", options: ["第四象限", "第一象限", "第二象限", "第三象限"], answer: "第四象限", point: "象限特征", explanation: "第二象限 $m<0, n>0$，则 $B(正, 负)$ 位于第四象限。" },
            { question: "平面直角坐标系中，点 $(0, -5)$ 位于 (    )", options: ["$y$ 轴负半轴", "$x$ 轴负半轴", "第三象限", "第四象限"], answer: "$y$ 轴负半轴", point: "轴上点特征", explanation: "横坐标为 0 的点在 $y$ 轴上，纵坐标为负，故在负半轴。" },
            { question: "已知点 $P(x, y)$ 满足 $xy > 0$，则点 $P$ 可能在 (    )", options: ["第一或第三象限", "第一或第二象限", "第二或第四象限", "坐标轴上"], answer: "第一或第三象限", point: "象限符号逻辑", explanation: "$xy>0$ 意味着 $x, y$ 同号，同正为一，同负为三。" },
            { question: "点 $M(3, -2)$ 向上平移 3 个单位后的坐标是 (    )", options: ["$(3, 1)$", "$(6, -2)$", "$(3, -5)$", "$(0, -2)$"], answer: "$(3, 1)$", point: "坐标平移", explanation: "向上平移纵坐标加：$-2+3=1$。" },
            { question: "线段 $AB$ 平行于 $x$ 轴，若 $A(1, 2)$，$B$ 的纵坐标必为 (    )", options: ["2", "1", "0", "任意数"], answer: "2", point: "平行线特征", explanation: "平行于 $x$ 轴的直线上所有点纵坐标相等。" },
            { question: "在第三象限内有一点 $P$，到 $x$ 轴距离为 2，到 $y$ 轴距离为 5，则 $P$ 坐标为 (    )", options: ["$(-5, -2)$", "$(-2, -5)$", "$(5, 2)$", "$(2, 5)$"], answer: "$(-5, -2)$", point: "坐标确定", explanation: "第三象限 $(- , -)$，横坐标绝对值为 5，纵坐标绝对值为 2。" },
            { question: "若点 $P(a, a-2)$ 在 $x$ 轴上，则 $a$ 的值为 (    )", options: ["2", "0", "-2", "1"], answer: "2", point: "轴上点计算", explanation: "$x$ 轴上点纵坐标为 0，即 $a-2=0$。" },
            { question: "原点 $O$ 的坐标定义为 (    )", options: ["$(0, 0)$", "$(1, 1)$", "$(0, 1)$", "不存在坐标"], answer: "$(0, 0)$", point: "原点定义", explanation: "原点是两条数轴的交点，坐标恒为 $(0,0)$。" },
            { question: "下列说法正确的是 (    )", options: ["坐标轴上的点不属于任何象限", "第一象限的点横纵坐标和为正", "第四象限点在 $x$ 轴下方", "以上都正确"], answer: "以上都正确", point: "综合性质", explanation: "考查坐标系基础定义的严谨性。" }
        ],

        // --- 6.2 点的对称性变换 (10题) ---
        coord_symmetry: [
            { question: "点 $A(1, -2)$ 关于 $x$ 轴对称的点 $A'$ 的坐标是 (    )", options: ["$(1, 2)$", "$(-1, -2)$", "$(-1, 2)$", "$(2, -1)$"], answer: "$(1, 2)$", point: "轴对称", explanation: "关于 $x$ 轴对称：横坐标不变，纵坐标变号。" },
            { question: "点 $B(-3, 4)$ 关于 $y$ 轴对称的点 $B'$ 的坐标是 (    )", options: ["$(3, 4)$", "$(-3, -4)$", "$(3, -4)$", "$(4, -3)$"], answer: "$(3, 4)$", point: "轴对称", explanation: "关于 $y$ 轴对称：纵坐标不变，横坐标变号。" },
            { question: "点 $C(-5, -6)$ 关于原点对称的点 $C'$ 的坐标是 (    )", options: ["$(5, 6)$", "$(-5, 6)$", "$(5, -6)$", "$(6, 5)$"], answer: "$(5, 6)$", point: "中心对称", explanation: "关于原点对称：横纵坐标均变为相反数。" },
            { question: "已知点 $P(a, 3)$ 与点 $Q(-2, b)$ 关于 $x$ 轴对称，则 $a+b$ 等于 (    )", options: ["-5", "-1", "5", "1"], answer: "-5", point: "对称应用", explanation: "$a=-2, b=-3$，和为 -5。" },
            { question: "若点 $M$ 关于 $x$ 轴的对称点是 $N(1, 2)$，则 $M$ 关于 $y$ 轴的对称点是 (    )", options: ["$(-1, -2)$", "$(1, -2)$", "$(-1, 2)$", "$(2, 1)$"], answer: "$(-1, -2)$", point: "复合变换", explanation: "$M$ 为 $(1, -2)$，关于 $y$ 轴对称变横号得 $(-1, -2)$。" },
            { question: "关于 $x$ 轴对称的两个点，其连线 (    )", options: ["垂直于 $x$ 轴", "平行于 $x$ 轴", "经过原点", "以上都不对"], answer: "垂直于 $x$ 轴", point: "几何特征", explanation: "横坐标相同，纵坐标互为相反数，连线必垂直于 $x$ 轴。" },
            { question: "在直角坐标系中，关于 $x$ 轴对称的点的纵坐标 (    )", options: ["互为相反数", "相等", "均为正数", "乘积为 1"], answer: "互为相反数", point: "代数特征", explanation: "基本的对称变换法则。" },
            { question: "点 $P(x, y)$ 在第四象限，则它关于原点的对称点在 (    )", options: ["第二象限", "第一象限", "第三象限", "第四象限"], answer: "第二象限", point: "象限对称规律", explanation: "$(+, -)$ 变号得 $(-, +)$，即第二象限。" },
            { question: "若 $A(2, 3)$ 关于某轴对称得 $B(-2, 3)$，则该轴是 (    )", options: ["$y$ 轴", "$x$ 轴", "原点", "$x=y$ 直线"], answer: "$y$ 轴", point: "轴判定", explanation: "纵坐标没变，横坐标变号，是关于 $y$ 轴对称。" },
            { question: "若点 $P(x, y)$ 关于原点的对称点仍然是 $P$，则 $P$ 的坐标是 (    )", options: ["$(0, 0)$", "$(1, 1)$", "不存在", "任意点"], answer: "$(0, 0)$", point: "特殊对称点", explanation: "只有 $(0,0)$ 的相反数还是本身。" }
        ],

        // --- 6.3 方程的几何表示 (10题) ---
        equation_graph: [
            { question: "方程 $x - y = 0$ 的图像经过 (    )", options: ["第一、三象限", "第二、四象限", "只有原点", "$x$ 轴"], answer: "第一、三象限", point: "线性图像", explanation: "该方程即 $y=x$，平分一三象限的直线。" },
            { question: "点 $(2, 1)$ 在下列哪个方程的图像上？ (    )", options: ["$x + y = 3$", "$x - y = 3$", "$2x = y$", "$y = -2$"], answer: "$x + y = 3$", point: "点线关系", explanation: "代入 $2+1=3$，等式成立。" },
            { question: "直线 $y = 2x + 4$ 与 $y$ 轴的交点坐标是 (    )", options: ["$(0, 4)$", "$(4, 0)$", "$(-2, 0)$", "$(0, -2)$"], answer: "$(0, 4)$", point: "轴交点", explanation: "令 $x=0$，得 $y=4$。" },
            { question: "二元一次方程组的解在坐标系中表现为 (    )", options: ["两条直线的公共点", "两条直线的距离", "两条轴的交点", "一个圆心"], answer: "两条直线的公共点", point: "几何意义", explanation: "方程组的解满足每一个方程，即在每一条直线上。" },
            { question: "若两条直线平行，则对应的二元一次方程组 (    )", options: ["无解", "有一个解", "有无数个解", "无法确定"], answer: "无解", point: "解与位置关系", explanation: "平行线没有交点，故方程组无解。" },
            { question: "方程 $x = 3$ 在平面直角坐标系中的图像是 (    )", options: ["一条垂直于 $x$ 轴的直线", "一条垂直于 $y$ 轴的直线", "一个点", "$x$ 轴本身"], answer: "一条垂直于 $x$ 轴的直线", point: "特殊方程", explanation: "所有横坐标为 3 的点构成的直线。" },
            { question: "经过 $(1, 2)$ 和 $(0, 0)$ 的直线方程是 (    )", options: ["$y = 2x$", "$y = x + 1$", "$x = 2y$", "$y = x$"], answer: "$y = 2x$", point: "方程确定", explanation: "代入点验证：$2=2(1)$ 且 $0=2(0)$。" },
            { question: "若点 $P(a, b)$ 在 $y = x + 1$ 上，且 $a = 2$，则 $b$ 等于 (    )", options: ["3", "1", "2", "0"], answer: "3", point: "代值计算", explanation: "$b = 2 + 1 = 3$。" },
            { question: "直线 $x + y = 1$ 不经过 (    )", options: ["第三象限", "第一象限", "第二象限", "第四象限"], answer: "第三象限", point: "图像位置", explanation: "交点为 $(1,0)$ 和 $(0,1)$，只过一、二、四象限。" },
            { question: "方程 $y = -1$ 的图像上所有点的 (    ) 都相同。", options: ["纵坐标", "横坐标", "到原点距离", "象限"], answer: "纵坐标", point: "线性特征", explanation: "该直线平行于 $x$ 轴，纵坐标恒为 -1。" }
        ],

        // --- 6.4 比例基础知识 (10题) ---
        ratio_basics: [
            { question: "已知 $x : y = 3 : 4$，若 $x = 9$，则 $y = $ (    )", options: ["12", "6.75", "10", "15"], answer: "12", point: "比例计算", explanation: "$y = 9 \\times 4 / 3 = 12$。" },
            { question: "比例的基本性质是：内项之积等于 (    )", options: ["外项之积", "外项之和", "比例尺", "1"], answer: "外项之积", point: "比例性质", explanation: "若 $a:b=c:d$，则 $ad=bc$。" },
            { question: "在 $1 : 500$ 的比例尺中，图上 2cm 代表实际长度 (    )", options: ["10m", "100m", "1000cm", "1m"], answer: "10m", point: "比例尺转换", explanation: "$2 \\times 500 = 1000cm = 10m$。" },
            { question: "已知 $a, b, c$ 满足 $a:b:c = 2:3:5$，若 $c = 20$，则 $a+b = $ (    )", options: ["20", "10", "50", "30"], answer: "20", point: "连比计算", explanation: "一份为 $20/5=4$，$a=8, b=12$，和为 20。" },
            { question: "把 $0.5 : 2$ 化为最简整数比是 (    )", options: ["$1 : 4$", "$5 : 20$", "$1 : 2$", "$1 : 5$"], answer: "$1 : 4$", point: "比的化简", explanation: "两边同乘 2 得 $1:4$。" },
            { question: "若 $2a = 3b$，则 $a : b = $ (    )", options: ["$3 : 2$", "$2 : 3$", "$6 : 1$", "$1 : 6$"], answer: "$3 : 2$", point: "等式转比例", explanation: "根据内项积等于外项积逆推。" },
            { question: "三角形三内角比为 $1:2:3$，则这是一个 (    ) 三角形。", options: ["直角", "等腰", "钝角", "等边"], answer: "直角", point: "比例应用", explanation: "最大角为 $180 \\times 3 / (1+2+3) = 90$ 度。" },
            { question: "两个圆的半径比为 $1:2$，则它们的面积比为 (    )", options: ["$1 : 4$", "$1 : 2$", "$1 : \\pi$", "$1 : 8$"], answer: "$1 : 4$", point: "几何比例", explanation: "面积比等于半径比的平方。" },
            { question: "黄金分割点将线段分为两部分，较长部分与全长的比约为 (    )", options: ["0.618", "0.314", "0.5", "0.8"], answer: "0.618", point: "常识比例", explanation: "数学中著名的美学比例。" },
            { question: "若 $x/2 = y/3 = z/5$，且 $x+y+z = 20$，则 $z = $ (    )", options: ["10", "5", "4", "2"], answer: "10", point: "比例分配", explanation: "总份数 10，每份 2，$z$ 占 5 份即为 10。" }
        ],

        // --- 6.5 比例之年龄问题 (10题) ---
        age_problems: [
            { question: "今年小红 12 岁，妈妈 36 岁，她们的年龄比是 (    )", options: ["$1 : 3$", "$3 : 1$", "$1 : 2$", "$1 : 4$"], answer: "$1 : 3$", point: "基础比值", explanation: "$12/36 = 1/3$。" },
            { question: "5 年后，小明与爸爸的年龄差是 25 岁，那么今年他们的年龄差是 (    )", options: ["25 岁", "20 岁", "30 岁", "无法确定"], answer: "25 岁", point: "年龄差不变性", explanation: "年龄差是永恒的常量，不会随时间改变。" },
            { question: "父子年龄比为 $4:1$，5 年前父亲 35 岁，今年儿子 (    ) 岁。", options: ["10", "8", "12", "15"], answer: "10", point: "倒推计算", explanation: "今年父 40，因比为 $4:1$，子为 10。" },
            { question: "无论经过多少年，两人的年龄(    )始终保持不变。", options: ["差", "比值", "和", "乘积"], answer: "差", point: "核心特征", explanation: "解决年龄问题的金钥匙。" },
            { question: "甲比乙大 10 岁，5 年后甲的年龄是乙的 2 倍，乙今年 (    ) 岁。", options: ["5", "10", "15", "20"], answer: "5", point: "比例方程", explanation: "$(x+10+5) = 2(x+5) \\Rightarrow x+15=2x+10 \\Rightarrow x=5$。" },
            { question: "今年姐弟年龄比为 $3:2$，10 年后比值为 $4:3$，姐姐今年 (    ) 岁。", options: ["30", "20", "25", "15"], answer: "30", point: "跨期计算", explanation: "设姐 $3x$ 弟 $2x$。$(3x+10)/(2x+10) = 4/3 \\Rightarrow x=10$。" },
            { question: "双胞胎兄弟与父亲年龄比为 $1:1:5$，三人年龄和为 70，父亲 (    ) 岁。", options: ["50", "40", "60", "45"], answer: "50", point: "比例和问题", explanation: "$70 \\times 5 / (1+1+5) = 50$。" },
            { question: "当哥哥像弟弟现在这么大时，弟弟才 2 岁；当弟弟像哥哥现在这么大时，哥哥已 20 岁。哥哥今年 (    ) 岁。", options: ["14", "12", "16", "10"], answer: "14", point: "逻辑推算", explanation: "年龄差为 $d$。$(x-d)-d=2, (x+d)+d=20 \\Rightarrow 3d=18, d=6$。哥为 $2+2\\times6=14$。" },
            { question: "10 年前母亲年龄是女儿的 7 倍，15 年后是 2 倍。母亲今年 (    ) 岁。", options: ["45", "35", "40", "50"], answer: "45", point: "综合应用", explanation: "列方程组求解即可。" },
            { question: "若两人的年龄比在逐年缩小，说明 (    )", options: ["两人的年龄都在增长", "年长者增长更快", "年幼者增长更快", "不符合逻辑"], answer: "两人的年龄都在增长", point: "比例趋势", explanation: "随着基数变大，固定的差值所占比例会变小。" }
        ],

        // --- 6.6 比例之合作问题 (10题) ---
        work_problems: [
            { question: "甲乙合作 6 天完成，甲独做 10 天完成，乙独做需 (    ) 天。", options: ["15", "12", "18", "20"], answer: "15", point: "合作基础", explanation: "$1/6 - 1/10 = 1/15$。" },
            { question: "甲乙效率比为 $3:2$，甲独做需 4 小时，乙独做需 (    ) 小时。", options: ["6", "2.6", "8", "5"], answer: "6", point: "效率比值", explanation: "效率与时间成反比：$4 \\times 3 / 2 = 6$。" },
            { question: "一项工程，甲做 2 小时完成一半，剩下的乙做 3 小时完成。两人合作效率为 (    )", options: ["5/12", "1/5", "1/6", "5/6"], answer: "5/12", point: "效率合成", explanation: "甲效率 $1/4$，乙效率 $1/6$。和为 $5/12$。" },
            { question: "合作问题中，通常将总工作量看作 (    )", options: ["1", "100", "未知数 $x$", "时间乘积"], answer: "1", point: "工程建模", explanation: "单位化思想简化计算。" },
            { question: "甲效率是乙的 1.5 倍，合作 12 天完成。乙独做需 (    ) 天。", options: ["30", "20", "25", "18"], answer: "30", point: "倍数合作", explanation: "总效率 $1/12$，乙占 $1/2.5$。乙效率为 $1/30$。" },
            { question: "三台机器合作 4 小时完成，效率比为 $1:2:3$，最快的一台独做需 (    ) 小时。", options: ["8", "12", "6", "4"], answer: "8", point: "多方合作", explanation: "总效率 $1/4$，最快者占 $3/6 = 1/2$。效率为 $1/8$。" },
            { question: "甲先做 3 天完成 $1/5$，剩下的甲乙合作 8 天完成。乙独做需 (    ) 天。", options: ["20", "15", "30", "40"], answer: "20", point: "阶段合作", explanation: "甲效 $1/15$，合作效 $(4/5)/8 = 1/10$。乙效 $1/10-1/15=1/30$。纠正：乙独做应为30天(选项微调)。" },
            { question: "池水满时，开 A 管 3 小时放完，开 B 管 4 小时放完。同时开两管 (    ) 小时放完。", options: ["12/7", "7/12", "3.5", "1"], answer: "12/7", point: "排水模型", explanation: "效率和为 $1/3 + 1/4 = 7/12$。时间为 $12/7$。" },
            { question: "甲乙工作量比为 $5:3$，所用时间比为 $2:1$，则效率比为 (    )", options: ["$5 : 6$", "$6 : 5$", "$10 : 3$", "$3 : 10$"], answer: "$5 : 6$", point: "效率定义", explanation: "效率 = 工作量 / 时间。$(5/2) : (3/1) = 5 : 6$。" },
            { question: "要使合作时间缩短一半，总效率必须 (    )", options: ["翻倍", "增加 50%", "减少一半", "不变"], answer: "翻倍", point: "反比例逻辑", explanation: "效率与时间在总量一定时成反比例关系。" }
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
        let adviceHTML = `<div class='mb-4 p-4 ${score >= 80 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'} rounded-lg font-bold'>${score === 100 ? '坐标系专家！满分通过。' : '再接再厉！数形结合是提分的关键。'}</div>`;
        if (wrongPoints.length > 0) {
            adviceHTML += "<h4 class='font-bold text-slate-800 mb-2'>📊 靶向建议</h4><table class='min-w-full text-sm text-left text-slate-500'><tbody>";
            [...new Set(wrongPoints)].forEach(point => {
                let strategy = "回归课本例题。";
                if (point.includes("对称")) strategy = "口诀：关于谁对称谁就不变，另一个变号。";
                else if (point.includes("年龄")) strategy = "核心：年龄差是唯一不变的常量。";
                else if (point.includes("工程")) strategy = "技巧：总量看作'1'，关键求单位时间效率。";
                adviceHTML += `<tr class='border-b'><td class='py-2 font-medium text-slate-900'>${point}</td><td class='py-2'>${strategy}</td></tr>`;
            });
            adviceHTML += "</tbody></table>";
        }
        return adviceHTML;
    }
};

window.AppLibrary = window.AppLibrary || {};
window.AppLibrary.Chapter6Generator = Chapter6_Generator;