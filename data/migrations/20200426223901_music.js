exports.up = async function (knex, Promise) {
  await knex.schema.createTable("users", (user) => {
    user.increments();
    user.string("username", 255).unique().notNullable();
    user.string("password", 255).notNullable();
    user.string("email", 255).unique().notNullable();
    user.string("first_name", 255).notNullable();
    user.string("last_name", 255).notNullable();
  });
  await knex.schema.createTable("songs", (song) => {
    song.increments();
    song.string("song_name", 255).notNullable();
    song.string("artist_name", 255).notNullable();
    // song.string("song_genre", 255).unique().notNullable();
  });
  await knex.schema.createTable("videos", (video) => {
    video.increments();
    video.string("video_title").unique().notNullable();
    video.string("location").notNullable();
    video.string("song_name");
    video
      .integer("song_id")
      .unsigned()
      .references("id")
      .inTable("songs")
      .notNullable();
    video
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists("videos")
    .dropTableIfExists("songs")
    .dropTableIfExists("users");
};
