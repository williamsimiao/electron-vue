import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  base: process.env.VUE_APP_BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/csp',
      name: 'csp',
      component: () => import(/* webpackChunkName: "home" */ './pages/CSPPages/CSPPage')
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: () => import(/* webpackChunkName: "home" */ './pages/CertificatesPages/CertificatePage')
    },
    {
      path: '/client',
      name: 'client',
      component: () => import(/* webpackChunkName: "home" */ './pages/ClientPages/ClientPage')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "home" */ './pages/AboutPages/AboutPage')
    },
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('SET_LOADING', true)
  store.commit('SET_LAYOUT', to.meta.layout)
  return next()
})

router.afterEach(() => {
  store.commit('SET_LOADING', false)
})

export default router