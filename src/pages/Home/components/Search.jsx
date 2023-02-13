import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { themeContext } from "../../../App";
import styles from "./Search.module.css";
function Search({ searchValue, setSearchValue }) {
  const { theme } = useContext(themeContext);

  return (
    <div
      className={`${styles.searchGroup} ${theme === "dark" ? styles.dark : ""}`}
    >
      <FontAwesomeIcon icon={faSearch} className={styles.icon} />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.search}
        placeholder={"Search for a country..."}
      />
    </div>
  );
}

export default Search;
