import "./navbar.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="nav">
      <a href="#" className="nav__link">
        <Logo className="nav__logo"></Logo>
      </a>
      <ul className="nav__menu">
        <li className="nav__item">Features</li>
        <li className="nav__item">Partners</li>
        <li className="nav__item">Stories</li>
      </ul>
      <button className="nav__button">Download for free</button>
    </nav>
  );
};
