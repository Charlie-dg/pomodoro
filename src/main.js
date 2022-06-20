import { createApp } from 'vue'
// vite.config.js
import ViteRadar from 'vite-plugin-radar'
import pinia from './plugins/pinia'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { registerSW } from 'virtual:pwa-register'

registerSW({
  onNeedRefresh () {},
  onOfflineReady () {}
})()

loadFonts()

createApp(App)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .mount('#app')
