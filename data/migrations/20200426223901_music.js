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
    song.integer("deezer_id").unique().notNullable();
    song.string("title").notNullable();
    song.string("artist_name").notNullable();
  });
  await knex.schema.createTable("videos", (video) => {
    video.increments();
    video.string("video_title").notNullable();
    video.string("location").notNullable();
    video.string("video_status");
    video.string("thumbnail");
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
