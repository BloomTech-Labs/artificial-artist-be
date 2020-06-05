const knex = require('knex');

const knexfile = require('../knexfile');

const env = process.env.DB_ENV || 'production';

const configOptions = knexfile[env];

module.exports = knex(configOptions);