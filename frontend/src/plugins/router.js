import Vue from 'vue';
import VueRouter from 'vue-router';
import { auth } from '../firebase';

import Landing from '../pages/Landing.vue';
import Login from '../pages/Login.vue';
import ManageAccount from '../pages/ManageAccount.vue';
import Register from '../pages/Register.vue';
import Story from '../pages/Story.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/manage',
    name: 'Manage Account',
    component: ManageAccount,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/story',
    name: 'Story',
    component: Story,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => {
    return x.meta.requiresAuth;
  });

  if (requiresAuth && !auth.currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
