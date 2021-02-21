import Vue from 'vue';
// import router from '~/routes';
import App from '~/App.vue';
// import plugins from '~/plugins';

Vue.config.productionTip = false;

new Vue({
  // router,
  // ...plugins,
  el: '#app',
  render: h => h(App)
})
