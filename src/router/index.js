
import AboutViewVue from '@/views/frontend/AboutView.vue'
import HomeViewVue from '@/views/frontend/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
  ]
})

export default router
