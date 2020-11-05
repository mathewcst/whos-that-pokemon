import { Document } from 'mongoose'
import { IPokeDoc } from './Pokemon.types'

export async function sameNumber(this: IPokeDoc): Promise<Document[]> {
  return this.model('pokemon').find({ number: this.number })
}
