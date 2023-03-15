import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// to use global filters
Vue.filter('Ucase', (val)=> val.toUpperCase());

Vue.filter('currencyConverter', (val) => val*80)

new Vue({
  render: h => h(App),
}).$mount('#app')
