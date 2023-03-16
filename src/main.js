import Vue from 'vue'
import App from './App.vue';
import { router } from './Routing';


Vue.config.productionTip = false
// to use global filters
Vue.filter('Ucase', (val)=> val.toUpperCase());

Vue.filter('currencyConverter', (val) => val*80);



new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
