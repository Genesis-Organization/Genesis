import { createStore, StoreOptions } from 'vuex'
import modules from './modules'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store: StoreOptions<any> = {
  modules,
}

export default createStore(store)
