import { useContext } from "react";
import { themeContext } from "../App";
import styles from "./Navbar.module.css";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  const { theme } = useContext(themeContext);

  return (
    <nav className={`${styles.navbar} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Where in the world?</h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
