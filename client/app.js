import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
