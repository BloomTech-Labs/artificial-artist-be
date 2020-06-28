const request = require("supertest");
const server = require("../api/server");
const db = require("../data/db_config");
const model = require("../videos/videos_model");


beforeAll(async () => {
	await db.seed.run();
});

afterAll(async () => {
	await db.destroy();
});

describe("GET /", () => {
  it("is using right testing environment", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});

describe("GET /api/videos", () => {
  it("pulls all videos", async () => {
    const res = await model.find()
      .then((res) => expect(res).toHaveLength(9));
  });

  it("pulls video by id", async () => {
    const res = await model.findById(4);
    expect(res).toBeDefined()
    expect(res).toBeTruthy()
  });
});

describe("Auth video crud", ()=>{
  let token;
  beforeAll(() => {
    return request(server)
      .post("/api/auth/login")
      .send({
        username: "user1",
        password: "password123",
      })
      .then((res) => {
        token = res.body.token;
      });
  });
  describe('POST /videos', ()=>{
    const fauxVideo = {
      artist: "Ice Cube",
      deezer_id: 7,
      location: "https://artificial-artist.s3.amazonaws.com/None.mp4",
      preview: "preview",
      title: "A Good Day",
      user_id: 1,
      video_title: "Top of the World"
    }
    it.skip("should return status code 201", async () => {
      const res = await request(server)
        .post("/api/videos")
        .set("authorization", token)
        .send(fauxVideo);
      expect(res.status).toEqual(201);
    });
  })
})