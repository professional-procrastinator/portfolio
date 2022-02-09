import supertest from "supertest";
import app from "../src/app";
import { config, connectMongo, initRedis } from "../src/config";
import mongoose from "mongoose";

import User from "../src/models/user";

beforeAll(async () => {
  await mongoose.connect(config.TEST_MONGODB_URI);
  await User.remove({});
});

test("init", async () => {
  const users = await User.find({});
  expect(users).toHaveLength(0);
});

test("GET /me - empty request with no token", async () => {
  const response = await supertest(app).get("/me");

  expect(response.body.success).toBe(false);
  expect(response.body.error.code).toBe(401);
});

test("POST /auth/signup - missing fields", async () => {
  const response = await supertest(app).post("/auth/signup").send({
    name: "",
    email: "",
    password: "",
  });

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(false);
  expect(response.body.error.code).toBe(400);
});

test("POST /auth/signup - invalid email", async () => {
  const response = await supertest(app).post("/auth/signup").send({
    name: "test",
    email: "test",
    password: "test",
  });

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(false);
  expect(response.body.error.code).toBe(400);
});

let sessionToken: string;
test("POST /auth/signup - valid request", async () => {
  const response = await supertest(app).post("/auth/signup").send({
    name: "test",
    email: `1234@gmail.com`,
    password: "test",
  });

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(true);

  expect(response.headers["set-cookie"][0]).toMatch(
    new RegExp(`${config.app.cookiePrefix}_token`)
  );

  sessionToken = response.headers["set-cookie"][0].split(";")[0].split("=")[1];
  //wtf is this logic i dont even know what i did
});

test("POST /me", async () => {
  const response = await supertest(app)
    .get("/me")
    .set("Cookie", [`${config.app.cookiePrefix}_token=${sessionToken}`]);

  expect(response.body.success).toBe(true);
  expect(response.body.response.data).toBeDefined();
});

test("POST /auth/logout", async () => {
  const response = await supertest(app)
    .post("/auth/logout")
    .set("Cookie", [`${config.app.cookiePrefix}_token=${sessionToken}`]);

  expect(response.body.success).toBe(true);
  expect(response.headers["set-cookie"][0]).toMatch(
    new RegExp(`${config.app.cookiePrefix}_token`)
  );
  sessionToken = "";
});

test("POST /auth/login - missing fields", async () => {
  const response = await supertest(app).post("/auth/signup").send({
    email: "",
    password: "",
  });

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(false);
  expect(response.body.error.code).toBe(400);
});

test("POST /auth/login - invalid email", async () => {
  const response = await supertest(app).post("/auth/signup").send({
    email: "test",
    password: "test",
  });

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(false);
  expect(response.body.error.code).toBe(400);
});

test("POST /auth/login - incorrect email", async () => {
  const response = await supertest(app).post("/auth/login").send({
    email: "1234@gmail.co",
    password: "test",
  });

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(false);
  expect(response.body.error.code).toBe(400);
});

test("POST /auth/login - incorrect password", async () => {
  const response = await supertest(app).post("/auth/login").send({
    email: "1234@gmail.com",
    password: "testtt",
  });

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(false);
  expect(response.body.error.code).toBe(400);
});

test("POST /auth/login - incorrect email and password", async () => {
  const response = await supertest(app).post("/auth/login").send({
    email: "alookachalu@123.co",
    password: "testing100",
  });

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(false);
  expect(response.body.error.code).toBe(400);
});

test("POST /auth/login - valid request", async () => {
  const response = await supertest(app).post("/auth/login").send({
    email: "1234@gmail.com",
    password: "test",
  });

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(true);
  expect(response.headers["set-cookie"][0]).toMatch(
    new RegExp(`${config.app.cookiePrefix}_token`)
  );
  sessionToken = response.headers["set-cookie"][0].split(";")[0].split("=")[1];
});

test("GET /me", async () => {
  const response = await supertest(app)
    .get("/me")
    .set("Cookie", [`${config.app.cookiePrefix}_token=${sessionToken}`]);

  expect(response.body.success).toBe(true);
  expect(response.body.response.data).toBeDefined();
});

test("POST /auth/logout", async () => {
  const response = await supertest(app)
    .post("/auth/logout")
    .set("Cookie", [`${config.app.cookiePrefix}_token=${sessionToken}`]);

  expect(response.body.success).toBe(true);
  expect(response.headers["set-cookie"][0]).toMatch(
    new RegExp(`${config.app.cookiePrefix}_token`)
  );
  sessionToken = "";
});

test("POST /auth/password - blank request without token", async () => {
  const response = await supertest(app).post("/auth/password").send({
    oldPassword: "",
    newPassword: "",
  });

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(false);
  expect(response.body.error.code).toBe(400);
});

test("POST /auth/login - login", async () => {
  const response = await supertest(app).post("/auth/login").send({
    email: "1234@gmail.com",
    password: "test",
  });

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(true);
  expect(response.headers["set-cookie"][0]).toMatch(
    new RegExp(`${config.app.cookiePrefix}_token`)
  );
  sessionToken = response.headers["set-cookie"][0].split(";")[0].split("=")[1];
});

test("POST /auth/password - invalid old password", async () => {
  const response = await supertest(app)
    .post("/auth/password")
    .send({
      oldPassword: "bigbigchungus",
      newPassword: "yesyesyes",
    })
    .set("Cookie", [`${config.app.cookiePrefix}_token=${sessionToken}`]);

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(false);
  expect(response.body.error.code).toBe(400);
});

test("POST /auth/password - new password == old password", async () => {
  const response = await supertest(app)
    .post("/auth/password")
    .send({
      oldPassword: "test",
      newPassword: "test",
    })
    .set("Cookie", [`${config.app.cookiePrefix}_token=${sessionToken}`]);

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(false);
  expect(response.body.error.code).toBe(400);
});

test("POST /auth/password - blank new password", async () => {
  const response = await supertest(app)
    .post("/auth/password")
    .send({
      oldPassword: "test",
      newPassword: "",
    })
    .set("Cookie", [`${config.app.cookiePrefix}_token=${sessionToken}`]);

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(false);
  expect(response.body.error.code).toBe(400);
});

test("POST /auth/password - valid request", async () => {
  const response = await supertest(app)
    .post("/auth/password")
    .send({
      oldPassword: "test",
      newPassword: "mynewpassword",
    })
    .set("Cookie", [`${config.app.cookiePrefix}_token=${sessionToken}`]);

  expect(response.status).toBe(200);
  expect(response.body.success).toBe(true);
  expect(response.body.response.data).toBeDefined();
});

test("end", async () => {
  const users = await User.find({});
  expect(users).toHaveLength(1);
});

afterAll(async () => {
  await User.remove({});
});
