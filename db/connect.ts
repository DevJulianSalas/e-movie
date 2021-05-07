import { Db, MongoClient } from 'mongodb'

global.mongo = global.mongo || {}

export const connectToDb = async () => {
  if (!global.mongo.client) {
    console.log('eee')
    global.mongo.client = new MongoClient(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      connectTimeoutMS: 10000,
      useUnifiedTopology: true,
    })
    await global.mongo.client.connect()
  }
  console.log('www')
  const db: Db = global.mongo.client.db('e-movie')
  return { db, dbClient: global.mongo.client }
}