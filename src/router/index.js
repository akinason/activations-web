import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SoftwareComponent from '@/components/SoftwareComponent';
import BillingComponent from '@/components/BillingComponent';
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
      component: () => import(/* webpackChunkName: "about" */ '../views/About'),
    },
    {
      path: '/software/:id',
      name: 'Software',
      component: SoftwareComponent,
    },
    {
      path: '/software/:id/license',
      name: 'Billing',
      component: BillingComponent,
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
