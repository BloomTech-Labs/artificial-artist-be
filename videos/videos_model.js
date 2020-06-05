const db = require("../data/db_config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
  find9,
};

async function add(data) {
  const [id] = await db("videos").insert(data, "id");

  return id;
  // return findById(id);
}

function find9() {
  const res= db.raw("select * from videos ORDER BY random() limit 9 ");
  return res;
}

function find() {
  return db("videos")
    .join("songs", "songs.id", "videos.song_id")
    .select(
      "videos.id",
      "videos.video_title",
      "videos.location",
      "videos.song_id",
      "songs.title",
      "songs.artist_name"
    )
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
      "videos.song_id",
      "songs.title",
      "songs.artist_name"
    )
    .where({ "videos.id": id })
    .first();
}

function update(data, id) {
  return db("videos").where("id", id).update(data).returning("id");
}

function remove(id) {
  return db("videos").where(id).del();
}
