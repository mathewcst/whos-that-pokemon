import { IPokeDoc, IPokeModel } from './Pokemon.types'
import Pokedex from 'pokedex-promise-v2'

export async function findOneByNumber(
  this: IPokeModel,
  number: string
): Promise<IPokeDoc> {
  const record = await this.findOne({ number })

  if (record) return record
  else {
    const pkdex = new Pokedex()

    const pokemon = await pkdex.getPokemonByName(number)

    const { name, id } = pokemon

    return this.create({
      name,
      number: id,
      generation: __getGeneration(id),
      image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
    })
  }
}

function __getGeneration(number: number): string {
  let generation: string

  switch (true) {
    case number <= 151:
      generation = '1'
      break
    case number > 151 && number <= 251:
      generation = '2'
      break
    case number > 251 && number <= 386:
      generation = '3'
      break
    case number > 386 && number <= 493:
      generation = '4'
      break
    case number > 493 && number <= 649:
      generation = '5'
      break
    case number > 649 && number <= 721:
      generation = '6'
      break
    case number > 721 && number <= 809:
      generation = '7'
      break
    case number > 809 && number <= 893:
      generation = '8'
      break
    default:
      generation = '1'
      break
  }

  return generation
}
