const express = require('express');
const router = express.Router();
const JsonDB = require('../utils/jsonDB');

const modulesDB = new JsonDB('modules.json');

// 1. 获取模块列表 (支持筛选)
router.get('/', async (req, res) => {
    try {
        let modules = await modulesDB.read();
        const { grade, semester } = req.query;

        // 根据年级和学期进行筛选
        if (grade && grade !== 'all') {
            modules = modules.filter(m => m.info.grade === grade);
        }
        if (semester && semester !== 'all') {
            modules = modules.filter(m => m.info.semester === semester);
        }

        res.json({ success: true, data: modules });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// 2. 新增模块
router.post('/', async (req, res) => {
    try {
        const newModule = req.body;
        // 生成唯一 ID
        newModule.info.id = 'mod_' + Date.now(); 
        
        const modules = await modulesDB.read();
        modules.push(newModule);
        await modulesDB.write(modules);

        res.json({ success: true, data: newModule });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// 3. 修改模块
router.put('/:id', async (req, res) => {
    try {
        const moduleId = req.params.id;
        const updatedInfo = req.body;
        
        const modules = await modulesDB.read();
        const index = modules.findIndex(m => m.info.id === moduleId);
        
        if (index !== -1) {
            // 只更新 info 部分
            modules[index].info = { ...modules[index].info, ...updatedInfo };
            await modulesDB.write(modules);
            res.json({ success: true, data: modules[index] });
        } else {
            res.status(404).json({ success: false, message: '模块未找到' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;