import Vue from "vue";
import VueRouter from "vue-router";
import VueApollo from "vue-apollo";
import Vuetify from "vuetify";
import apolloClient from "./vue-apollo";
import App from "./App.vue";
import vuetify from './plugins/vuetify';
import VueObserveVisibility from 'vue-observe-visibility'


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueApollo);
Vue.use(Vuetify);
Vue.use(VueObserveVisibility);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const router = new VueRouter({
  mode: "history",
  routes: [
    // {
    //   path: "/",
    //   components: require("./containers/Articles.vue")
    // },
    // {
    //   path: "/article/:id",
    //   components: require("./containers/Article.vue")
    // },
    // {
    //   path: "/category/:id",
    //   components: require("./containers/Category.vue")
    // }
  ]
});

new Vue({
  apolloProvider,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");