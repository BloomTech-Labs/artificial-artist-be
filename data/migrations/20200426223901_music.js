exports.up = async function (knex, Promise) {
  await knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("username", 255).unique().notNullable();
    tbl.string("password", 255).notNullable();
    tbl.string("email", 255).unique().notNullable();
    tbl.string("first_name", 255).notNullable();
    tbl.string("last_name", 255).notNullable();
  });
  await knex.schema.createTable("images", (tbl) => {
    tbl.increments();
    tbl.text("image_name", 255).notNullable();
    tbl.text("image_category", 255).notNullable();
    tbl.blob("image", 255).unique().notNullable();
  });
  await knex.schema.createTable("songs", (tbl) => {
    tbl.increments();
    tbl.text("song_name", 255).notNullable();
    tbl.text("artist_name", 255).notNullable();
    tbl.text("song_genre", 255).unique().notNullable();
  });
  await knex.schema.createTable("videos", (tbl) => {
    tbl.increments();
    tbl.string("video_title").unique().notNullable();
    tbl.text("location").notNullable();
    tbl.string("song_name");
    tbl
      .integer("song_id")
      .unsigned()
      .references("id")
      .inTable("songs")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("image_id")
      .unsigned()
      .references("id")
      .inTable("images")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("user")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists("videos")
    .dropTableIfExists("songs")
    .dropTableIfExists("images")
    .dropTableIfExists("users");
};
