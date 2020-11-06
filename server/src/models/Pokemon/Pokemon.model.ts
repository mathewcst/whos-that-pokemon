import { model } from 'mongoose'
import { IPokeDoc, IPokeModel } from './Pokemon.types'
import PokemonSchema from './Pokemon.schema'

export const PokemonModel = model<IPokeDoc>(
  'pokemon',
  PokemonSchema
) as IPokeModel
