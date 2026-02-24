const express = require('express');
const router = express.Router();
const JsonDB = require('../utils/jsonDB');

const modulesDB = new JsonDB('modules.json');

// 1. 获取图谱模块列表 (支持年级、学期筛选)
router.get('/', async (req, res) => {
    try {
        let modules = await modulesDB.read();
        const { grade, semester } = req.query;

        if (grade && grade !== 'all') {
            modules = modules.filter(m => m.info && m.info.grade === grade);
        }
        if (semester && semester !== 'all') {
            modules = modules.filter(m => m.info && m.info.semester === semester);
        }

        res.json({ success: true, data: modules });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// 2. 新增图谱模块 (Create)
router.post('/', async (req, res) => {
    try {
        const { title, description, grade, semester } = req.body;
        const newModule = {
            info: {
                id: 'mod_' + Date.now(), // 基于时间戳生成唯一ID
                title: title,
                description: description,
                grade: grade,
                semester: semester,
                icon: "fa-solid fa-book-open" // 默认分配一个好看的图标
            },
            sections: {}, // 预留小节结构，供后续扩展
            database: {}  // 预留题库结构
        };

        const modules = await modulesDB.read();
        modules.unshift(newModule); // 新模块插到最前面
        await modulesDB.write(modules);

        res.json({ success: true, data: newModule });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// 3. 修改图谱模块 (Update)
router.put('/:id', async (req, res) => {
    try {
        const moduleId = req.params.id;
        const updatedInfo = req.body;
        
        const modules = await modulesDB.read();
        const index = modules.findIndex(m => m.info.id === moduleId);
        
        if (index === -1) return res.status(404).json({ success: false, message: '模块未找到' });

        // 核心：只更新 info 基础信息，绝对保留它原有的 sections 和 database 题库数据
        modules[index].info = { ...modules[index].info, ...updatedInfo };
        await modulesDB.write(modules);
        
        res.json({ success: true, data: modules[index] });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// 4. 删除图谱模块 (Delete)
router.delete('/:id', async (req, res) => {
    try {
        const moduleId = req.params.id;
        let modules = await modulesDB.read();
        
        const initialLength = modules.length;
        // 过滤掉匹配的 ID，实现删除
        modules = modules.filter(m => m.info.id !== moduleId);
        
        if (modules.length === initialLength) {
            return res.status(404).json({ success: false, message: '模块未找到' });
        }

        await modulesDB.write(modules);
        res.json({ success: true, message: '删除成功' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;