import { Db, Cursor } from 'mongodb';


export const getList = (db: Db ) : (Cursor<any>) => {
  return db.collection('lists').find();
}