import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Formulas from '../views/Formulas.vue'
import Books from '../views/Books.vue'
import Statistics from '../views/Statistics.vue'
import Info from '../views/Info.vue'
import Donate from '../views/Donate.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tablice',
    name: 'Formulas',
    component: Formulas,
  },
  {
    path: '/podreczniki',
    name: 'Books',
    component: Books,
  },
  {
    path: '/statystyki',
    name: 'Statistics',
    component: Statistics,
  },
  {
    path: '/informacje',
    name: 'Info',
    component: Info,
  },
  {
    path: '/wesprzyj',
    name: 'Support',
    component: Donate,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
