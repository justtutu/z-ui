/*
 * @Author: your name
 * @Date: 2020-06-03 11:04:26
 * @LastEditTime: 2020-06-03 14:04:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \npm发布\vui\packages\index.js
 */

import ZButton from './Button';
const components = [ZButton];

const install = function(Vue) {
  if (install.installed) return;
  components.map((component) => Vue.component(component.name, component));
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  ZButton,
};

//
