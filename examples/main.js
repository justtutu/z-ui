/*
 * @Author: your name
 * @Date: 2020-06-02 17:34:27
 * @LastEditTime: 2020-06-03 11:21:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \npm发布\vui\examples\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import zui from '../packages'
Vue.use(zui)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
