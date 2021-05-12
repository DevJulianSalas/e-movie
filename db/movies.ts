import { Db, Cursor } from 'mongodb';


export const getList = (db: Db ) : (Promise<any>) => {
  return db.collection('lists').find().toArray();
}