exports.seed = function (knex, Promise) {
  return knex("songs")
    .del()
    .then(function () {
      return knex("songs").insert([
        {
          id: 1,
          deezer_id: "12",
          title: "Push Every Button",
          title_short: "Push Every Button",
          artist_name: "Mayhem",
          preview: "https://fakepreview.net/stream/sample1.mp3"
        },
        {
          id: 2,
          deezer_id: "13",
          title: "Endeavours",
          title_short: "Endeavours",
          artist_name: "Mitis",
          preview: "https://fakepreview.net/stream/sample2.mp3"
        },
        {
          id: 3,
          deezer_id: "14",
          title: "See Me In A Crown",
          title_short: "See Me In A Crown",
          artist_name: "Billie Eilish",
          preview: "https://fakepreview.net/stream/sample3.mp3"
        },
        {
          id: 4,
          deezer_id: "15",
          title: "ilomilo",
          title_short: "ilomilo",
          artist_name: "Billie Eilish",
          preview: "https://fakepreview.net/stream/sample4.mp3"
        },
        {
          id: 5,
          deezer_id: "16",
          title: "Future Bass",
          title_short: "Future Bass",
          artist_name: "Runsblov",
          preview: "https://fakepreview.net/stream/sample5.mp3"
        },
        {
          id: 6,
          deezer_id: "17",
          title: "Action Dubstep",
          title_short: "Action Dubstep",
          artist_name: "Lazaoaza",
          preview: "https://fakepreview.net/stream/sample6.mp3"
        },
        {
          id: 7,
          deezer_id: "18",
          title: "Funky Reggae Dubstep",
          title_short: "Funky Reggae Dubstep",
          artist_name: "Progressence",
          preview: "https://fakepreview.net/stream/sample7.mp3"
        },
      ]);
    });
};
