module.exports = function (context, options) {
  const path = require('path');
  const fs = require('fs');
    return {
      name: 'my-fetch-plugin',
      async loadContent() {
        // 在这里获取你的JSON数据
        const jsonPath = path.resolve(__dirname, '../../static/data/cards.json');
        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))
        
        return data;
      },
      async contentLoaded({ content, actions }) {
        const { setGlobalData } = actions;
        // 使用setGlobalData方法来创建全局数据
        setGlobalData(content);
      },
    };
  };