import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'views',
    //   component: () => import('../views/Views.vue')
    // },
  ]
})

export default router
