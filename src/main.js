/*
 * @Author: zhengxiaoxiao
 * @Date: 2020-05-14 17:03:39
 * @Description: Do not edit
 */
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
