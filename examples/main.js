import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// ... ...
import '../packages/theme/index.scss';
import testComp from '../packages';

Vue.use(testComp);
// ... ...



new Vue({
  render: h => h(App),
}).$mount('#app')
