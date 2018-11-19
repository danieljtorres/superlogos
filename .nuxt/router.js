import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _3502733a = () => import('..\\src\\pages\\servicios-profesionales.vue' /* webpackChunkName: "pages_servicios-profesionales" */).then(m => m.default || m)
const _532c3120 = () => import('..\\src\\pages\\redes-sociales.vue' /* webpackChunkName: "pages_redes-sociales" */).then(m => m.default || m)
const _730127c6 = () => import('..\\src\\pages\\contacto.vue' /* webpackChunkName: "pages_contacto" */).then(m => m.default || m)
const _02fa6d54 = () => import('..\\src\\pages\\diseno-web.vue' /* webpackChunkName: "pages_diseno-web" */).then(m => m.default || m)
const _187cf10d = () => import('..\\src\\pages\\logotipos.vue' /* webpackChunkName: "pages_logotipos" */).then(m => m.default || m)
const _1192466b = () => import('..\\src\\pages\\rotulos.vue' /* webpackChunkName: "pages_rotulos" */).then(m => m.default || m)
const _9d147b2a = () => import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/servicios-profesionales",
			component: _3502733a,
			name: "servicios-profesionales"
		},
		{
			path: "/redes-sociales",
			component: _532c3120,
			name: "redes-sociales"
		},
		{
			path: "/contacto",
			component: _730127c6,
			name: "contacto"
		},
		{
			path: "/diseno-web",
			component: _02fa6d54,
			name: "diseno-web"
		},
		{
			path: "/logotipos",
			component: _187cf10d,
			name: "logotipos"
		},
		{
			path: "/rotulos",
			component: _1192466b,
			name: "rotulos"
		},
		{
			path: "/",
			component: _9d147b2a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
