var pending = false

export const state = () => ({
  list: [],
  relateds: []
})

export const mutations = {
  GET_ALL (state, data) {
    if (data.push) {
      data.portfolios.forEach(el => {
        state.list.push(el)
      })
    } else {
      state.list = data.portfolios
    }
    // console.log('finishing')
    pending = false
  },
  RELATEDS (state, data) {
    state.relateds = data
  }
}

export const getters = {}

var oldParams = {}

export const actions = {
  async getAll ({ rootGetters, commit, state }, params) {
    if (pending) return // console.log('pending')
    pending = true

    params.offset = state.list.length

    let requestParams = {}

    if (params) {
      let resetOffset = false

      if (params.servicio && rootGetters['services/getBySlug'](params.servicio)) {
        let el = rootGetters['services/getBySlug'](params.servicio)
        if (oldParams['services'] !== el.id) resetOffset = true
        requestParams['services'] = el.id
      }

      if (params.sector && rootGetters['sectors/getBySlug'](params.sector)) {
        let el = rootGetters['sectors/getBySlug'](params.sector)
        if (oldParams['sectors'] !== el.id) resetOffset = true
        requestParams['sectors'] = el.id
      }

      if (params.actividad && rootGetters['countries/getBySlug'](params.actividad)) {
        let el = rootGetters['countries/getBySlug'](params.actividad)
        if (oldParams['countries'] !== el.id) resetOffset = true
        requestParams['countries'] = el.id
      }

      if (params.pais && rootGetters['countries/getBySlug'](params.pais)) {
        let el = rootGetters['countries/getBySlug'](params.pais)
        if (oldParams['countries'] !== el.id) resetOffset = true
        requestParams['countries'] = el.id
      }

      if (params.localidad && rootGetters['countries/locations/getBySlug'](params.localidad)) {
        let el = rootGetters['countries/locations/getBySlug'](params.localidad)
        if (oldParams['locations'] !== el.id) resetOffset = true
        requestParams['locations'] = el.id
      }

      if (resetOffset && params.offset !== 0) {
        params.offset = 0
      }
    }

    let portfolios

    try {
      let url = 'portfolios/custom-search?offset=' + params.offset + '&limit=9'

      portfolios = await this.$axios.$get(url, {
        params: requestParams
      })

      oldParams = requestParams

      if (params.offset === 0) {
        return commit('GET_ALL', {portfolios: portfolios})
      }

      commit('GET_ALL', {portfolios: portfolios, push: true})
    } catch (error) {
      if (error.response.status === 404) commit('GET_ALL', {portfolios: [], push: true})
    }
  },
  async getRelateds ({ rootGetters, commit, state }, params) {
    let url = 'portfolios/custom-search?limit=8&service=' + params.serviceSlug

    try {
      let portfolios = await this.$axios.$get(url)
      commit('RELATEDS', portfolios)
    } catch (error) {
      console.log(error)
      commit('RELATEDS', [])
    }
  }
}
