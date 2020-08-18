import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';
import Vuetify from 'vuetify';
import VueObserveVisibility from 'vue-observe-visibility'

import App from './App.vue';
import router from './plugins/router';
import apolloClient from './vue-apollo';
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueApollo);
Vue.use(Vuetify);
Vue.use(VueObserveVisibility);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  router,
  apolloProvider,
  vuetify,
  render: h => h(App)
}).$mount("#app");