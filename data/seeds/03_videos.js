exports.seed = function (knex, Promise) {
  return knex("videos")
    .del()
    .then(function () {
      return knex("videos").insert([
        {
          video_title: "the way of the web",
          location: "https://artificial-artist.s3.amazonaws.com/hq-demo1.mp4",
          thumbnail:
            "https://artificial-artist.s3.amazonaws.com/artificial-artist-face.png",
          video_status: "successful",
          song_id: 1,
          user_id: 1,
        },
        {
          video_title: "Cali Loves Mashed Potatoes",
          location: "https://artificial-artist.s3.amazonaws.com/hq-demo3.mp4",
          thumbnail:
            "https://artificial-artist.s3.amazonaws.com/artificial-artist-face.png",
          video_status: "successful",
          song_id: 2,
          user_id: 1,
        },
        {
          video_title: "Today Was A Good Day For Quail",
          location: "https://artificial-artist.s3.amazonaws.com/None.mp4",
          thumbnail:
            "https://artificial-artist.s3.amazonaws.com/artificial-artist-face.png",
          video_status: "creating",
          song_id: 3,
          user_id: 2,
        },
        {
          video_title: "Blooming Accordians",
          location: "https://artificial-artist.s3.amazonaws.com/26.mp4",
          thumbnail: "",
          video_status: "successful",
          song_id: 4,
          user_id: 2,
        },
        {
          video_title: "Basketball Symphony",
          location: "https://artificial-artist.s3.amazonaws.com/bo1.mp4",
          thumbnail:
            "https://artificial-artist.s3.amazonaws.com/artificial-artist-face.png",
          video_status: "failed",
          song_id: 5,
          user_id: 3,
        },
        {
          video_title: "The Dont Stop Believing Bus",
          location: "https://artificial-artist.s3.amazonaws.com/bri3.mp4",
          thumbnail:
            "https://artificial-artist.s3.amazonaws.com/artificial-artist-face.png",
          video_status: "successful",
          song_id: 6,
          user_id: 3,
        },
        {
          video_title: "Tuxedos Floating on a River",
          location: "https://artificial-artist.s3.amazonaws.com/hq-demo2.mp4",
          thumbnail: "https://artificial-artist.s3.amazonaws.com/hq-demo2.jpg",
          video_status: "successful",
          song_id: 7,
          user_id: 1,
        },
        {
          video_title: "TarantulaCrisp",
          location:
            "https://artificial-artist.s3.amazonaws.com/TarantulaCrisp.mp4",
          thumbnail:
            "https://artificial-artist.s3.amazonaws.com/artificial-artist-face.png",
          video_status: "failed",
          song_id: 8,
          user_id: 1,
        },
        {
          video_title: "Today was A good Day for Lo Mein",
          location: "https://artificial-artist.s3.amazonaws.com/cube.mp4",
          thumbnail: "https://artificial-artist.s3.amazonaws.com/hq-demo1.jpg",
          video_status: "successful",
          song_id: 9,
          user_id: 1,
        },
        {
          video_title: "the way of the web",
          location: "https://artificial-artist.s3.amazonaws.com/8.mp4",
          thumbnail:
            "https://artificial-artist.s3.amazonaws.com/artificial-artist-face.png",
          video_status: "successful",
          song_id: 9,
          user_id: 1,
        },
        {
          video_title: "the way of the web",
          location: "https://artificial-artist.s3.amazonaws.com/10.mp4",
          thumbnail:
            "https://artificial-artist.s3.amazonaws.com/artificial-artist-face.png",
          video_status: "creating",
          song_id: 9,
          user_id: 1,
        },
        {
          video_title: "the way of the web",
          location: "https://artificial-artist.s3.amazonaws.com/20.mp4",
          thumbnail:
            "https://artificial-artist.s3.amazonaws.com/artificial-artist-face.png",
          video_status: "successful",
          song_id: 9,
          user_id: 1,
        },
        {
          video_title: "flowertopia",
          location: "https://artificial-artist.s3.amazonaws.com/26.mp4",
          thumbnail:
            "https://artificial-artist.s3.amazonaws.com/artificial-artist-face.png",
          video_status: "creating",
          song_id: 9,
          user_id: 1,
        },
        {
          video_title: "dafting",
          location: "https://artificial-artist.s3.amazonaws.com/dafting.mp4",
          thumbnail: "https://imgur.com/QlUrC1I",
          video_status: "failed",
          song_id: 9,
          user_id: 1,
        },
        {
          video_title: "Collies on my mind",
          location: "https://artificial-artist.s3.amazonaws.com/bri2.mp4",
          thumbnail:
            "https://artificial-artist.s3.amazonaws.com/artificial-artist-face.png",
          video_status: "successful",
          song_id: 9,
          user_id: 1,
        },
      ]);
    });
};
