import { model } from 'mongoose'
import { IPokeDoc } from './Pokemon.types'
import PokemonSchema from './Pokemon.schema'

export const PokemonModel = model<IPokeDoc>('pokemon', PokemonSchema)
