import { Request, Response } from '../../../types';
import { getList } from '../../../db';

export default async(req: Request, res: Response) => {
  const lists = await getList(req.db)
  res.json({'1': 1})
}