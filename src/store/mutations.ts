const mutations = {
  setAppLanguage(state: { appLanguage: any }, language: string) {
    state.appLanguage = language
    localStorage.setItem('language', language) // Whenever we change the appLanguage we save it to the localStorage
  },
}

export default mutations
