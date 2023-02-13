import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { countriesContext, themeContext } from "../../App";
import Card from "./components/Card";
import Search from "./components/Search";
import Select from "./components/Select";
import styles from "./index.module.css";

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

function Home() {
  const { theme } = useContext(themeContext);
  const countries = useContext(countriesContext);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("Europe");

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) => country.region === filter)
    );
  }, [filter, countries]);

  return (
    <main className={`${styles.main} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.options}>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <Select filter={filter} setFilter={setFilter} />
        </div>
        <div className={styles.cardContainer}>
          {filteredCountries.length > 0 &&
            searchValue.length < 3 &&
            filteredCountries.map((country) => {
              return <Card key={country.area} country={country} />;
            })}
          {countries.length > 0 &&
            searchValue.length >= 3 &&
            countries
              .filter((country) =>
                country.name.common
                  .toLowerCase()
                  .includes(searchValue.toLowerCase().trim())
              )
              .map((country) => <Card key={country.area} country={country} />)}
        </div>
      </div>
    </main>
  );
}

export default Home;
