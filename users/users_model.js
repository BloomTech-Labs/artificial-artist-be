const db = require("../data/db_config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findIdByUsername,
  update,
  remove
};

async function add(data) {
  const [id] = await db("users").insert(data, "id");

  return findById(id);
}

function find() {
  return db("users").select(
    "id",
    "username",
    "email",
    "first_name",
    "last_name"
  );
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .where({ id })
    .select("id", "username", "email", "first_name", "last_name")
    .first();
}

function findIdByUsername(username) {
  return db("users")
    .select("id")
    .where({ username });
}

function update(data, id) {
  return db("users")
    .where({ id })
    .update(data);
}

function remove(id) {
  return db("users")
    .where(id)
    .del();
}
