const { test } = require("node:test");
const assert = require("node:assert");
const request = require("supertest");
const app = require("../src/app");

test("GET /health returns ok", async () => {
  const res = await request(app).get("/health");
  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.body.status, "ok");
});

test("GET /add/2/3 returns 5", async () => {
  const res = await request(app).get("/add/2/3");
  assert.strictEqual(res.body.result, 5);
});

test("GET /add/x/3 returns 400", async () => {
  const res = await request(app).get("/add/x/3");
  assert.strictEqual(res.status, 400);
});
