import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Page1 from './pages/Page1.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/page1',
      component: Page1
    }
  ]
})

export default router