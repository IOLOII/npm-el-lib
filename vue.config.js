// vue.config.js
const path = require('path');

module.exports = {
  // 修改入口 同时 src 目录改名为 examples
  configureWebpack: {
    entry: path.join(__dirname, 'examples/main.js')
  }
};
