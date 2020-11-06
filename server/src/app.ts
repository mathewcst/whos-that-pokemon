import express from 'express'
import { connect } from '@config/database'

const app = express()
const db = connect()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' })
})

app.get('/pokemon/:id', async (request, response) => {
  const number = request.params.id

  if (parseInt(number) > 893) {
    response.send({ message: "Pokemon doesn't exist" })
  } else {
    const pokemon = await db.PokemonModel.findOneByNumber(number)

    response.json(pokemon)
  }
})

const port = process.env.PORT || 3333

app.listen(port)
