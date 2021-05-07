import { connectToDb } from '../db';

declare global {
  namespace NodeJS {
    interface Global {
      mongo: any
    }
  }
}

export default async function database(req, res, next) {
  console.log(await connectToDb())
  const { db, dbClient } = await connectToDb()
  console.log(db, dbClient)
  req.db = db;
  req.dbClient = dbClient;
  next();
}