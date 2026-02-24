const express = require('express');
const cors = require('cors');
const path = require('path');
const moduleRoutes = require('./routes/modules');
const mistakeRoutes = require('./routes/mistakes'); // 【新增】引入错题路由

const app = express();
const PORT = process.env.PORT || 3002;

// 中间件配置
app.use(cors());
app.use(express.json()); 

// 1. 挂载数据接口路由
app.use('/api/modules', moduleRoutes);
app.use('/api/mistakes', mistakeRoutes); // 【新增】挂载错题接口

// 2. 挂载前端静态页面 (明确指向上一级的 client 文件夹)
app.use(express.static(path.join(__dirname, '../client')));

// 启动服务
app.listen(PORT, () => {
    console.log(`后台服务已启动: http://localhost:${PORT}`);
    // 当静态目录里有 index.html 时，直接访问根路径即可，不需要在网址后面加 /index.html
    console.log(`请在浏览器中直接访问: http://localhost:${PORT}`); 
});