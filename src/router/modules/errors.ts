import { RouteRecordRaw } from 'vue-router'
import PageNotFound from '@/views/Errors/PageNotFound.vue'

const errors: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: PageNotFound,
  },
]

export default errors
