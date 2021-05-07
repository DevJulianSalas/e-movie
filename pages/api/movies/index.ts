import { Request, Response } from '../../../types';
import { getList } from '../../../db';
import middleware from '../../../middleware/all';
import nc from 'next-connect'


const handler = nc<Request, Response>({})

handler.use(middleware)

handler.get(async (req, res)=> {
  console.log('******')
  console.log(req.db)
  console.log('******')
  const list = await getList(req.db)
  res.json({'1': 1})
})

export default handler;