import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import SignPage from '../views/Sign.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Sign',
    component: SignPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
