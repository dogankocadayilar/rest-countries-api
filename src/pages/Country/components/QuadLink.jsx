import { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../../../App";
import styles from "./QuadLink.module.css";

function QuadLink({ to, children }) {
  const { theme } = useContext(themeContext);

  return (
    <Link
      to={to}
      className={`${styles.link} ${theme === "dark" ? styles.dark : ""}`}
    >
      {children}
    </Link>
  );
}

export default QuadLink;
