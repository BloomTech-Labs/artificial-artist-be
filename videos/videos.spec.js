const request = require("supertest");
const server = require("../api/server");
const video = require("../data/db_config");
const model = require("./video_model");
// var knexCleaner = require("knex-cleaner");

// beforeAll(async () => {
//   await knexCleaner.clean(Songs);
// });

describe("GET /", () => {
  it("is using right testing environment", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});

describe("GET /api/videos", () => {
  it("pulls all videos", () => {
    request(server)
      .get("./api/videos")
      .then((videos) => expect(videos).toHaveLength(7));
  });

  it("pulls video by id", async () => {
    const video = await model.findById(4);
    expect(video).toBeDefined()
    expect(video).toBeTruthy()
  });
});