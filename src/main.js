import Vue from 'vue'
import App from './App'
import router from './router'
import Http from './common/http'
Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$http', {value: Http});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
