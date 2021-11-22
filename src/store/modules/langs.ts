import { StoreModule } from '../types'

const langs: StoreModule = {
  state: {
    appLanguage:
      localStorage.getItem('appLanguage') ||
      process.env.VUE_APP_I18N_LOCALE ||
      'en',
  },
  getters: {
    getAppLanguage: (state: any) => state.appLanguage,
  },
  mutations: {
    setAppLanguage(state: { appLanguage: any }, language: string) {
      state.appLanguage = language
      localStorage.setItem('language', language) // Whenever we change the appLanguage we save it to the localStorage
    },
  },
  actions: {},
}

export default langs
