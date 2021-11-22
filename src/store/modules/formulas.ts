import { StoreModule } from '../types'

const formulas: StoreModule = {
  state: {
    // filterFormulasPage:
    //   localStorage.getItem('appLanguage') ||
    //   '999',
  },
  getters: {
    // getAppLanguage: (state: any) => state.appLanguage,
  },
  mutations: {
    // setAppLanguage(state: { appLanguage: any }, language: string) {
    //   state.appLanguage = language
    //   localStorage.setItem('language', language) // Whenever we change the appLanguage we save it to the localStorage
    // },
  },
  actions: {},
}
export default formulas
