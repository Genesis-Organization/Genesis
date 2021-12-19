/* eslint-disable */

import { CreateComponentPublicInstance } from 'vue'

const setLang = (app: CreateComponentPublicInstance<any>) => {
  const lang = localStorage.getItem('language')
  if (lang) {
    app.$i18n.locale = lang
    document.documentElement.setAttribute('lang', lang)
  } else {
    app.$i18n.locale = 'en'
    document.documentElement.setAttribute('lang', 'en')
  }
}

export default setLang
