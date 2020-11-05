import { IPokeDoc, IPokeModel } from './Pokemon.types'

export async function findOneByNumber(
  this: IPokeModel,
  number: string
): Promise<IPokeDoc> {
  const record = await this.findOne({ number })

  if (record) return record
  else {
    return null
  }
}
