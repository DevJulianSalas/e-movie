import { connectToDb } from '../db/'
import { Request, Response } from '../types'



export default async function(req: Request,  res: Response) {
  const { db, dbClient } = await connectToDb()
  req.db = db;
  req.dbClient = dbClient;
}