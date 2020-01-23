import Vuex from 'vuex'
import Vue from 'vue'
import locale from './modules/locale'
import ui from './modules/ui'

Vue.use(Vuex)
const modules = [locale, ui]
const store = new Vuex.Store({
  modules: {
    locale,
    ui
  }
})
// Automatically run the `init` action for every module,
// if one exists.
for (const moduleName of Object.keys(modules)) {
  if (modules[moduleName].actions && modules[moduleName].actions.init) {
    store.dispatch(`${moduleName}/init`)
  }
}

export default store
