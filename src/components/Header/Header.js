import React from "react";
import "./Header.scss";
import { links } from "./constants";
import { Link } from "react-router-dom";
import { routes } from "../../App/routes";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__link-list">
          {links.map((item, index) => (
            <li key={index} className="header__link">
              <Link
                to={`${routes[item.routeName]}`}
                className="header__link-text"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
