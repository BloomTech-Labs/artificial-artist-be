const knexCleaner = require("knex-cleaner");

exports.seed = function(knex) {
  return knexCleaner.clean(knex, {
    mode: "truncate",
    restartIdentity: true, // Used to tell PostgresSQL to reset the ID counter
    ignoreTables: ["knex_migrations", "knex_migrations_lock"]
  });
};
