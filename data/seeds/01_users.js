const bc = require('bcryptjs');

exports.seed = function (knex, Promise) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          // id: 1,
          username: "user1",
          password: bc.hashSync("password123", 12),
          email: "abc123@email.com",
          first_name: "Music",
          last_name: "Lover",
        },
        {
          // id: 2,
          username: "EmCNerd",
          password: bc.hashSync("password123", 12),
          email: "abcgen@email.com",
          first_name: "Rocky",
          last_name: "Balboa",
        },
        {
          // id: 3,
          username: "DJWannaB",
          password: bc.hashSync("password123", 12),
          email: "gen123@email.com",
          first_name: "Doctor",
          last_name: "Strange",
        },
      ]);
    });
};
