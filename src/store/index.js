import Vuex from 'vuex'
import Vue from 'vue'
import locale from './modules/locale'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    locale
  }
})
