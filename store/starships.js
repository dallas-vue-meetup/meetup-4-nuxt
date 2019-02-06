import axios from 'axios'
import { getIdFromUrl } from '@/helpers/index'

export const state = () => ({
  starships: [],
  nextPage: null,
  prevPage: null,
  count: 0,
  loaded: false
})

export const actions = {
  async FETCH_MANY({ commit }, urls) {
    commit('SET_LOADED', false)
    const requests = urls.map(url => axios.get(url))
    const results = await axios.all(requests)
    const data = results.map(result => result.data)
    commit('SET_STARSHIPS', data)
  }
}

export const mutations = {
  SET_LOADED(_state, loaded) {
    _state.loaded = loaded
  },
  SET_STARSHIPS(_state, data) {
    _state.starships = data.map(starship => ({ ...starship, id: getIdFromUrl(starship.url) }))
    _state.nextPage = data.next
    _state.prevPage = data.previous
    _state.count = data.count
    _state.loaded = true
  }
}
