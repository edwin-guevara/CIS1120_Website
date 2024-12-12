import "../Videos.css";
export default function VideoItem({ title, description, src }) {
  return (
    <div id="videos">
      <div className="column">
        <div className="video-item">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="video">
            <iframe src={src} title={title}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
