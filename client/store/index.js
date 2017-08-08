import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  schools: [],
  regions: [
    'ARMM',
    'CAR',
    'Caraga',
    'NCR',
    'NIR',
    'Region I',
    'Region II',
    'Region III',
    'Region IV-A',
    'Region IV-B',
    'Region V',
    'Region VI',
    'Region VII',
    'Region VIII',
    'Region IX',
    'Region X',
    'Region XI',
    'Region XII'
  ],
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
  loadData({ commit }, page) {
    axios.get("https://shs-k12-api.now.sh/schools?_page=" + page.toString())
      .then((response) => {
        commit('LOAD', response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
