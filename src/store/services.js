import { default as logotipos } from './data-app/logotipos.js'
import { default as disenoWeb } from './data-app/diseno-web.js'
import { default as redesSociales } from './data-app/redes-sociales.js'
import { default as rotulos } from './data-app/rotulos.js'

export const state = () => ({
  list: [],
  groups: [
    {
      slug: 'logos',
      data: logotipos
    },
    {
      slug: 'diseno-web',
      data: disenoWeb
    },
    {
      slug: 'rotulos',
      data: rotulos
    },
    {
      slug: 'redes-sociales',
      data: redesSociales
    }
  ]
})

export const mutations = {
  GET_ALL (state, services) {
    state.list = services
  }
}

export const getters = {
  getBySlug: (state) => (slug) => {
    return state.list.find(el => el.slug === slug)
  }
}

export const actions = {
  async getAll ({ commit }) {
    try {
      let services = await this.$axios.$get('services?limit=1000')
      commit('GET_ALL', services)
    } catch (error) {
      console.log(error)
    }
  }
}
