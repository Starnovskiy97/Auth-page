import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/pages/homePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/loginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/registerPage.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/pages/usersPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
