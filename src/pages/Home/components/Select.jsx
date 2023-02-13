import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { themeContext } from "../../../App";
import styles from "./Select.module.css";

function Select({ filter, setFilter }) {
  const { theme } = useContext(themeContext);

  return (
    <div
      className={`${styles.selectGroup} ${theme === "dark" ? styles.dark : ""}`}
    >
      <select
        className={styles.select}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
    </div>
  );
}

export default Select;
