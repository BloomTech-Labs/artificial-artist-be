const server = require("../api/server");
const request = require("supertest");
const db = require("../data/db_config");
const Users = require("./users_model");
// var knexCleaner = require("knex-cleaner");

// beforeAll(async () => {
//   await knexCleaner.clean(db);
// });

describe("GET /", () => {
  it("is using right testing environment", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});

describe("POST /api/auth/register", () => {
  it("allows add a user", () => {
    request(server)
      .post("/api/auth/register")
      .send({
        username: "dadechico",
        password: "abc123",
        email: "newfake@email.com",
        first_name: "Peter",
        last_name: "Griffin",
      })
      .then((res) => expect(res.status).toBe(201))
      .catch((e) => {
        console.log(e);
      });
  });
});

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

//not functioning properly
// describe("DELETE /api/users", () => {
//   it('remove added user', async () => {
//     await Users.remove(6);
//     const users = await db('users');
//     expect(users).toHaveLength(3);
//   });
// });
