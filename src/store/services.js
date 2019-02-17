export const state = () => ({
  list: [],
  groups: [
    { slug: 'logos' },
    { slug: 'diseno-web' },
    { slug: 'rotulos' },
    { slug: 'redes-sociales' }
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
