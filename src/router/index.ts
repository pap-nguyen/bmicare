import { createRouter, createWebHistory } from '@ionic/vue-router';
import type { RouteRecordRaw } from 'vue-router';

import AboutPage from '../pages/AboutPage.vue';
import BmiCalcPage from '../pages/BmiCalcPage.vue';
import ChartPage from '../pages/ChartPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/bmi'
  },
  {
    path: '/bmi',
    component: BmiCalcPage
  },
  {
    path: '/chart',
    component: ChartPage
  },
  {
    path: '/about',
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
