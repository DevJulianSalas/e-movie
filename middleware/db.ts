import { connectToDb } from '../db/';

declare global {
  namespace NodeJS {
    interface Global {
      mongo: any
    }
  }
}

export default async function(req, res) {
  const { db, dbClient } = await connectToDb()
  req.db = db;
  req.dbClient = dbClient;
}