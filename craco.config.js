// 这是craco的配置文件，对于webpack的一些修改

// 拿到path
const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  // 配置别名
  webpack: {
    alias: {
      "@":resolve("src"),
      "component":resolve("src/components")
    }
  }
}