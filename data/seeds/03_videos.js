
exports.seed = function (knex, Promise) {
  return knex("videos")
    .del()
    .then(function () {
      return knex("videos").insert([
        {
          video_title: "Testing",
          location:
            "https://elasticbeanstalk-us-east-1-427400502172.s3.amazonaws.com/Videosforbackend/mayhem--push_every_button-testing--82Q6DRqf9H4.mp4",
          song_id: 1,
          user_id: 1,
        },
        {
          video_title: "Trying",
          location:
            "https://elasticbeanstalk-us-east-1-427400502172.s3.amazonaws.com/Videosforbackend/mitis--endeavour-trying--VVrf89SXvTM.mp4",
          song_id: 2,
          user_id: 1,
        },
        {
          video_title: "King Me",
          location:
            "https://elasticbeanstalk-us-east-1-427400502172.s3.amazonaws.com/Videosforbackend/billieeilish--you_should_see_me_in_a_crown-king_me_-coLerbRvgsQ.mp4",
          song_id: 3,
          user_id: 2,
        },
        {
          video_title: "Weird",
          location:
            "https://elasticbeanstalk-us-east-1-427400502172.s3.amazonaws.com/Videosforbackend/billieeilish--ilomilo_weird_-e7wiyNO2us.mp4",
          song_id: 4,
          user_id: 2,
        },
        {
          video_title: "Boom",
          location:
            "https://elasticbeanstalk-us-east-1-427400502172.s3.amazonaws.com/Videosforbackend/runsblov--future_bass_-boom_h-f9Zgdo6I8%26t.mp4",
          song_id: 5,
          user_id: 3,
        },
        {
          video_title: "Dubs",
          location:
            "https://elasticbeanstalk-us-east-1-427400502172.s3.amazonaws.com/Videosforbackend/lazaoaza--action_dubstep_-dubs_VqCm327iSwQ.mp4",
          song_id: 6,
          user_id: 3,
        },
        {
          video_title: "Bud",
          location:
            "https://elasticbeanstalk-us-east-1-427400502172.s3.amazonaws.com/Videosforbackend/progressencefunky_reggae_dubstep_-bud_R2oxSIN6rdY.mp4",
          song_id: 7,
          user_id: 1,
        },
        {
          video_title: "TarantulaCrisp",
          location:
            "https://elasticbeanstalk-us-east-1-427400502172.s3.amazonaws.com/Videosforbackend/TarantulaCrisp.mp4",
          song_id: 8,
          user_id: 1,
        },
        {
          video_title: "the way of the web",
          location: "https://artificial-artist.s3.amazonaws.com/10.mp4",
          song_id: 9,
          user_id: 1,
        },
      ]);
    });
};
