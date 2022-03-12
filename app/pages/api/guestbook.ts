import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../utils/connect';
import Response from '../../utils/types/response';
import { getSession } from 'next-auth/react';

import Comment from '../../models/comment';

connectDB();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const entries = await Comment.find({});
    const response: Response = {
      success: true,
      message: 'Guestbook entries',
      response: {
        data: entries.reverse(),
        timestamp: Date.now(),
      },
    };

    return res.status(200).json(response);
  }

  if (req.method === 'POST') {
    const session = await getSession({ req });

    if (!session) {
      const response: Response = {
        success: false,
        message: 'You must be logged in to sign the guestbook.',
        error: {
          code: 401,
          details: 'Unauthorized',
        },
      };

      return res.status(200).json(response);
    }

    //nested object - email exist inside author object
    const doesCommentExist = await Comment.findOne({
      'author.email': session.user.email,
    });

    if (doesCommentExist) {
      const response: Response = {
        success: false,
        message: 'You have already signed the guestbook.',
        error: {
          code: 403,
          details: 'Forbidden',
        },
      };

      return res.status(200).json(response);
    }

    const { content } = req.body;

    if (
      content.trim() === '' ||
      content.length < 10 ||
      !content ||
      content === '' ||
      content == null ||
      content == undefined
    ) {
      const response: Response = {
        success: false,
        message: "That's too short. Wanna add something else?",
        error: {
          code: 400,
          details: 'Bad Request',
        },
      };

      return res.status(200).json(response);
    }
    const entry = new Comment({
      content: content,
      author: session?.user,
    });

    await entry.save();

    const response: Response = {
      success: true,
      message: 'Signed the guestbook',
      response: {
        data: entry,
        timestamp: Date.now(),
      },
    };

    return res.status(200).json(response);
  }
};

export default handler;
