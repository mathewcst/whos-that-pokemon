/* eslint-disable @typescript-eslint/no-empty-interface */
import { Document, Model } from 'mongoose'

export interface IPokemon {
  number: string
  name: string
  generation: string
  image: string
}

export interface IPokeDoc extends IPokemon, Document {
  sameNumber: (this: IPokeDoc) => Promise<Document[]>
}
export interface IPokeModel extends Model<IPokeDoc> {
  findOneByNumber: (
    this: IPokeModel,
    {
      number,
      name,
      generation,
      image,
    }: { number: string; name: string; generation: string; image: string }
  ) => Promise<IPokeDoc>
}
