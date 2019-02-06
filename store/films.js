import axios from 'axios'
import { getIdFromUrl } from '@/helpers/index'

export const state = () => ({
  films: [],
  nextPage: null,
  prevPage: null,
  count: 0,
  loaded: false
})

export const actions = {
  async FETCH_MANY({ commit }) {
    commit('SET_LOADED', false)
    const { data } = await axios.get(`https://swapi.co/api/films/`)
    commit('SET_FILMS', data)
  }
}

export const mutations = {
  SET_LOADED(_state, loaded) {
    _state.loaded = loaded
  },
  SET_FILMS(_state, data) {
    _state.films = data.results.map(film => ({ ...film, id: getIdFromUrl(film.url) }))
    _state.nextPage = data.next
    _state.prevPage = data.previous
    _state.count = data.count
    _state.loaded = true
  }
}
