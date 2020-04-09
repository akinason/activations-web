import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SoftwareComponent from '@/components/SoftwareComponent';
import BillingComponent from '@/components/BillingComponent';
import ConfirmBillingComponent from '@/components/ConfirmBillingComponent';
import { bus } from '../main';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/software',
      name: 'Home',
      alias: '/',
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
    {
      path: '/software/:software_id/license/:license_id',
      name: 'ConfirmBilling',
      component: ConfirmBillingComponent,
    },
    {
      path: '/software/payment/:id',
      name: 'SuccessPayment',
      component: () => import(/* webpackChunkName: "success-payment" */ '../views/PaymentSuccess'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/');
  } else {
    next();
  }
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
