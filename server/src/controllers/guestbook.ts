import { NextFunction } from 'express';
import Comment from '../models/comment';
import IResponse from '../@types/response';
export const GetVisitors = async (req: any, res: any, next: NextFunction) => {
  const visitors = await Comment.find({}).populate('author');
  const response: IResponse = {
    success: true,
    response: {
      data: visitors,
      timestamp: Date.now(),
    },
    message: '',
  };

  res.status(200).json(response);
  return next();
};
