/**
 * 第一章：有理数 (终极融合版)
 * 特性：
 * 1. 保留 V1 的动态生成核心 (Utils + 随机算法)，题库无限。
 * 2. 集成 V7 的模块化接口 (sections + database)，支持“专项突破”。
 * 3. 集成 V7 的智能反馈 (getAdvice)，支持错题归纳。
 */

// --- 1. 核心工具库 (保留动态生成能力) ---
const Utils = {
    // 生成 [min, max] 之间的随机整数
    randInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    
    // 数组洗牌
    shuffle: (arr) => arr.sort(() => Math.random() - 0.5),

    // 智能生成选项 (自动生成正确答案和3个干扰项)
    generateOptions: (correctVal, type = 'number') => {
        let options = new Set();
        options.add(correctVal);
        
        let safeCounter = 0;
        while(options.size < 4 && safeCounter < 20) {
            let fake;
            if (type === 'number') {
                const val = parseFloat(correctVal);
                // 生成策略：正负颠倒、数值微调、倒数等
                const strategies = [
                    () => -val, // 相反数
                    () => val + Utils.randInt(1, 3), // 加一点
                    () => val - Utils.randInt(1, 3), // 减一点
                    () => val * 10, // 位值错误
                    () => Math.abs(val) // 绝对值干扰
                ];
                const strategy = strategies[Utils.randInt(0, strategies.length - 1)];
                fake = strategy();
                if (Number.isNaN(fake)) fake = 0;
            } else {
                // 简单的字符串干扰 (兜底)
                fake = correctVal + " " + Utils.randInt(1, 9);
            }
            options.add(fake.toString());
            safeCounter++;
        }
        // 如果生成不足4个，补齐
        while(options.size < 4) {
            options.add((parseFloat(correctVal) + options.size + 1).toString());
        }
        
        return Array.from(options).sort(() => Math.random() - 0.5);
    }
};

