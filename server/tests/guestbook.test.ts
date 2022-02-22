import supertest from 'supertest';
import { app } from '../src/app';
import { config, connectMongo, initRedis } from '../src/config';
import mongoose from 'mongoose';

import Comment from '../src/models/comment';

beforeAll(async () => {
  await mongoose.connect(config.TEST_MONGODB_URI!);
  await Comment.deleteMany({});
});

test('init', async () => {
  const comments = await Comment.find({});
  expect(comments).toHaveLength(0);
});

test('GET /guestbook - no comments', async () => {
  const response = await supertest(app).get('/guestbook');

  expect(response.body.success).toBe(true);
  expect(response.body.response.data).toHaveLength(0);
});

afterAll(async () => {
  await Comment.deleteMany({});
  await mongoose.connection.close();
});
