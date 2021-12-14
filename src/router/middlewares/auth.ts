import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import Cookies from 'js-cookie'

const hideForAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  if (to.path === '/register' || to.path === '/login') {
    if (Cookies.get('jwt')) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
}

export default hideForAuth
