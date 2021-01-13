import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/economy.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/economy',
    name: 'economy',
    component: () => import(/* webpackChunkName: "about" */ '../views/economy.vue')
  },
  {
    path: '/transport',
    name: 'transport',
    component: () => import(/* webpackChunkName: "about" */ '../views/transport.vue')
  },
  {
    path: '/social',
    name: 'social',
    component: () => import('../views/social.vue')
  },
  {
    path: '/medical',
    name: 'medical',
    component: () => import('../views/medical.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/product.vue')
  },
  {
    path: '/government',
    name: 'government',
    component: () => import('../views/government.vue')
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/work.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
