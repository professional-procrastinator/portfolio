import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import { createClient } from 'redis';

export var redisClient: any;

interface IConfig {
  PORT: number;
  REDIS_URL: string;
  MONGODB_URI: string;
  TEST_MONGODB_URI: string;
  JWT_SECRET: string;
  app: {
    name: string;
    cookiePrefix: string;
  };
}

export const config: IConfig = {
  REDIS_URL: process.env.REDIS_URL!,
  PORT: Number(process.env.PORT) || 8080,
  MONGODB_URI: process.env.MONGODB_URI!,
  TEST_MONGODB_URI: process.env.TEST_MONGODB_URI!,
  JWT_SECRET: process.env.JWT_SECRET!,
  app: {
    name: process.env.APP_NAME || 'Nishit Jha',
    cookiePrefix: process.env.APP_NAME || 'nj',
  },
};

export const connectMongo = async (): Promise<void> => {
  if (mongoose.connection.readyState === 1) {
    return Promise.resolve();
  }
  try {
    await mongoose.connect(config.MONGODB_URI);
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve();
};

export const initRedis = async (): Promise<void> => {
  const client = createClient({
    url: config.REDIS_URL,
  });

  client.on('error', (err: any) => {
    console.error(err);
    return Promise.reject(err);
  });

  await client.connect();

  redisClient = client;
  return Promise.resolve();
};

export const prod = process.env.NODE_ENV === 'production';
