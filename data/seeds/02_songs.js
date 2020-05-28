exports.seed = function (knex, Promise) {
  return knex("songs")
    .del()
    .then(function () {
      return knex("songs").insert([
        {
          deezer_id: 1,
          title: "Push Every Button",
          artist_name: "Mayhem",
        },
        {
          deezer_id: 2,
          title: "Endeavours",
          artist_name: "Mitis",
        },
        {
          deezer_id: 3,
          title: "See Me In A Crown",
          artist_name: "Billie Eilish",
        },
        {
          deezer_id: 4,
          title: "ilomilo",
          artist_name: "Billie Eilish",
        },
        {
          deezer_id: 5,
          title: "Future Bass",
          artist_name: "Runsblov",
        },
        {
          deezer_id: 6,
          title: "Action Dubstep",
          artist_name: "Lazaoaza",
        },
        {
          deezer_id: 7,
          title: "Funky Reggae Dubstep",
          artist_name: "Progressence",
        },
        {
          deezer_id: 8,
          title: "Drunk in Love",
          artist_name: "Beyoncé",
        },

        {
          deezer_id: 9,
          title: "Don't Stop Believin'",
          artist_name: "Journey",
        },
      ]);
    });
};
