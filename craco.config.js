
const path = require("path")//导入path模块
//定义函数resolve,将你想要自定义的路径和js的根路劲作拼接
const resolve = dir => path.resolve(__dirname, dir)
const CracoLessPlugin = require('craco-less');
const CracoAntDesignPlugin = require("craco-antd");


module.exports = {
  webpack: {
    alias: {
      //名称:路径
      "@": resolve("src")
    }
  },
  plugins: [
    // antd 按需加载 less等配置
    {
      plugin: CracoAntDesignPlugin,
      options: {
        //  自定义主题
        customizeThemeLessPath: path.join(__dirname, "src/assets/styles/global.less")
      }
    }
  ],
};