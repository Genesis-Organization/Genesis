/* eslint-disable */

import { StoreOptions } from 'vuex'

const langs: StoreOptions<any> = {
  state: {
    appLanguage:
      localStorage.getItem('appLanguage') ||
      process.env.VUE_APP_I18N_LOCALE ||
      'en',
  },
  getters: {
    getAppLanguage: (state) => state.appLanguage,
  },
  mutations: {
    setAppLanguage(state, language: string) {
      state.appLanguage = language
      localStorage.setItem('language', language) // Whenever we change the appLanguage we save it to the localStorage
    },
  },
  actions: {},
}

export default langs
