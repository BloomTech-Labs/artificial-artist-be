const request = require("supertest");
const server = require("../api/server");
const db = require("../data/db_config");
const model = require("../songs/songs_model");

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

describe("GET /api/songs", () => {
  
  it("pulls all songs", async () => {
    const songs = await model.find()
      .then((songs) => expect(songs).toHaveLength(9));
  });

  it("pulls song by id", async () => {
    const song = await model.findById(2);
    expect(song).toBeDefined()
    expect(song).toBeTruthy()
  });
});
