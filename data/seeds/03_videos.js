exports.seed = function (knex, Promise) {
  return knex("videos")
    .del()
    .then(function () {
      return knex("videos").insert([
        {
          video_title: "Testing",
          location: "https://www.youtube.com/watch?v=82Q6DRqf9H4",
          song_id: 1,
          user_id: 1,
        },
        {
          video_title: "Trying",
          location: "https://www.youtube.com/watch?v=VVrf89SXvTM",
          song_id: 2,
          user_id: 1,
        },
        {
          video_title: "King Me",
          location: "https://www.youtube.com/watch?v=coLerbRvgsQ",
          song_id: 3,
          user_id: 2,
        },
        {
          video_title: "Weird",
          location: "https://www.youtube.com/watch?v=-e7wiyNO2us",
          song_id: 4,
          user_id: 2,
        },
        {
          video_title: "Boom",
          location: "https://www.youtube.com/watch?v=h-f9Zgdo6I8&t",
          song_id: 5,
          user_id: 3,
        },
        {
          video_title: "Dubs",
          location: "https://www.youtube.com/watch?v=VqCm327iSwQ",
          song_id: 6,
          user_id: 3,
        },
        {
          video_title: "Bud",
          location: "https://www.youtube.com/watch?v=R2oxSIN6rdY",
          song_id: 7,
          user_id: 1,
        },
      ]);
    });
};
