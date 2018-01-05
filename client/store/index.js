import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import fetchApi from '../helpers/fetchApi'

Vue.use(Vuex)

const state = {
  search: {
    query: '',
    region: '',
    province: '',
    municipality: '',
    programs: []
  },
  schools: [],
  regions: [],
  municipalities: [],
  provinces: [],
  programs: [
    'ABM',
    'HUMSS',
    'GAS',
    'TVL',
    'Arts and Design',
    'Sports'
  ]
}

const mutations = {
  LOAD (state, data) {
    state.schools.push(...data)
  }
}

const actions = {
  loadData ({ commit }, page) {
    fetchApi().get('/schools', { params: { _sort: 'school_name', _page: page.toString() }})
      .then((response) => {
        commit('LOAD', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const getters = {
  limitData: (state, getters) => (num) => {
    return state.schools.slice(0, num)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
