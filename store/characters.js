import axios from 'axios'
import { getIdFromUrl } from '@/helpers/index'

export const state = () => ({
  selected: undefined,
  characters: [],
  nextPage: null,
  prevPage: null,
  count: 0
})

export const actions = {
  async FETCH_ONE({ commit }, id) {
    const { data } = await axios.get(`https://swapi.co/api/people/${id}/`)
    commit('SET_SELECTED_CHARACTER', data)
  },
  async FETCH_MANY({ commit }, page) {
    const { data } = await axios.get(`https://swapi.co/api/people/?page=${page || 1}`)
    commit('SET_CHARACTERS', data)
  }
}

export const mutations = {
  SET_SELECTED_CHARACTER(_state, character) {
    _state.selected = { ...character, id: getIdFromUrl(character.url) }
  },
  SET_CHARACTERS(_state, data) {
    _state.characters = data.results.map(character => ({ ...character, id: getIdFromUrl(character.url) }))
    _state.nextPage = data.next
    _state.prevPage = data.previous
    _state.count = data.count
  }
}
