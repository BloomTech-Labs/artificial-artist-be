const db = require("../data/db_config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByUser,
  update,
  remove,
  find9,
  // hero
};

async function add(data) {
  const [id] = await db("videos").insert(data, "id");

  return id;
  // return findById(id);
}

function find9() {
  return db("videos")
    .select()
    .where("video_status", "successful")
    .orderByRaw("RANDOM()")
    .limit(9);
}

function hero() {
  return db("videos")
    .select()
    .where("video_status", "successful")
    .orderByRaw("RANDOM()")
    .limit(1);
}

function find() {
  return db("videos")
    .join("songs", "songs.id", "videos.song_id")
    .select(
      "videos.id",
      "videos.video_title",
      "videos.location",
      "videos.video_status",
      "videos.song_id",
      "songs.title",
      "songs.artist_name"
    );
}

function findBy(filter) {
  return db("videos").where(filter);
}

function findById(id) {
  return db("videos")
    .join("songs", "songs.id", "videos.song_id")
    .select(
      "videos.id",
      "videos.video_title",
      "videos.location",
      "videos.video_status",
      "videos.song_id",
      "songs.title",
      "songs.artist_name"
    )
    .where({ "videos.id": id })
    .first();
}

function findByUser(id) {
  return db("videos")
    .select(
      "videos.id",
      "videos.video_title",
      "videos.location",
      "videos.user_id"
    )
    .where({ "videos.user_id": id });
}

function update(data, id) {
  return db("videos").where("id", id).update(data).returning("id");
}

function remove(id) {
  return db("videos").where(id).del();
}
