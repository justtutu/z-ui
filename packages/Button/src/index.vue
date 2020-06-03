<!--
 * @Author: your name
 * @Date: 2020-06-02 17:41:34
 * @LastEditTime: 2020-06-03 11:32:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vui\packages\Button\src\index.vue
--> 
<template>
  <div>
    <button class="x-button">
      <slot></slot>
    </button>
  </div>
</template>

<script>

  export default {
    name:'z-button'
  }
</script>

<style  scoped>
.x-button{
  display: inline-block;
  padding: 5px 8px;
  background: #111;
  color: #fff;
  border: none;
  outline: none;
}
</style>