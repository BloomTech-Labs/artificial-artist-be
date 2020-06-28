const server = require("../api/server");
const request = require("supertest");
const db = require("../data/db_config");
const Users = require("../users/users_model");

beforeAll(async () => {
	await db.seed.run();
});

afterAll(async () => {
	await db.destroy();
});

describe("GET /", () => {
  it("is using right testing environment", () => {
    expect(process.env.NODE_ENV).toBe("test");
  });
});

describe("user routes", ()=>{
  describe("GET /api/users sanity test", ()=>{
    it("should return error", async ()=>{
      const res = await request(server).get("/api/users");
      expect (res.status).toEqual(401)
    })
  })
  describe("auth routes", () => {
    let token;
    beforeAll(() => {
      return request(server)
        .post("/api/auth/register")
        .send({
          username: "dadechico",
          password: "abc123",
          email: "newfake@email.com",
          first_name: "Peter",
          last_name: "Griffin",
        })
        .then((res)=>{
          expect(res.status).toBe(201)
        })
    })
    describe("GET /api/users", () => {
      it("pulls all users", async () => {
        const res = await Users.find();
        expect(res).toHaveLength(4);
      });
    });
    describe("GET /api/users", () => {
      it("gets user by id", async () => {
        const res = await Users.findById(2);
        expect(res.username).toBe("EmCNerd");
      });
    });
    // needs work
    // describe('PUT /api/users', ()=>{
    //   it("updates user body", async () =>{
    //     const username = "dademade"
    //     return await request(server)
    //       .put("/api/users/4")
    //       .send({username: username})
    //       .set("authorization", token)
    //       .then((res)=>{
    //         expect(res.body).toHaveProperty('username')
    //       })        
    //   })
    // })
    // describe("DELETE /api/users", () => {
    //   it('remove added user', async () => {
    //     await Users.remove(6);
    //     const users = await db('users');
    //     expect(users).toHaveLength(3);
    //   });
    // });
  })
})
