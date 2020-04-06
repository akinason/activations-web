import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { bus } from '../main';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
      path: '/software/:id',
      name: 'Software',
      component: () => import(/* webpackChunkName: "about" */ '@/components/SoftwareComponent'),
    },
  ],
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    bus.$emit('toggleLoading');
  }
  next();
});

router.afterEach(() => {
  bus.$emit('toggleLoading');
});

export default router;
