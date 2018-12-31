import Vue from 'vue'
import store from './store'
import router from './components'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'element-closest'
import App from './App.vue'


Vue.use(ElementUI)

Vue.component('vMarkdownEditor', () => import('./components/MarkdownEditor'))

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  store,
  router,
  render: h => h(App)
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
