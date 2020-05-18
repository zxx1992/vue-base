<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-05-14 17:03:39
--> 
<template>
  <div class="hello">
    <h2>1,2</h2>
    <h1 @click="handleClick" :title="title">{{ msg }}</h1>
    <a-button type="primary">Button</a-button>
    <input v-model="content" />
    <h2>3, 4</h2>姓：
    <input v-model="firstName" />
    名：
    <input v-model="lastName" />
    <div>{{fullName}}</div>
    <div>{{counte}}</div>
    <h2>5</h2>
    <div v-if="show">v-if和v-show</div>
    <a-button type="primary" @click="handleClick">toggle</a-button>
    <h2>6</h2>
    <ul>
      <li v-for="(item, index) of list" :key="index">{{item}}</li>
    </ul>
    <h2>7</h2>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from '../../src/views/todolist'
export default {
  name: 'HelloWorld',
  components: { TodoList },
  data() {
    return {
      msg: 'hello',
      title: 'title',
      content: 'this is content',
      firstName: '',
      lastName: '',
      counte: 0,
      show: true,
      list: [1, 2, 3]
    }
  },
  computed: {
    fullName() {
      return this.firstName + this.lastName
    }
  },
  methods: {
    handleClick() {
      this.show = !this.show
    }
  },
  watch: {
    fullName() {
      this.counte++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
// 注释：
// 1 v-bind 单向绑定
// 2 v-model 双向数据绑定：页面和数据互相影响
// 3 计算属性：只跟他相关的属性有关（即：计算属性通过相关的属性计算而来）
// 4 侦听器：通过监听某一属性的变化，来进行操作
// 5 v-show:{display:none/block}; v-if:dom树上面直接移除和添加
// 6 v-for: 数组循环显示，注意如果遇到增删改，key=index会有点问题
// 7 父子之间通信
// 8 全局和局部样式
