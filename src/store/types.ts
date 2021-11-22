export interface StoreModule {
  state: {
    [key: string]: any
  }
  getters: {
    [key: string]: any
  }
  mutations: {
    [key: string]: any
  }
  actions: {
    [key: string]: any
  }
}

export interface Store extends StoreModule {
  modules: {
    [key: string]: StoreModule
  }
}
