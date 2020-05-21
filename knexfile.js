require('dotenv').config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: "5432",
      user: "postgres",
      password: process.env.PASS,
      database: "Artificial-Artist-BE",
    },
    pool: { min: 2, max: 10 },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  testing: {
    client: "pg",
    connection: process.env.DB_URL,
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: {
      host:
        "database-artificialartist-test-pg.ccpwu09bb3on.us-east-1.rds.amazonaws.com",
      port: "5432",
      user: "postgres",
      password: "postgres",
      database: "database-artificialartist-test-pg",
    },
    pool: { min: 2, max: 10 },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
