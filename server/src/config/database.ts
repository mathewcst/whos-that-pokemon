/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import { PokemonModel } from '@models/Pokemon/Pokemon.model'
dotenv.config()

const mongoUser = process.env.MONGO_USER
const mongoPass = process.env.MONGO_PASS
const mongoDB = process.env.MONGO_DB
const mongoURL = `mongodb+srv://${mongoUser}:${mongoPass}@streda.jyppm.mongodb.net/${mongoDB}?retryWrites=true&w=majority`

let database: Mongoose.Connection

export const connect = () => {
  if (database) return

  Mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  database = Mongoose.connection

  database.once('open', async () => {
    console.log('mongo connected')
  })

  database.on('error', () => {
    console.log('Error connecting to mongo')
  })

  return {
    PokemonModel,
  }
}

export const disconnect = (): void => {
  if (!database) return

  Mongoose.disconnect()
}
