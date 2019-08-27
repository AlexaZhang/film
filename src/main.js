import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores/store'
import axios from './config/http.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.prototype.axios=axios
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})
import Scroller from '@/components/Scroller';
import Loading from '@/components/Loading';
Vue.component('Scroller',Scroller)
Vue.component('Loading',Loading)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


