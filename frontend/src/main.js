import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import VueObserveVisibility from 'vue-observe-visibility';

import App from './App.vue';
import router from './plugins/router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueObserveVisibility);

new Vue({
  router,
  vuetify,
  render: (h) => {
    return h(App);
  },
}).$mount('#app');
