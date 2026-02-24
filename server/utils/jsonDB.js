const fs = require('fs').promises;
const path = require('path');

class JsonDB {
    constructor(filename) {
        this.filePath = path.join(__dirname, '../data', filename);
    }

    // 读取数据
    async read() {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            // 如果文件不存在，返回空数组
            if (error.code === 'ENOENT') {
                await this.write([]);
                return [];
            }
            throw error;
        }
    }

    // 写入数据
    async write(data) {
        await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), 'utf8');
    }
}

module.exports = JsonDB;