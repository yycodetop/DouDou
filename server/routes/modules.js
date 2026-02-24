const express = require('express');
const router = express.Router();
const JsonDB = require('../utils/jsonDB');

const modulesDB = new JsonDB('modules.json');

// 1. 获取图谱模块列表
router.get('/', async (req, res) => {
    try {
        let modules = await modulesDB.read();
        const { grade, semester } = req.query;
        if (grade && grade !== 'all') modules = modules.filter(m => m.info && m.info.grade === grade);
        if (semester && semester !== 'all') modules = modules.filter(m => m.info && m.info.semester === semester);
        res.json({ success: true, data: modules });
    } catch (error) { res.status(500).json({ success: false, message: error.message }); }
});

// 2. 新增图谱模块
router.post('/', async (req, res) => {
    try {
        const { info, sections } = req.body;
        const newModule = {
            info: { ...info, id: 'mod_' + Date.now(), icon: "fa-solid fa-book-open" },
            sections: sections || {},
            database: {} 
        };
        const modules = await modulesDB.read();
        modules.unshift(newModule); 
        await modulesDB.write(modules);
        res.json({ success: true, data: newModule });
    } catch (error) { res.status(500).json({ success: false, message: error.message }); }
});

// 3. 修改图谱模块结构
router.put('/:id', async (req, res) => {
    try {
        const { info, sections } = req.body;
        const modules = await modulesDB.read();
        const index = modules.findIndex(m => m.info.id === req.params.id);
        if (index === -1) return res.status(404).json({ success: false });

        if (info) modules[index].info = { ...modules[index].info, ...info };
        if (sections) modules[index].sections = sections;

        await modulesDB.write(modules);
        res.json({ success: true, data: modules[index] });
    } catch (error) { res.status(500).json({ success: false, message: error.message }); }
});

// 4. 删除图谱模块
router.delete('/:id', async (req, res) => {
    try {
        let modules = await modulesDB.read();
        const initialLength = modules.length;
        modules = modules.filter(m => m.info.id !== req.params.id);
        if (modules.length === initialLength) return res.status(404).json({ success: false });
        await modulesDB.write(modules);
        res.json({ success: true });
    } catch (error) { res.status(500).json({ success: false, message: error.message }); }
});

// 5. 【新增】修改特定小节的底层题库数据
router.put('/:id/database/:secId', async (req, res) => {
    try {
        const { id, secId } = req.params;
        const questions = req.body; // 接收题库数组
        const modules = await modulesDB.read();
        const index = modules.findIndex(m => m.info.id === id);
        
        if (index === -1) return res.status(404).json({ success: false });

        if (!modules[index].database) modules[index].database = {};
        modules[index].database[secId] = questions;

        await modulesDB.write(modules);
        res.json({ success: true });
    } catch (error) { res.status(500).json({ success: false, message: error.message }); }
});

module.exports = router;