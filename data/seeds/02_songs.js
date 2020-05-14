exports.seed = function (knex, Promise) {
  return knex("songs")
    .del()
    .then(function () {
      return knex("songs").insert([
        {
          deezer_id: "12",
          title: "Push Every Button",
          title_short: "Push Every Button",
          artist_name: "Mayhem",
        },
        {
          deezer_id: "13",
          title: "Endeavours",
          title_short: "Endeavours",
          artist_name: "Mitis",
        },
        {
          deezer_id: "14",
          title: "See Me In A Crown",
          title_short: "See Me In A Crown",
          artist_name: "Billie Eilish",
        },
        {
          deezer_id: "15",
          title: "ilomilo",
          title_short: "ilomilo",
          artist_name: "Billie Eilish",
        },
        {
          deezer_id: "16",
          title: "Future Bass",
          title_short: "Future Bass",
          artist_name: "Runsblov",
        },
        {
          deezer_id: "17",
          title: "Action Dubstep",
          title_short: "Action Dubstep",
          artist_name: "Lazaoaza",
        },
        {
          deezer_id: "18",
          title: "Funky Reggae Dubstep",
          title_short: "Funky Reggae Dubstep",
          artist_name: "Progressence",
        },
      ]);
    });
};
