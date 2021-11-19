const state = {
  appLanguage:
    localStorage.getItem('appLanguage') ||
    process.env.VUE_APP_I18N_LOCALE ||
    'en',
}

export default state
