import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'

createApp(App).use(VueGtag, {
    config: { id: "G-VV595J32VW" }
  }).mount('#app')
