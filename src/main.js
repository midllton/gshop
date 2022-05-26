import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false //不显示控制台非生产环境打包的提示

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
