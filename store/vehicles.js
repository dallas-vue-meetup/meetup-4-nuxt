import axios from 'axios'
import { getIdFromUrl } from '@/helpers/index'

export const state = () => ({
  vehicles: [],
  nextPage: null,
  prevPage: null,
  count: 0,
  loaded: false
})

export const actions = {
  async FETCH_MANY({ commit }, urls) {
    const requests = urls.map(url => axios.get(url))
    const results = await axios.all(requests)
    const data = results.map(result => result.data)
    commit('SET_VEHICLES', data)
  }
}

export const mutations = {
  SET_VEHICLES(_state, data) {
    _state.vehicles = data.map(vehicle => ({ ...vehicle, id: getIdFromUrl(vehicle.url) }))
    _state.nextPage = data.next
    _state.prevPage = data.previous
    _state.count = data.count
    _state.loaded = true
  }
}
