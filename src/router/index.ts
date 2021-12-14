import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import formulasRoutes from './modules/formulas'
import errors from './modules/errors'
import users from './modules/users'

import hideForAuth from './middlewares/auth'

import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import Statistics from '../views/Statistics.vue'
import Info from '../views/Info.vue'
import Articles from '../views/Articles.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  formulasRoutes,
  {
    path: '/articles',
    name: 'Article',
    component: Articles,
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics,
  },
  {
    path: '/info',
    name: 'Info',
    component: Info,
  },
  users,
  errors,
].flat()

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(hideForAuth)

export default router
