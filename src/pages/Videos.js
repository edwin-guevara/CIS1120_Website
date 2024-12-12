import VideoItem from "../components/VideoItem";

const videoData = [
  {
    title: "Love The Way You Lie",
    description:
      "Song featuring Rihanna which delves into the complexities of an abusive relationship; explores the tumultuous dynamics between two people who, despite their toxic relationship, find it hard to let go.",
    src: "https://www.youtube-nocookie.com/embed/uelHwf8o7_U?si=4K_zrHnXGyAZNw_w",
  },
  {
    title: "Without Me",
    description:
      "Song which highlights Eminem's return to the music scene and his impact on the industry.",
    src: "https://www.youtube-nocookie.com/embed/YVkUvmDQ3HY?si=rIRJZYpeUvUtjH8b",
  },
  {
    title: "Not Afraid",
    description:
      "Song about Eminem overcoming his struggles and encouraging his listeners to face their fears.",
    src: "https://www.youtube-nocookie.com/embed/j5-yKhDd64s?si=0wgfewexQ9wIfdms",
  },
];

export default function Videos() {
  return (
    <div>
      {videoData.map((video, index) => (
        <VideoItem
          key={index}
          title={video.title}
          description={video.description}
          src={video.src}
        />
      ))}
    </div>
  );
}
