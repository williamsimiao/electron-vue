const state = {
  locale: 'pt-BR',
  locales: ['pt-BR', 'en-US']
}

const getters = {
  getLocale: state => state.locale
}

const actions = {
  SET_LOCALE (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
      window.localStorage.setItem('locale', locale)
    }
  }
}

const mutations = {
  init ({ commit }) {
    const locale = window.localStorage.getItem('locale')
    locale && commit('SET_LOCALE', locale)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};