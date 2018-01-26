import Vue from 'vue'
import Vuex from 'vuex'
import fetchApi from '../helpers/fetch-api'

Vue.use(Vuex)

const state = {
  search: {
    searchMode: false,
    submitted: {
      q: '',
      region: '',
      province: '',
      municipality: '',
      programs: []
    },
    results: []
  },
  schools: [],
  regions: [],
  municipalities: [],
  provinces: [],
  programs: [
    'ABM',
    'STEM',
    'HUMSS',
    'GAS',
    'TVL',
    'Arts and Design',
    'Sports'
  ],
  selectedSchool: []
}

const mutations = {
  LOAD (state, data) {
    state.schools.push(...data)
  },
  LOAD_SCHOOL (state, data) {
    state.selectedSchool = data
  },
  LOAD_RESULT (state, data) {
    state.search.results = data
  },
  SAVE_FILTER (state, data) {
    state.search.submitted = data
  },
  SWITCH_SEARCH (state, mode) {
    state.search.searchMode = mode
  }
}

const actions = {
  loadData ({ commit }, page) {
    fetchApi().get('/schools', { params: { _sort: 'school_name', _page: page.toString() }})
      .then(response => {
        commit('LOAD', response.data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  findSchoolById ({ commit }, schoolId) {
    fetchApi().get('/schools', { params: { 'school_id': schoolId }})
      .then(response => {
        commit('LOAD_SCHOOL', response.data[0])
      })
      .catch(err => {
        console.log(err)
      })
  },
  searchSchool ({ commit }, searchParams) {
    Object.keys(searchParams).forEach(key => (searchParams[key] === '') && delete searchParams[key])
    fetchApi().get('/schools', { params: searchParams })
      .then(response => {
        commit('LOAD_RESULT', response.data)
        console.log(searchParams)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const getters = {
  limitData: (state, getters) => num => {
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
