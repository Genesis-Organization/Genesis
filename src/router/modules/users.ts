import { RouteRecordRaw } from 'vue-router'

import Register from '@/views/user/Register.vue'
import Login from '@/views/user/Login.vue'

const users: RouteRecordRaw[] = [
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

export default users
