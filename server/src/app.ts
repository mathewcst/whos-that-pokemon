import express from 'express'
import { connect } from '@config/database'

const app = express()
const db = connect()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' })
})

app.get('/:id', async (request, response) => {
  const number = request.params.id

  const pokemon = await db.PokemonModel.findOneByNumber(number)

  response.json(pokemon)
})

app.listen(3333)
