import { PokemonModel } from './models/Pokemon/Pokemon.model'
import { connect, disconnect } from './config/database'
;(async () => {
  connect()

  const Pokemons = [
    {
      number: '1',
      name: 'Bulbasauro',
      generation: '1',
      image: 'http://google.com',
    },
    {
      number: '2',
      name: 'Ivisauro',
      generation: '1',
      image: 'http://google.com',
    },
  ]

  try {
    for (const pokemon of Pokemons) {
      await PokemonModel.create(pokemon)
      console.log(`Created pokemon ${pokemon.name} ${pokemon.number}`)
    }

    disconnect()
  } catch (error) {
    console.error(error)
  }
})()
