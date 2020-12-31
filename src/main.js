import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from './router'
import store from './store';
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
