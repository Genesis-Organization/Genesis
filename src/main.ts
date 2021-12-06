import { createApp } from 'vue'
import App from './App.vue'
import './config/service-worker'
import router from './router'
import store from './store'

import i18n from './config/i18n'
import VueSmoothScroll from 'vue3-smooth-scroll'

import FontAwesomeIcon from './utilities/FontsAwesome'

createApp(App)
  .use(i18n)
  .use(VueSmoothScroll)
  .component('ic', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app')
