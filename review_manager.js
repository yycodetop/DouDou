/**
 * 艾宾浩斯复习管理器 & 学习日志系统 (V4.0)
 * 更新点：确保包含 getWeakPoints 方法，用于支持全局智能推荐
 */

const ReviewManager = {
    STORAGE_KEY_REVIEW: 'math_review_data_v2',
    STORAGE_KEY_LOGS: 'math_study_logs_v1',
    
    // 艾宾浩斯间隔 (不变)
    INTERVALS: [
        1 * 24 * 60 * 60 * 1000,
        2 * 24 * 60 * 60 * 1000,
        4 * 24 * 60 * 60 * 1000,
        7 * 24 * 60 * 60 * 1000,
        15 * 24 * 60 * 60 * 1000,
        30 * 24 * 60 * 60 * 1000
    ],

    _get(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error(`读取 ${key} 失败`, e);
            return [];
        }
    },

    _save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error(`保存 ${key} 失败`, e);
        }
    },

    // --- 1. 遗忘曲线功能 ---
    getData() { return this._get(this.STORAGE_KEY_REVIEW); },
    
    addMistake(questionObj, generatorId) {
        let data = this.getData();
        const existingIndex = data.findIndex(item => item.id === questionObj.id);
        const nextReview = Date.now() + this.INTERVALS[0];

        if (existingIndex !== -1) {
            data[existingIndex].questionData = questionObj; 
            data[existingIndex].stage = 0;
            data[existingIndex].nextReview = nextReview;
        } else {
            data.push({
                id: questionObj.id,
                generatorId: generatorId,
                questionData: questionObj,
                stage: 0,
                nextReview: nextReview,
                addedTime: Date.now()
            });
        }
        this._save(this.STORAGE_KEY_REVIEW, data);
    },

    getDueQuestions() {
        const data = this.getData();
        const now = Date.now();
        return data.filter(item => item.nextReview <= now);
    },

    processResult(questionId, isCorrect) {
        let data = this.getData();
        const index = data.findIndex(item => item.id === questionId);
        if (index === -1) return;

        if (isCorrect) {
            data[index].stage += 1;
            if (data[index].stage >= this.INTERVALS.length) {
                data.splice(index, 1);
            } else {
                data[index].nextReview = Date.now() + this.INTERVALS[data[index].stage];
            }
        } else {
            data[index].stage = 0;
            data[index].nextReview = Date.now() + this.INTERVALS[0];
        }
        this._save(this.STORAGE_KEY_REVIEW, data);
    },

    getSchedule() {
        const data = this.getData();
        const scheduleMap = {};
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        data.forEach(item => {
            const reviewDate = new Date(item.nextReview);
            reviewDate.setHours(0, 0, 0, 0);
            const keyTime = reviewDate < now ? now.getTime() : reviewDate.getTime();
            if (!scheduleMap[keyTime]) scheduleMap[keyTime] = 0;
            scheduleMap[keyTime]++;
        });

        return Object.keys(scheduleMap).sort((a, b) => a - b).map(time => {
            const date = new Date(parseInt(time));
            const today = new Date();
            today.setHours(0,0,0,0);
            const diffDays = Math.ceil((date - today) / (1000 * 60 * 60 * 24)); 
            
            let label = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
            if (diffDays === 0) label += " (今天)";
            else if (diffDays === 1) label += " (明天)";
            else if (diffDays === 2) label += " (后天)";

            return { timestamp: time, dateStr: label, count: scheduleMap[time], isToday: diffDays === 0 };
        });
    },

    getStats() {
        const data = this.getData();
        const now = Date.now();
        return {
            totalPending: data.length,
            dueNow: data.filter(item => item.nextReview <= now).length
        };
    },

    // --- 2. 学习日志与分析 ---

    addStudyLog(logData) {
        let logs = this._get(this.STORAGE_KEY_LOGS);
        const now = new Date();
        const newLog = {
            id: Date.now(),
            timestamp: Date.now(),
            dateStr: `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`,
            timeStr: `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`,
            ...logData
        };
        logs.unshift(newLog);
        if (logs.length > 100) logs = logs.slice(0, 100);
        this._save(this.STORAGE_KEY_LOGS, logs);
    },

    getStudyLogs() {
        return this._get(this.STORAGE_KEY_LOGS);
    },

    /**
     * 核心分析算法：获取高频错题知识点
     * @returns {Array} 按错误频率从高到低排序的知识点数组
     */
    getWeakPoints() {
        const logs = this.getStudyLogs();
        const stats = {};
        
        logs.forEach(log => {
            if (log.wrongPoints && Array.isArray(log.wrongPoints)) {
                log.wrongPoints.forEach(point => {
                    stats[point] = (stats[point] || 0) + 1;
                });
            }
        });

        return Object.keys(stats).sort((a, b) => stats[b] - stats[a]);
    }
};

window.ReviewManager = ReviewManager;