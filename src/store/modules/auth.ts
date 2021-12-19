import { StoreOptions } from 'vuex'
import Cookies from 'js-cookie'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import { User } from '@/types/user'

const auth: StoreOptions<{ user: User | null }> = {
  state: {
    user: Cookies.get('jwt')
      ? jwtDecode<JwtPayload & { user: User }>(Cookies.get('jwt')!)?.user
      : null,
  },
  getters: {
    getUser: (state) => state.user,
  },
  mutations: {},
  actions: {},
}
export default auth
