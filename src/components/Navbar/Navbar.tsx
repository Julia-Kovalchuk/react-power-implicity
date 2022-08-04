import "./navbar.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="nav">
      <a href="#" className="nav__link">
        <Logo className="nav__logo"></Logo>
      </a>
      <ul className="nav__menu">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Partners
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Stories
          </a>
        </li>
      </ul>
      <button className="nav__button" type="button">
        Download for free
      </button>
    </nav>
  );
};
