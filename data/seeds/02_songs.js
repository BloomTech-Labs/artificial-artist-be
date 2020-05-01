exports.seed = function (knex, Promise) {
  return knex("songs")
    .del()
    .then(function () {
      return knex("songs").insert([
        { id: 1, song_name: "Push Every Button", artist_name: "Mayhem" },
        { id: 2, song_name: "Endeavours", artist_name: "Mitis" },
        { id: 3, song_name: "See Me In A Crown", artist_name: "Billie Eilish" },
        { id: 4, song_name: "ilomilo", artist_name: "Billie Eilish" },
        { id: 5, song_name: "Future Bass", artist_name: "Runsblov" },
        { id: 6, song_name: "Action Dubstep", artist_name: "Lazaoaza" },
        {
          id: 7,
          song_name: "Funky Reggae Dubstep",
          artist_name: "Progressence",
        },
      ]);
    });
};
