/*
 * @Author: your name
 * @Date: 2020-06-02 17:37:00
 * @LastEditTime: 2020-06-03 11:22:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vui\vue.config.js
 */ 
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader');
  }
};
