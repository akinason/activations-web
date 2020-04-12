import Vue from 'vue';
import App from './App.vue';
import VueTelInput from 'vue-tel-input';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueTelInput);
export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
