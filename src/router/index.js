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
      ]
    }
  ]
})

export default router
