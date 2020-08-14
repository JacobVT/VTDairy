import Vue from 'vue';
import VueRouter from 'vue-router';

import Landing from "../components/Landing.vue";

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{ 
			path: '/', 
			name: 'Landing',
			component: Landing,
		},
	]
});