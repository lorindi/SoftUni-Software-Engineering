import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { Navigation } from "./Navigation";

export const MainNavigation = () => {
  return (
    <Navigation>
      <li>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "lightblue" : "lightgreen",
          })}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => isActive && styles["nav-active"]}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <Link to="/characters">Characters</Link>
      </li>
    </Navigation>
  );
};
