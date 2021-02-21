import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Index from '~/pages/index.vue';

const routes = [
  { path: '/', component: Index }
]

export default new VueRouter({
  mode: 'history',
  routes
})
