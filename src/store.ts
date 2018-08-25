import Vue from 'vue'
import Vuex, {Payload} from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export interface State {
  activeRole: any
  isBottomNavShown: boolean
}

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
  plugins: [(new VuexPersistence<State, Payload>({})).plugin],
})
