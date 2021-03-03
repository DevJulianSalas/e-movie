import { type } from "os";

import { Db, MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export interface Request extends NextApiRequest{
  db: Db,
  dbClient: MongoClient,
}

export interface Response extends NextApiResponse {}