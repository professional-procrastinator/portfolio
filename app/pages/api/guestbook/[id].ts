import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../../utils/connect';
import Response from '../../../utils/types/response';
import { getSession } from 'next-auth/react';

import Comment from '../../../models/comment';

connectDB();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method === 'DELETE') {
    const session = await getSession({ req });

    if (!session) {
      const response: Response = {
        success: false,
        message: 'You must be logged in to delete the guestbook.',
        error: {
          code: 401,
          details: 'Unauthorized',
        },
      };

      return res.status(200).json(response);
    }

    const doesCommentExist = await Comment.findById(id);

    if (!doesCommentExist) {
      const response: Response = {
        success: false,
        message: 'Comment not found.',
        error: {
          code: 404,
          details: 'Not Found',
        },
      };

      return res.status(200).json(response);
    }

    if (doesCommentExist.author.email !== session.user.email) {
      const response: Response = {
        success: false,
        message: 'You are not the author of this comment.',
        error: {
          code: 403,
          details: 'Forbidden',
        },
      };

      return res.status(200).json(response);
    }

    await Comment.findByIdAndDelete(id);

    const response: Response = {
      success: true,
      message: 'Comment deleted.',
      response: {
        data: doesCommentExist,
        timestamp: Date.now(),
      },
    };

    return res.status(200).json(response);
  }
};

export default handler;
