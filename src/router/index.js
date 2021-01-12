import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/economy.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/transport',
    name: 'transport',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/transport.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
