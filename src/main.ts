import { createApp } from 'vue'
import App from './App.vue'
import './config/service-worker'
import router from './router'
import store from './store'
import i18n from './config/i18n'
// import { createMetaManager } from 'vue-meta'

createApp(App)
  .use(i18n)
  // .use(createMetaManager())
  .use(store)
  .use(router)
  .mount('#app')
