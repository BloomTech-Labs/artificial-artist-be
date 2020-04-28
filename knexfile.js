require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: '5432',
      user: 'postgres',
      password: process.env.PASS,
      database: 'Artificial-Artist-BE'
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  }

};
