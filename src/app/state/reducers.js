import Charmander from 'org.Charmander'
import { createReducer } from 'utils.redux'
import { LEVEL_UP, REQUEST_POKEDEX, REQUEST_POKEDEX_SUCCESS } from './actions'

export const pokedex = createReducer({
  isFetching: false,
  pokemon: {}
}, {
  [REQUEST_POKEDEX]: (state, { action }) => {
    return {
      ...state,
      isFetching: true
    }
  },

  [REQUEST_POKEDEX_SUCCESS]: (state, { payload }) => {
    const { pokemon } = payload
    let pokemonMap = {}

    pokemon.forEach(p => {
      pokemonMap[p.name] = p
    })

    return {
      ...state,
      isFetching: false,
      pokemon: pokemonMap
    }
  }
})

export const activePokemon = createReducer({
    pokemonName: 'Charmander',
    renderComponent: Charmander,
    level: 1
}, {
  [LEVEL_UP]: (state) => Object.assign({}, state, {level: state.level + 1})
})
