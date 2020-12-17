import Vue from 'vue';
import VueRouter from 'vue-router';

import Landing from '../components/Landing.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Story from '../components/Story.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Register',
      component: Register,
    },
    {
      path: '/story',
      name: 'Story',
      component: Story,
    },
  ],
});
