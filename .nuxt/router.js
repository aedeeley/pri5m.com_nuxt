import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1af5b318 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _36d2216b = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _80656180 = () => interopDefault(import('../pages/playground.vue' /* webpackChunkName: "pages/playground" */))
const _70685fa3 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _267d6356 = () => interopDefault(import('../pages/work.vue' /* webpackChunkName: "pages/work" */))
const _3aad8ddd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1af5b318,
    name: "about"
  }, {
    path: "/contact",
    component: _36d2216b,
    name: "contact"
  }, {
    path: "/playground",
    component: _80656180,
    name: "playground"
  }, {
    path: "/services",
    component: _70685fa3,
    name: "services"
  }, {
    path: "/work",
    component: _267d6356,
    name: "work"
  }, {
    path: "/",
    component: _3aad8ddd,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
