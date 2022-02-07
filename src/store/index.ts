import { createStore } from 'vuex'
import modules from './modules'

const store = {
  modules,
}

export default createStore(store)
