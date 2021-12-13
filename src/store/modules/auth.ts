/* eslint-disable */

import Cookies from 'js-cookie'
import { StoreOptions } from 'vuex'

const formulas: StoreOptions<any> = {
  state: {
    jwt: Cookies.get('jwt')
  },
  getters: {
    getUser: (state) => { return state.jwt },
  },
  mutations: {},
  actions: {},
}
export default formulas
