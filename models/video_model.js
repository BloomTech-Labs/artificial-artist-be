const db = require("../data/db_config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

async function add(data) {
  const [ id ] = await db("videos").insert(data, "id");

  return findById(id);
}

function find() {
  return db("videos");
}

function findBy(filter) {
  return db("videos").where(filter);
}

function findById(id) {
  return db("videos")
    .where({ id })
    .select("location", "video_title")
    .first();
}

function update(data, id) {
  return db("videos").where(id).update(data);
}

function remove(id) {
  return db("videos").where(id).del();
}
