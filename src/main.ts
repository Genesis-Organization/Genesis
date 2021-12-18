import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import i18n from './config/i18n'
import VueSmoothScroll from 'vue3-smooth-scroll'
import scrollsettings from './config/scroll'
import Notifications from '@kyvg/vue3-notification'

import FontAwesomeIcon from './utilities/FontsAwesome'

import 'katex/dist/katex.min.css'
import './config/service-worker'

createApp(App)
  .use(i18n)
  .use(Notifications)
  .use(VueSmoothScroll, scrollsettings)
  .component('ic', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app')
