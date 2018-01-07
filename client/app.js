import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import Buefy from 'buefy'
import Meta from 'vue-meta'
import 'buefy/lib/buefy.css'
import App from './components/App'
import router from './router'
import store from './store'

Vue.component(Buefy.Modal.name, Buefy.Modal)
Vue.component(Buefy.Message.name, Buefy.Message)
Vue.component(Buefy.Field.name, Buefy.Field)
Vue.component(Buefy.Loading.name, Buefy.Loading)
Vue.component(Buefy.CheckboxButton.name, Buefy.CheckboxButton)

Vue.use(Meta, {
  keyName: 'metaInfo'
})

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
