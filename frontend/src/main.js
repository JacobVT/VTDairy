import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import VueObserveVisibility from 'vue-observe-visibility';
import { firestorePlugin } from 'vuefire';
import { auth } from './firebase';

import App from './App.vue';
import router from './plugins/router';
import store from './plugins/store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueObserveVisibility);
Vue.use(firestorePlugin);

let app;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      auth,
      render: (h) => {
        return h(App);
      },
    }).$mount('#app');
  }

  if (user) {
    store.dispatch('fetchUserProfile', user);
  }
});
