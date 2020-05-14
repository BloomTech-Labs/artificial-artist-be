//these tests do not work yet - error finding testing env
const request = require("supertest");
const router = require("./api_router");

describe("api_router", () => {
  //test if in testing environment
  test("in testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  //test GET req in api_router working
  describe("GET /", () => {
    it("should return 200 OK", async () => {
      const res = await request(router).get("/");
      expect(res.status).toBe(200);
    });
    it("should be json", async () => {
      const res = await request(router).get("/");
      expect(res.type).toBe("application/json");
    });
    it("should return the right object", async () => {
      const res = await request(router).get("/");
      expect(res.body).toEqual('Artificial Artist API');
    });
  });
});
