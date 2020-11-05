import { Schema } from 'mongoose'
import { findOneByNumber } from './Pokemon.static'
import { sameNumber } from './Pokemon.methods'

const PokemonSchema = new Schema(
  {
    number: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    generation: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
)

PokemonSchema.statics.findOneByNumber = findOneByNumber

PokemonSchema.methods.sameNumber = sameNumber

export default PokemonSchema
