import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false //不显示控制台非生产环境打包的提示

new Vue({
  render: h => h(App),
}).$mount('#app')
