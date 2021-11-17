import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)
createApp(App).mount('#app')