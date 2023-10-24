import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
export const Navigation = ({children}) => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {children}
      </ul>
    </nav>
  );
};

export const NavItem = ({
    to,
    children,
}) => {
    return <li><Link to={to}>{children}</Link></li>
}