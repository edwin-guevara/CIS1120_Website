import { HashLink } from "react-router-hash-link";
import "../NavMenu.css";
export default function NavMenu() {
  return (
    <nav>
      <ul>
        <li>
          <HashLink to="/">Home</HashLink>
        </li>
        <li>
          <HashLink to="/about">About</HashLink>
        </li>
        <li>
          <HashLink to="/discography">Discography</HashLink>
        </li>
        <li>
          <HashLink to="/videos">Videos</HashLink>
        </li>
      </ul>
    </nav>
  );
}
