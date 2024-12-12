import "../Home.css";
import { HashLink } from "react-router-hash-link";
export default function Home() {
  return (
    <>
      <div id="home">
        <h1>Welcome to Eminem's Unofficial Website</h1>
        <p>
          Step into the mind of a rap legend, where every rhyme is a narrative
          and every beat pulses with raw emotion. From the gritty streets of
          Detroit to the global stage, explore how Eminem became one of the
          best-selling artists of all time. Start by learning a bit more of his
          story by checking out our <HashLink to="/about">About</HashLink>{" "}
          section, or, if you're looking to find your next favorite jam, head on
          straight to our <HashLink to="/videos">Videos</HashLink> section,
          where you'll find some of Eminem's biggest hits.
        </p>
        <p>Experience the legacy, feel the impact, and let the music peak.</p>
      </div>
    </>
  );
}
