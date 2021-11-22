import { createStore } from 'vuex'
import { Store } from './types'
import modules from './modules'

const store: Store = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules,
}

export default createStore(store)
