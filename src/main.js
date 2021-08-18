import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router';
import '@/styles/common.css' // global css
import less from 'less'
// import NProgress from 'nprogress' // progress bar
// import getPageTitle from '@utils/get-page-title'

// router.beforeEach(async(to, from, next)=>{
//   NProgress.start()
//   document.title = getPageTitle(to.name)
//   next()
// })

// router.beforeEach(()=>{
//   NProgress.done()
// })

Vue.use(ElementUI)
Vue.use(less)
Vue.config.productionTip = false

// 不会被复用
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
