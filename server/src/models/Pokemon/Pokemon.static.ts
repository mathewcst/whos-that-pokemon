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
      generation: getGeneration(id),
      image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
    })
  }
}

function getGeneration(number: number): string {
  let generation: string

  if (number <= 151) {
    generation = '1'
  } else if (number > 151 && number <= 251) {
    generation = '2'
  } else if (number > 251 && number <= 386) {
    generation = '3'
  } else if (number > 386 && number <= 493) {
    generation = '4'
  } else if (number > 493 && number <= 649) {
    generation = '5'
  } else if (number > 649 && number <= 721) {
    generation = '6'
  } else if (number > 721 && number <= 809) {
    generation = '7'
  } else if (number > 809 && number <= 898) {
    generation = '8'
  }

  return generation
}
