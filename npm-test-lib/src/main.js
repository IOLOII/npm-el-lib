import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import npmtest from 'vue-cmop-base'
Vue.use(npmtest)

new Vue({
  render: h => h(App),
}).$mount('#app')
