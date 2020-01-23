export const state = {
  layout: 'blank-layout',
  version: process.env.VUE_APP_VERSION,
  intervals: {},
  loading: false
}

const getters = {}


export const mutations = {
  SET_LAYOUT (state, payload = 'default') {
    state.layout = `${payload}-layout`
  },
  SET_LOADING (state, payload = false) {
    state.loading = payload
  }
}

const actions = {}

export default {
  state,
  getters,
  actions,
  mutations
};