// --- 2. 动态题目生成器 (各模块逻辑) ---
const SectionGenerators = {
    // 模块1: 有理数的概念
    sec_concepts: {
        name: "有理数的概念",
        generate: (level) => {
            if (level <= 2) {
                const answer = Utils.randInt(0, 1) ? 0 : -Utils.randInt(2,9); 
                return {
                    question: "下列各数中，属于<strong>整数</strong>的是 (    )",
                    options: Utils.shuffle([`${answer}`, "0.5", "-1.2", "$\\frac{1}{2}$"]),
                    answer: `${answer}`,
                    point: "整数识别",
                    explanation: "<strong>【知识回放】</strong>整数包括正整数、负整数和0。分数和小数不是整数。"
                };
            } else if (level === 3) {
                return {
                    question: "关于 $0$，下列说法正确的是 (    )",
                    options: Utils.shuffle(["$0$ 既不是正数也不是负数", "$0$ 是正数", "$0$ 是负数", "$0$ 不是有理数"]),
                    answer: "$0$ 既不是正数也不是负数",
                    point: "0的性质",
                    explanation: "0是正负数的分界点，是整数，也是有理数。"
                };
            } else {
                const a = Utils.randInt(1, 9);
                return {
                    question: `在 $-${a}, 0, |-${a}|, -1.5$ 中，非负数有 (    ) 个`,
                    options: Utils.shuffle(["2", "3", "1", "4"]),
                    answer: "2",
                    point: "非负数",
                    explanation: `<strong>【解析】</strong>0是非负数，$|-${a}|=${a}$ 是正数，也是非负数。共2个。`
                };
            }
        }
    },

    // 模块2: 数轴
    sec_numberLine: {
        name: "数轴",
        generate: (level) => {
            const a = Utils.randInt(2, 8);
            const b = Utils.randInt(2, 5);
            if (level === 1) {
                 return {
                    question: "数轴的三要素是 (    )",
                    options: Utils.shuffle(["原点、正方向、单位长度", "原点、箭头、长度", "直线、箭头、数字", "正数、负数、原点"]),
                    answer: "原点、正方向、单位长度",
                    point: "数轴定义",
                    explanation: "数轴必须具备原点、正方向、单位长度三要素。"
                };
            } else if (level === 3) {
                return {
                    question: `点A表示数 ${-a}，向右移动 ${b} 个单位得到点B，则点B表示 (    )`,
                    options: Utils.shuffle([`${-a+b}`, `${-a-b}`, `${a+b}`, `${a-b}`]),
                    answer: `${-a+b}`,
                    point: "数轴移动",
                    explanation: `<strong>【解析】</strong>右移加，左移减。${-a} + ${b} = ${-a+b}。`
                };
            } else {
                return {
                    question: `数轴上点A表示 ${-a}，点B表示 ${a}，则AB的中点表示 (    )`,
                    options: Utils.shuffle(["0", "1", "-1", `${2*a}`]),
                    answer: "0",
                    point: "中点公式",
                    explanation: "互为相反数的两点中点是原点。"
                };
            }
        }
    },

    // 模块3: 相反数与绝对值
    sec_oppositeAbs: {
        name: "相反数与绝对值",
        generate: (level) => {
            const val = Utils.randInt(2, 15);
            if (level === 1) {
                return {
                    question: `${-val} 的相反数是 (    )`,
                    options: Utils.shuffle([`${val}`, `${-val}`, `${1/val}`, `${-1/val}`]),
                    answer: `${val}`,
                    point: "相反数",
                    explanation: "符号相反的两个数互为相反数。"
                };
            } else if (level === 3) {
                return {
                    question: `计算 $|-${val}|$ 的结果是 (    )`,
                    options: Utils.shuffle([`${val}`, `${-val}`, "0", "1"]),
                    answer: `${val}`,
                    point: "绝对值",
                    explanation: "负数的绝对值是它的相反数（正数）。"
                };
            } else {
                return {
                    question: `若 $|a-1| + |b+${val}| = 0$，则 $a+b$ 等于 (    )`,
                    options: Utils.shuffle([`${1-val}`, `${1+val}`, `${val-1}`, "0"]),
                    answer: `${1-val}`,
                    point: "非负性",
                    explanation: `非负数之和为0，则各项均为0。$a=1, b=-${val}$。和为 ${1-val}$。`
                };
            }
        }
    },

    // 模块4: 有理数的运算
    sec_operations: {
        name: "有理数的运算",
        generate: (level) => {
            const a = Utils.randInt(1, 10);
            const b = Utils.randInt(1, 10);
            if (level === 1) {
                const ans = -a + (-b);
                return {
                    question: `计算 $(- ${a}) + (- ${b})$ (    )`,
                    options: Utils.shuffle([`${ans}`, `${Math.abs(ans)}`, `${-a+b}`, `${a-b}`]),
                    answer: `${ans}`,
                    point: "加法法则",
                    explanation: "同号两数相加，取相同符号，绝对值相加。"
                };
            } else if (level === 2) {
                const ans = -a * b;
                return {
                    question: `计算 $(- ${a}) \\times ${b}$ (    )`,
                    options: Utils.shuffle([`${ans}`, `${-ans}`, `${a+b}`, `${a-b}`]),
                    answer: `${ans}`,
                    point: "乘法法则",
                    explanation: "异号得负，绝对值相乘。"
                };
            } else {
                return {
                    question: `计算 $(-12) \\times (\\frac{1}{3} - \\frac{1}{4})$ (    )`,
                    options: Utils.shuffle(["-1", "1", "-7", "7"]),
                    answer: "-1",
                    point: "分配律",
                    explanation: "使用分配律：$(-12)\\times\\frac{1}{3} - (-12)\\times\\frac{1}{4} = -4 - (-3) = -1$。"
                };
            }
        }
    },

    // 模块5: 分数
    sec_fractions: {
        name: "分数与倒数",
        generate: (level) => {
            const a = Utils.randInt(2, 5);
            if (level <= 2) {
                return {
                    question: `$-\\frac{1}{${a}}$ 的倒数是 (    )`,
                    options: Utils.shuffle([`-${a}`, `${a}`, `$\\frac{1}{${a}}$`, `-${1/a}`]),
                    answer: `-${a}`,
                    point: "倒数",
                    explanation: "乘积为1的两个数互为倒数。符号不变，分子分母颠倒。"
                };
            } else {
                return {
                    question: `下列式子无意义的是 (    )`,
                    options: Utils.shuffle(["$\\frac{5}{0}$", "$\\frac{0}{5}$", "$-0.1$", "$\\frac{-1}{2}$"]),
                    answer: "$\\frac{5}{0}$",
                    point: "分式意义",
                    explanation: "分母（除数）不能为0。"
                };
            }
        }
    },

    // 模块6: 乘方
    sec_powers: {
        name: "乘方",
        generate: (level) => {
            const base = Utils.randInt(2, 5);
            if (level <= 2) {
                const ans = base * base;
                return {
                    question: `$(-${base})^2$ 的值是 (    )`,
                    options: Utils.shuffle([`${ans}`, `${-ans}`, `${2*base}`, `${-2*base}`]),
                    answer: `${ans}`,
                    point: "乘方符号",
                    explanation: "负数的偶次幂是正数。"
                };
            } else {
                return {
                    question: "计算 $(-1)^{2024} + (-1)^{2025}$ (    )",
                    options: Utils.shuffle(["0", "-2", "2", "-1"]),
                    answer: "0",
                    point: "奇偶次幂",
                    explanation: "偶次幂为1，奇次幂为-1。$1 + (-1) = 0$。"
                };
            }
        }
    },

    // 模块7: 科学记数法
    sec_sciNot: {
        name: "科学记数法",
        generate: (level) => {
            if (level === 1) {
                return {
                    question: "科学记数法 $a \\times 10^n$ 中，$a$ 的范围是 (    )",
                    options: Utils.shuffle(["$1 \\le |a| < 10$", "$0 < |a| < 10$", "$1 < |a| \\le 10$", "没有限制"]),
                    answer: "$1 \\le |a| < 10$",
                    point: "科学记数法定义",
                    explanation: "整数位只能有一位非零数字。"
                };
            } else {
                const pow = Utils.randInt(3, 6);
                const numBase = Utils.randInt(2, 9) + Utils.randInt(1, 9)/10; 
                const bigNum = numBase * Math.pow(10, pow);
                return {
                    question: `将 ${Math.floor(bigNum)} 用科学记数法表示为 (    )`,
                    options: Utils.shuffle([`${numBase} \\times 10^${pow}`, `${numBase*10} \\times 10^${pow-1}`, `${numBase} \\times 10^${pow+1}`]),
                    answer: `${numBase} \\times 10^${pow}`,
                    point: "大数转换",
                    explanation: `小数点左移 ${pow} 位。`
                };
            }
        }
    }
};

