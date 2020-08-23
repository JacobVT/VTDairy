import Vue from 'vue';
import VueRouter from 'vue-router';

import Landing from '../components/Landing.vue';
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
      path: '/story',
      name: 'Story',
      component: Story,
    },
  ],
});
