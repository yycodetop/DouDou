const express = require('express');
const router = express.Router();
const JsonDB = require('../utils/jsonDB');

// 错题本数据库实例
const reviewsDB = new JsonDB('reviews.json');

// ==========================================
// 艾宾浩斯遗忘曲线配置
// 记忆阶段 0-5，分别对应下次复习的间隔天数：1, 2, 4, 7, 15, 30
// ==========================================
const INTERVALS = [1, 2, 4, 7, 15, 30];

// 工具函数：计算下一次复习的时间戳
function getNextReviewTime(stage) {
    const days = INTERVALS[stage] || 30; // 超过5阶按30天算
    const now = new Date();
    // 设为未来第 N 天的凌晨 0 点（或者直接加 24*N 小时，这里为了简单直接加毫秒数）
    return now.getTime() + days * 24 * 60 * 60 * 1000;
}

// 1. 获取首页数据看板统计 (Stats)
router.get('/stats', async (req, res) => {
    try {
        const mistakes = await reviewsDB.read();
        const now = Date.now();

        const stats = {
            due: 0,       // 今日待复习
            new: 0,       // 阶段0 (新犯错)
            reviewing: 0, // 阶段1-3 (巩固中)
            mastered: 0   // 阶段4-5 (已掌握)
        };

        mistakes.forEach(m => {
            if (m.next_review_time <= now) stats.due++;
            if (m.stage === 0) stats.new++;
            else if (m.stage >= 1 && m.stage <= 3) stats.reviewing++;
            else if (m.stage >= 4) stats.mastered++;
        });

        res.json({ success: true, data: stats });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// 2. 获取全量错题本列表
router.get('/', async (req, res) => {
    try {
        const mistakes = await reviewsDB.read();
        // 按下次复习时间从小到大排序
        mistakes.sort((a, b) => a.next_review_time - b.next_review_time);
        res.json({ success: true, data: mistakes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// 3. 获取今日待复习错题列表 (Due)
router.get('/due', async (req, res) => {
    try {
        const mistakes = await reviewsDB.read();
        const now = Date.now();
        // 过滤出 预期复习时间 小于等于 当前时间 的题目
        const dueMistakes = mistakes.filter(m => m.next_review_time <= now);
        res.json({ success: true, data: dueMistakes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// 4. 新增错题 (手工录入 / 测试排雷录入)
router.post('/', async (req, res) => {
    try {
        const newMistake = req.body;
        
        // 赋予初始调度属性
        newMistake.id = 'mistake_' + Date.now();
        newMistake.stage = 0;                     // 初始阶段为 0
        newMistake.wrong_count = 1;               // 初始错误次数为 1
        newMistake.created_at = Date.now();
        newMistake.next_review_time = getNextReviewTime(0); // 1天后复习

        const mistakes = await reviewsDB.read();
        mistakes.push(newMistake);
        await reviewsDB.write(mistakes);

        res.json({ success: true, data: newMistake });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// 5. 提交复习结果 (艾宾浩斯状态流转引擎)
router.put('/:id/process', async (req, res) => {
    try {
        const mistakeId = req.params.id;
        const { isCorrect } = req.body;
        
        const mistakes = await reviewsDB.read();
        const index = mistakes.findIndex(m => m.id === mistakeId);
        
        if (index === -1) {
            return res.status(404).json({ success: false, message: '错题未找到' });
        }

        const mistake = mistakes[index];

        if (isCorrect) {
            // 答对了，记忆深度加深
            mistake.stage = Math.min(mistake.stage + 1, 5); // 最高到5阶
        } else {
            // 答错了，记忆重置，并增加错误计数
            mistake.stage = 0;
            mistake.wrong_count = (mistake.wrong_count || 1) + 1;
        }

        // 重新计算下一次复习时间
        mistake.next_review_time = getNextReviewTime(mistake.stage);

        await reviewsDB.write(mistakes);
        res.json({ success: true, data: mistake });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;