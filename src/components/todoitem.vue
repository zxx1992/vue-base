<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-05-18 15:46:35
 * @Description: Do not edit
--> 
<template>
  <li @click="handleClick">{{item}}{{index}}</li>
</template>
<script>
export default {
  props: ['index', 'item'],
  methods: {
    handleClick() {
      this.$emit('delete', this.index)
    }
  }
}
</script>