import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../utils/connect';
import Response from '../../utils/types/response';
import { getSession } from 'next-auth/react';

import Skill from '../../models/skill';

connectDB();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const skills = await Skill.find({});
    const response: Response = {
      success: true,
      message: 'Skills',
      response: {
        data: skills.reverse(),
        timestamp: Date.now(),
      },
    };

    return res.status(200).json(response);
  }

  const response: Response = {
    success: false,
    message: 'Method not allowed',
    error: {
      code: 405,
      details: 'Method not allowed',
    },
  };

  return res.status(200).json(response);
};

export default handler;
