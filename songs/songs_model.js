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
  const [id] = await db("songs").insert(data, "id");
  // return findById(id);
  return id;
}

function find() {
  return db("songs");
}

function findBy(filter) {
  return db("songs").where(filter);
}
function findByDeezer(id) {
  return db("songs").where({ deezer_id });
}
function findById(id) {
  return db("songs").where({ id }).select("deezer_id", "artist_name").first();
}

function update(data, id) {
  return db("songs").where(id).update(data);
}

function remove(id) {
  return db("songs").where(id).del();
}
