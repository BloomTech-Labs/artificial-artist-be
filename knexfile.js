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
      host: process.env.RDS_HOSTNAME_PROD,
      port: process.env.RDS_PORT_PROD,
      user: process.env.RDS_USERNAME_PROD,
      password: process.env.RDS_PASSWORD_PROD,
      database: process.env.RDS_DB_PROD,
    },
    pool: { min: 2, max: 10 },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
