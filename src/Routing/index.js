import Vue from 'vue'
import VueRouter from 'vue-router'
import PageOne from '../Pages/PageOne.vue';
import PageTwo from '../Pages/PageTwo.vue';
import Settings from '../Pages/Settings.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageOne
    },
    {
      path: '/about',
      name: 'About',
      component: PageTwo
    },
    {
      path: '/settings',
      name: 'Settings',
      component:   Settings
    }
  ]
})