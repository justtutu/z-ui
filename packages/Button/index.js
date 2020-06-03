/*
 * @Author: your name
 * @Date: 2020-06-02 17:41:40
 * @LastEditTime: 2020-06-03 13:41:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \npm发布\vui\packages\Button\index.js
 */ 
import ZButton from './src/index'
ZButton.install = function(Vue){
  Vue.component(ZButton.name, ZButton)
}
export default ZButton