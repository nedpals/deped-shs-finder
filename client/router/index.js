import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/Home')
const NotFound = () => import('../views/NotFound')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
