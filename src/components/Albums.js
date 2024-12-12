import "../Albums.css";

const AlbumList = ({ title, albums }) => {
  return (
    <div id="albums">
      <div className="column">
      <h3>{title}</h3>
      <ul>
        {albums.map((album, index) => (
          <li key={index} className="album-item">
            <a href={album.url} target="_blank" rel="noopener noreferrer">
              {album.title}
            </a>{" "}
            <span className="album-parentheses">(</span>
            <span className="album-date">{album.date}</span>
            <span className="album-parentheses">)</span>
            {album.featuredArtist && (
              <>
                {" "}
                <span className="album-with">with </span>
                <span className="featured-artist">{album.featuredArtist}</span>
              </>
            )}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

const Albums = () => {
  const studioAlbums = [
    {
      title: "Infinite",
      date: "1996",
      url: "https://open.spotify.com/album/14JahnBKUL2ou13zH2OOQP?si=5TjM7kegRrqLw5z6rMUb-g",
    },
    {
      title: "The Slim Shady LP",
      date: "1999",
      url: "https://open.spotify.com/album/0vE6mttRTBXRe9rKghyr1l?si=lX4pnrdbQteGQQBM_NjIVQ",
    },
    {
      title: "The Marshall Mathers LP",
      date: "2000",
      url: "https://open.spotify.com/album/6t7956yu5zYf5A829XRiHC?si=-SGXB486SVukSZfCFyevZA",
    },
    {
      title: "The Eminem Show",
      date: "2002",
      url: "https://open.spotify.com/album/2cWBwpqMsDJC1ZUwz813lo?si=0p8JXOSJQ7-eBGw3j5-4fg",
    },
    {
      title: "Encore",
      date: "2004",
      url: "https://open.spotify.com/album/1kTlYbs28MXw7hwO0NLYif?si=_ekyGa1ASCW98ix3jaoaug",
    },
    {
      title: "Relapse",
      date: "2009",
      url: "https://open.spotify.com/album/7h2OEj0ifXb3UdgvTmCqfY?si=20exIEEbS0Wu56YjKVgiRQ",
    },
    {
      title: "Recovery",
      date: "2010",
      url: "https://open.spotify.com/album/47BiFcV59TQi2s9SkBo2pb?si=zEaBFIj6SCWR8DGjQaJVrw",
    },
    {
      title: "The Marshall Mathers LP 2",
      date: "2013",
      url: "https://open.spotify.com/album/6DN7GcZF1HywzrkGN6Eeqk?si=N6Ly1MTrTEy1JjQr4J50xQ",
    },
    {
      title: "Revival",
      date: "2017",
      url: "https://open.spotify.com/album/0U6ldwLBEMkwgfQRY4V6D2?si=2ZDTTmU5RzeEt0y4F8Zcog",
    },
    {
      title: "Kamikaze",
      date: "2018",
      url: "https://open.spotify.com/album/3HNnxK7NgLXbDoxRZxNWiR?si=-doa6gZ-TCiIcMPgz97emQ",
    },
    {
      title: "Music to Be Murdered By",
      date: "2020",
      url: "https://open.spotify.com/album/4otkd9As6YaxxEkIjXPiZ6?si=4PwmCDuOT9SAd1I3IkITvQ",
    },
    {
      title: "The Death of Slim Shady (Coup de Grâce)",
      date: "2024",
      url: "https://open.spotify.com/album/3kjHLu1pL7tdY88GFwEkl6?si=FB7QMDBYR5ikGjnBkdnPpQ",
    },
  ];

  const collaborativeAlbums = [
    {
      title: "Devil's Night",
      date: "2001",
      featuredArtist: "D12",
      url: "https://open.spotify.com/album/22CVoj4sxsAGO02OONbkQA?si=f326d91d8aff4f0e",
    },
    {
      title: "D12 World",
      date: "2004",
      featuredArtist: "D12",
      url: "https://open.spotify.com/album/61EgDesQnFVyYf2UneM9PQ?si=aa40657d1def446c",
    },
    {
      title: "Eminem Presents: The Re-Up",
      date: "2006",
      featuredArtist: "Shady Records",
      url: "https://open.spotify.com/album/6NeJONAsrs5xp24Jnkr4K0?si=4ecceb24f8e74e15",
    },
    {
      title: "Hell: The Sequel",
      date: "2011",
      featuredArtist: "Bad Meets Evil",
      url: "https://open.spotify.com/album/5xmlEmQJRfoCb6jPhiguDc?si=d595f1a9193a4397",
    },
    {
      title: "Shady XV",
      date: "2014",
      featuredArtist: "Shady Records",
      url: "https://open.spotify.com/album/6wdSf72duVewXTqhYU3Z87?si=eb08bfbae80043a9",
    },
  ];

  return (
    <div id="albums">
      <AlbumList title="Studio albums" albums={studioAlbums} />
      <AlbumList title="Collaborative albums" albums={collaborativeAlbums} />
    </div>
  );
};

export default Albums;
