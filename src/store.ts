import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeRole: null,
    isBottomNavShown: true,
  },
  mutations: {
    setActiveRole(state, val) {
      state.activeRole = val
    },
    setBottomNavShown(state, val) {
      state.isBottomNavShown = val
    },
  },
  actions: {
    setActiveRole({commit}, val) {
      commit('setActiveRole', val)
    },
    setBottomNavShown({commit}, val) {
      commit('setBottomNavShown', val)
    },
  },
})
