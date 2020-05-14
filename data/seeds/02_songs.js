exports.seed = function (knex, Promise) {
  return knex("songs")
    .del()
    .then(function () {
      return knex("songs").insert([
        {
          // id: 1,
          deezer_id: "12",
          title: "Push Every Button",
          artist_name: "Mayhem",
        },
        {
          // id: 2,
          deezer_id: "13",
          title: "Endeavours",
          artist_name: "Mitis",
        },
        {
          // id: 3,
          deezer_id: "14",
          title: "See Me In A Crown",
          artist_name: "Billie Eilish",
        },
        {
          // id: 4,
          deezer_id: "15",
          title: "ilomilo",
          artist_name: "Billie Eilish",
        },
        {
          // id: 5,
          deezer_id: "16",
          title: "Future Bass",
          artist_name: "Runsblov",
        },
        {
          // id: 6,
          deezer_id: "17",
          title: "Action Dubstep",
          artist_name: "Lazaoaza",
        },
        {
          // id: 7,
          deezer_id: "18",
          title: "Funky Reggae Dubstep",
          artist_name: "Progressence",
        },
      ]);
    });
};
