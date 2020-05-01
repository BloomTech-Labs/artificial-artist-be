const db = require("../data/db_config");

module.exports = {
  add,
  find,
  findBy,
//   update,
//   remove,
};

async function add (data) {
    const [id] = await db('videos').insert(data, 'id');

    return findBy(id);
}

function find() {
    return db('videos');
}

function findBy(filter) {
    return db('videos')
        .where(filter);
}
