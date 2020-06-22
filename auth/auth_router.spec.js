const request = require("supertest");
const server = require("../api/api_router");
const db = require("../data/db_config");


beforeAll(async () => {
	await db.seed.run();
});

afterAll(async () => {
	await db.destroy();
});

describe('register/login', ()=>{
  // it('add new user', async ()=>{
    // const newUser = {
    //   email: "tester@email.com",
    //   username: "RockC137",
    //   password: "password321",
    //   first_name: "Rick",
    //   last_name: "Sanchez",
    // }
  //   const res = await request(server)
  //     .post("/api/auth/register")
  //     .send({
  //       email: "tester@email.com",
  //       username: "RockC137",
  //       password: "password321",
  //       first_name: "Rick",
  //       last_name: "Sanchez",
  //     })
  //     expect(res.body).toEqual(
	// 			expect.objectContaining({
	// 				user: {
	// 					id: expect.any(Number),
	// 					email: expect.any(String),
	// 					username: expect.any(String),
	// 					first_name: expect.any(String),
	// 					last_name: expect.any(String),
	// 				},
	// 				token: expect.any(String),
	// 			})
	// 		);
  // });
  describe("POST /login", () => {
    it("allows login", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ email: "abcgen@email.com", password: "password123" })
        expect(res.status).toEqual(200);
    });
  });

})