import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import Buefy from 'buefy'
import Meta from 'vue-meta'
import 'buefy/lib/buefy.css'
import App from './components/App'
import router from './router'
import store from './store'

Vue.use(Buefy)
Vue.use(Meta)

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
