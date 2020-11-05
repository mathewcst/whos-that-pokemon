import express from 'express'
import { connect } from '@config/database'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' })
})

connect()

app.listen(3333)
