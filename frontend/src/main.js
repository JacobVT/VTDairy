import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import VueObserveVisibility from 'vue-observe-visibility';
import firebase from 'firebase/app';

import App from './App.vue';
import router from './plugins/router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

const configOptions = {
  apiKey: 'AIzaSyAuxybsjiKo0zG9bTiH_NiaRwkDWaCHn2A',
  authDomain: 'vt-dairy.firebaseapp.com',
  projectId: 'vt-dairy',
  storageBucket: 'vt-dairy.appspot.com',
  messagingSenderId: '378857198049',
  appId: '1:378857198049:web:cb35a58d29af5af12d02a0',
  measurementId: 'G-SWYE9262LG',

};

firebase.initializeApp(configOptions);

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
