import { Module, VuexModule } from 'vuex-module-decorators'

import Cookies from 'js-cookie'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import { User } from '@/types/user'

@Module({ name: 'auth' })
class AuthModule extends VuexModule {
  user = Cookies.get('jwt')
    ? jwtDecode<JwtPayload & { user: User }>(Cookies.get('jwt')!)?.user
    : null

  get getUser(): User | null {
    return this.user
  }
}

export default AuthModule
