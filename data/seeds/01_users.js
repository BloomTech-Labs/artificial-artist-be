const bc = require("bcryptjs");

exports.seed = function (knex, Promise) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          username: "user1",
          password: bc.hashSync("password123", 12),
          email: "abc123@email.com",
          first_name: "Music",
          last_name: "Lover",
        },
        {
          username: "EmCNerd",
          password: bc.hashSync("password123", 12),
          email: "abcgen@email.com",
          first_name: "Rocky",
          last_name: "Balboa",
        },
        {
          username: "DJWannaB",
          password: bc.hashSync("password123", 12),
          email: "gen123@email.com",
          first_name: "Doctor",
          last_name: "Strange",
        },
      ]);
    });
};
