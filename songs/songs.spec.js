const request = require("supertest");
const server = require("../api/server");
const Songs = require("../data/db_config");
const model = require("./songs_model");
// var knexCleaner = require("knex-cleaner");

// beforeAll(async () => {
//   await knexCleaner.clean(Songs);
// });

describe("GET /", () => {
  it("is using right testing environment", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});

describe("GET /api/song", () => {
  it("pulls all songs", () => {
    request(server)
      .get("./api/song")
      .then((songs) => expect(songs).toHaveLength(7));
  });

  it("pulls song by id", async () => {
    const song = await model.findById(2);
    expect(song).toBeDefined()
    expect(song).toBeTruthy()
  });
});