// --- 3. 静态化接口适配 (Database Bridge) ---
// 为了让 script.js 的“专项突破”能读取到题目列表，
// 我们在初始化时，利用动态生成器为每个模块预生成一批静态题目放入 database。
const database = {};
const sectionsMap = {};

Object.keys(SectionGenerators).forEach(key => {
    const generator = SectionGenerators[key];
    database[key] = [];
    sectionsMap[key] = `1.${Object.keys(sectionsMap).length + 1} ${generator.name}`;
    
    // 为每个模块预生成 5 道不同难度的题目用于列表展示
    for (let i = 1; i <= 5; i++) {
        // 动态调用 generate
        const q = generator.generate(i); 
        // 补全 ID 方便追踪
        q.id = `ch1-${key}-${i}`;
        database[key].push(q);
    }
});

const Chapter1_Generator = {
    info: {
        id: "ch1",
        title: "第一章 有理数",
        description: "无限题库版：每次进入题目数值都会随机变化",
        icon: "fa-solid fa-1"
    },

    // 核心：暴露 sections 和 database 给 UI 使用
    sections: sectionsMap,
    database: database,

    // 辅助工具
    shuffleOptions: Utils.shuffle,

    // 核心生成函数：混合所有模块，实时生成一套试卷 (全真模式用)
    generateQuiz: function() {
        let quizQuestions = [];
        let qId = 1;
        
        const keys = Object.keys(SectionGenerators);
        
        // 每个模块抽取 3-5 题
        keys.forEach(key => {
            const gen = SectionGenerators[key];
            for (let level = 1; level <= 5; level++) {
                const qData = gen.generate(level);
                quizQuestions.push({
                    id: `ch1-gen-${qId++}`, // 动态ID
                    point: gen.name,
                    ...qData
                });
            }
        });

        return Utils.shuffle(quizQuestions);
    },

    // 智能反馈
    getAdvice: function(score, wrongPoints) {
        let adviceHTML = "";
        
        if (score === 100) {
            adviceHTML += "<div class='mb-4 p-4 bg-green-50 rounded-lg text-green-700 font-bold'>完美表现！你的有理数计算能力已达标。</div>";
        } else {
            adviceHTML += "<div class='mb-4 p-4 bg-yellow-50 rounded-lg text-yellow-700 font-bold'>基础仍需夯实，特别是符号问题。</div>";
        }

        if (wrongPoints.length > 0) {
            adviceHTML += "<h4 class='font-bold text-slate-800 mb-2'>📉 错题分析</h4>";
            adviceHTML += "<div class='overflow-hidden rounded-lg border border-slate-200'><table class='min-w-full text-sm text-left text-slate-500'><thead class='text-xs text-slate-700 uppercase bg-slate-50'><tr><th class='px-6 py-3'>知识点</th><th class='px-6 py-3'>建议</th></tr></thead><tbody>";

            const counts = {};
            wrongPoints.forEach(p => counts[p] = (counts[p] || 0) + 1);
            
            Object.keys(counts).forEach(point => {
                let strategy = "复习课本概念。";
                if (point.includes("运算")) strategy = "注意符号：同号得正，异号得负。";
                if (point.includes("相反数")) strategy = "负数的绝对值是它的相反数。";
                if (point.includes("乘方")) strategy = "奇负偶正：(-2)^3=-8, (-2)^2=4。";
                
                adviceHTML += `<tr class='bg-white border-b'><td class='px-6 py-4 font-medium text-slate-900'>${point}</td><td class='px-6 py-4'>${strategy}</td></tr>`;
            });
            adviceHTML += "</tbody></table></div>";
        }
        return adviceHTML;
    }
};

window.AppLibrary = window.AppLibrary || {};
window.AppLibrary.Chapter1Generator = Chapter1_Generator;