import Auth from '../middleware/auth/auth';
import { Router } from 'express';

//init
const authRouter = Router();
import { redisClient } from '../config';

export default authRouter;
