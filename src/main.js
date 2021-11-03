// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import './assets/all.css'
Vue.config.productionTip = false
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
import ElementUI from 'element-ui'
import { Message } from 'element-ui'
Vue.prototype.$massage=Message
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
