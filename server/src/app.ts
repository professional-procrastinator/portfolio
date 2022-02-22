import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import { createServer } from 'http';
import { Server } from 'socket.io';

//init
export const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-auth-token'
  );
  next();
});

export const httpServer = createServer(app);
const io = new Server(httpServer);

//routes
import authRouter from './routes/auth';
import meRouter from './routes/me';
import guestbookRouter from './routes/guestbook';

app.use('/auth', authRouter);
app.use('/me', meRouter);
app.use('/guestbook', guestbookRouter);

//sockets
import guestSocket from './controllers/sockets/guestbook';

const guestNamespace = io.of('/guestbook');
guestNamespace.on('connection', (socket) => {
  guestSocket(socket);
});

app.get('/', async (req: any, res: any) => {
  res.send('Hello World!');
});
