const request = require("supertest");
const server = require("../api/api_router");

describe("auth-router", () => {
  describe("POST /register", () => {
    it("returns json", () => {
      request(server)
        .post("/api/auth/register")
        .send({
          username: "Luv2Jam",
          password: "password123",
          email: "fake@email.com",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((error, res) => {
          if (error) return document(error);
          else done();
        });
    });
  });
  describe("POST /login", () => {
    it("returns json", () => {
      request(server)
        .post("/api/auth/login")
        .send({ email: "fake@email.com", password: "password123" })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((error, res) => {
          if (error) return document(error);
          else done();
        });
    });
  });
});
