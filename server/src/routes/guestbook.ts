import Auth from '../middleware/auth/auth';
import { Router } from 'express';

//init
const guestbookRouter = Router();
import { redisClient } from '../config';

import { GetVisitors } from '../controllers/guestbook';

guestbookRouter.get('/', Auth, GetVisitors);

export default guestbookRouter;
