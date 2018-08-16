import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeRole: null,
  },
  mutations: {
    setActiveRole(state, val) {
      state.activeRole = val
    },
  },
  actions: {
    setActiveRole({commit}, val) {
      commit('setActiveRole', val)
    },
  },
})
