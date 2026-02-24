// server/migrate.js
const fs = require('fs');
const path = require('path');
const vm = require('vm'); // Node.js 内置的虚拟机模块，用于安全执行外部 JS 代码

// 1. 配置路径
// 假设你的旧 JS 文件存放在根目录的 _old_data_backup 文件夹中
const BACKUP_DIR = path.join(__dirname, '../_old_data_backup'); 
const OUTPUT_FILE = path.join(__dirname, './data/modules.json');

console.log('🔄 开始执行旧题库数据迁移...');

// 2. 准备一个“沙箱(Sandbox)”，模拟浏览器环境，防止报错
const sandbox = {
    window: {},
    console: console,
    Math: Math,
    // 兼容旧版代码中可能存在的工具类调用
    Utils: {
        randInt: () => 1,
        randChoice: (arr) => arr ? arr[0] : null
    }
};
vm.createContext(sandbox);

// 3. 读取所有的旧题库文件
let files = [];
try {
    files = fs.readdirSync(BACKUP_DIR).filter(f => f.endsWith('.js') && f.startsWith('data_chapter'));
} catch (error) {
    console.error(`❌ 找不到旧文件目录，请确保你的旧题库放在了 ${BACKUP_DIR} 中！`);
    process.exit(1);
}

if (files.length === 0) {
    console.log('⚠️ 没有找到任何 data_chapterX.js 文件。');
    process.exit(1);
}

// 4. 逐个解析文件
files.forEach(file => {
    const filePath = path.join(BACKUP_DIR, file);
    const code = fs.readFileSync(filePath, 'utf8');
    try {
        // 在沙箱中执行旧代码，数据会被挂载到 sandbox.window.AppLibrary 上
        vm.runInContext(code, sandbox);
        console.log(`✅ 成功解析: ${file}`);
    } catch (e) {
        console.error(`❌ 解析失败: ${file}`, e.message);
    }
});

// 5. 提取数据并格式化
const appLibrary = sandbox.window.AppLibrary || {};
const modules = [];

// 简单的年级映射逻辑 (你可以根据实际情况在系统中再修改)
const defaultGrades = ["七年级", "七年级", "八年级", "八年级", "九年级", "九年级"];

Object.keys(appLibrary).forEach((key, index) => {
    const gen = appLibrary[key];
    
    // 只保留我们需要的数据结构，函数(如 generateQuiz) 在 JSON.stringify 时会自动被丢弃
    let mod = {
        info: gen.info || {},
        sections: gen.sections || {},
        database: gen.database || {}
    };

    // 智能补全年级和学期信息
    if (!mod.info.grade) {
        mod.info.grade = defaultGrades[Math.min(index, 5)]; // 粗略分配年级
    }
    if (!mod.info.semester) {
        mod.info.semester = index % 2 === 0 ? "上学期" : "下学期"; 
    }

    modules.push(mod);
});

// 6. 写入到全新的 modules.json 数据库中
try {
    // 确保 data 目录存在
    if (!fs.existsSync(path.join(__dirname, './data'))) {
        fs.mkdirSync(path.join(__dirname, './data'));
    }
    
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(modules, null, 2), 'utf8');
    console.log(`\n🎉 迁移完美结束！`);
    console.log(`共成功提取并转换了 ${modules.length} 个大模块。`);
    console.log(`数据已安全保存至: ${OUTPUT_FILE}`);
} catch (error) {
    console.error('❌ 写入文件失败:', error);
}