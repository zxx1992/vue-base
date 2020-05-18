<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-05-18 15:46:15
 * @Description: Do not edit
--> 
<template>
  <div>
    <a-button type="primary" @click="handleClick">Button</a-button>
    <input v-model="inputVal" />
    <ul>
      <todo-item
        :item="item"
        :index="index"
        v-for="(item,index) of list"
        :key="index"
        @delete="handleDel"
      ></todo-item>
    </ul>
  </div>
</template>
<script>
import TodoItem from '../components/todoitem'
export default {
  components: { 'todo-item': TodoItem }, //注册组件
  data() {
    return {
      list: [],
      inputVal: ''
    }
  },
  methods: {
    handleClick() {
      this.list.push(this.inputVal)
      this.inputVal = ''
    },
    handleDel(index) {
      this.list.length > 0 && this.list.splice(index, 1)
    }
  }
}
</script>