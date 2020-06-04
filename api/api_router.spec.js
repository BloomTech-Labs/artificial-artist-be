const request = require("supertest");
const router = require("./api_router");

describe("api_router", () => {
  //test if in testing environment
  test("in testing environment", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
  //test GET req in api_router working
  describe("GET /", () => {
    it("should return 200 OK", () => {
      request(router)
        .get("/")
        .then((res) => expect(res.status).toBe(200));
    });
    it("should be json", () => {
      request(router)
        .get("/")
        .then((res) => expect(res.type).toBe("application/json"));
    });
    it("should return the right object", () => {
      request(router)
        .get("/")
        .then((res) => expect(res.body).toEqual("Artificial Artist API"));
    });
  });
});
