import Vue from 'vue';
import App from './App.vue';

Vue.config.devtools = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
