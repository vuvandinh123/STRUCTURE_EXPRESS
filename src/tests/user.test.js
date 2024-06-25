const request = require("supertest");
const app = require("../app");

describe("GET /v1/users", () => {
    it("should return all users", async () => {
      const res = await request(app).get("/v1/users");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });