import { Db } from 'mongodb'


export const getSlider = async(db: Db) => {
    return await db.collection('sliders').find().toArray();
}