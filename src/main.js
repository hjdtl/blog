// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from './config/axios'
import '@/assets/common.css'
import './assets/font_697398_tp17jhc1v7e/iconfont.css'
import './assets/font_697398_tp17jhc1v7e/iconfont'
import hljs from 'highlight.js'
import 'highlight.js/styles/dracula.css'
import {vDatecounter} from 'datecounter'
import '@/assets/styles/hack.css'
// import '@/assets/styles/white.css'

Vue.use(vDatecounter)

// axios.defaults.baseURL = 'http://www.asheicy.com:4000'
Vue.prototype.$axios = axios

Vue.directive('highlight', el => {
  let target = el.querySelectorAll('pre code')
  for (let i of target) {
    hljs.highlightBlock(i)
  }
  target.forEach(t => {
    t.className = 'hljs'
  })
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
