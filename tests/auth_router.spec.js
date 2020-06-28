const express = require('express');
const server = express();
const request = require("supertest");
const authRouter = require("../auth/auth_router");
// const db = require("../data/db_config");
const Users = require('../users/users_model')
server.use(express.json());
server.use('/', authRouter);

// beforeAll(async () => {
// 	await db.seed.run();
// });

// afterAll(async () => {
// 	await db.destroy();
// });

const newUser = {
  email: "tester@fakemail.com",
  username: "RockC137",
  password: "password321",
  first_name: "Rick",
  last_name: "Sanchez",
}

describe('register/login', ()=>{
  test('POST /register', async ()=>{
    const mock = jest.spyOn(Users, 'add');
    mock.mockImplementation(()=> Promise.resolve([newUser]))
    const res = await request(server).post('/register').send(newUser);
    expect(res.status).toBe(201);
    expect(res.type).toBe('application/json');
    mock.mockRestore();
  })
  
  describe("POST /login", () => {
    it("allows login", async () => {
      const res = await request(server)
        .post("/login")
        .send({ email: "abcgen@email.com", password: "password123" })
        expect(res.status).toEqual(200);
    });
  });

})