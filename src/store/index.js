export const state = () => ({
  app: {
    links: {
      header: [
        { url: '/', title: 'INICIO' },
        { url: '/servicios', title: 'SERVICIOS' },
        { url: '/portafolio', title: 'PORTAFOLIO' },
        { url: '#contacto', title: 'CONTACTO' }
      ],
      headerMovil: [
        {
          url: false,
          title: 'Servicios',
          icon: 'list',
          sublinks: [
            { title: 'Logotipos', slug: 'logotipos' },
            { title: 'Diseño Web', slug: 'diseno-web' },
            { title: 'Redes Sociales', slug: 'redes-sociales' },
            { title: 'Rotulos', slug: 'rotulos' },
            { title: 'Servicios Profesionales', slug: 'servicios-profesionales' }
          ]
        },
        { url: '/portfolios', title: 'Portfolio', icon: 'important_devices' }
      ],
      whatsapp: '#'
    },
    drawer: false
  }
})

export const mutations = {
  TOGGLE_DRAWER (state, value) {
    state.app.drawer = value !== undefined ? value : !state.app.drawer
  }
}

export const getters = {
}

export const actions = {
  toggleDrawer ({ commit }, value) {
    commit('TOGGLE_DRAWER', value)
  },
  async nuxtServerInit ({ dispatch }, { $axios, req }) {
    let countries = []
    let countriesObj = {}
    try { countries = await $axios.$get('countries') } catch (error) {
      console.log(error)
      return
    }
    if (countries.length) {
      countries.forEach(country => {
        countriesObj[country.iso] = country
      })
    }
    let country = countriesObj[req.iso] ? countriesObj[req.iso] : countriesObj['US'] ? countriesObj['US'] : null
    dispatch('countries/setData', country)
  }
}
