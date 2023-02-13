import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { themeContext } from "../App";
import styles from "./ThemeSwitcher.module.css";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(themeContext);

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={styles.switcher} onClick={changeTheme}>
      <FontAwesomeIcon
        icon={theme === "dark" ? faMoon : faLightbulb}
        className={styles.icon}
      />
      <span className={styles.theme}>
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
}

export default ThemeSwitcher;
