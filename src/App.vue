<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-05-14 17:03:39
 * @Description: Do not edit
--> 
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

//  注释
// 1 挂载点 id元素
// 2 模板 挂载点内的内容
// 3 实例 包括挂载点 + 模板
// 4 v-text 等价于 {{}}
// 5 v-html