import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/panel',
      name: 'panel',
      component: () => import('../layouts/UserPanel.vue'),
      children:[
        {path: '', name:'Profile',component: () => import('../views/UserPanel/Profile.vue')},
        {path: 'finance', name:'Finance',component: () => import('../views/UserPanel/Finance.vue')},
        {path: 'forgotreceipt', name:'ForgotReceipt',component: () => import('../views/UserPanel/ForgotReceipt.vue')},
        {path: 'foodreserve', name:'FoodReserve',component: () => import('../views/UserPanel/FoodReserve.vue')},
        {path: 'dailyreserve', name:'DailyReserve',component: () => import('../views/UserPanel/DailyReserve.vue')},
      
      ]
    }
  ]
})

export default router
