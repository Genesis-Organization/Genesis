import { RouteRecordRaw } from 'vue-router'

import Login from '@/views/User/Auth/Login.vue'
import Register from '@/views/User/Auth/Register.vue'
import Logout from '@/views/User/Auth/Logout.vue'
import User from '@/views/User/User.vue'
import Settings from '@/views/User/Settings.vue'

const users: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
  {
    path: '/users/:login',
    name: 'User',
    component: User,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
]

export default users
