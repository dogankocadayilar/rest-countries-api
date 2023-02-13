import { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../../../App";
import InfoRow from "../../../components/InfoRow";
import styles from "./Card.module.css";

function Card({ country }) {
  const { theme } = useContext(themeContext);

  return (
    <Link
      to={`/${country.name.common}`}
      className={`${styles.card} ${theme === "dark" ? styles.dark : ""}`}
    >
      <img src={country.flag} alt="Flag Picture" className={styles.flag} />
      <div className={styles.details}>
        <h2 className={styles.title}>{country.name.common}</h2>
        <InfoRow title={"Population"}>{country.population}</InfoRow>
        <InfoRow title={"Region"}>{country.region}</InfoRow>
        <InfoRow title={"Capital"}>{country.capital}</InfoRow>
      </div>
    </Link>
  );
}

export default Card;
