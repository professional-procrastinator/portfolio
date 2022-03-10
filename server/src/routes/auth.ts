import express from 'express';
const AuthRouter = express.Router();

AuthRouter.get('/', async (req: any, res: any) => {
  res.send('hi');
});

export default AuthRouter;
