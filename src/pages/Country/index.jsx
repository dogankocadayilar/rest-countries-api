import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { countriesContext, themeContext } from "../../App";
import InfoRow from "../../components/InfoRow";
import QuadLink from "./components/QuadLink";
import styles from "./Index.module.css";

function Country() {
  const { country } = useParams();
  const countries = useContext(countriesContext);
  const [countryObj, setCountryObj] = useState(null);
  const { theme } = useContext(themeContext);

  useEffect(() => {
    setCountryObj(countries.find((c) => c.name.common === country));
  }, [country, countries]);

  return (
    <main className={`${styles.main} ${theme === "dark" ? styles.dark : ""} `}>
      <QuadLink to={"/"}>Back</QuadLink>
      {countryObj?.region.length > 0 && (
        <div className={styles.wrapper}>
          <div className={styles.imageContainer}>
            <img src={countryObj.flag} alt="Flag Picture" />
          </div>
          <div className={styles.detailsContainer}>
            <h2 className={styles.title}>{countryObj.name.common}</h2>
            <div className={styles.detailsWrapper}>
              <div>
                <InfoRow title={"Native Name"}>
                  {countryObj.name.official}
                </InfoRow>
                <InfoRow title={"Population"}>{countryObj.population}</InfoRow>
                <InfoRow title={"Region"}>{countryObj.region}</InfoRow>
                <InfoRow title={"Sub Region"}>{countryObj.subregion}</InfoRow>
                <InfoRow title={"Capital"}>{countryObj.capital}</InfoRow>
              </div>
              <div>
                <InfoRow title={"Top Level Domain"}>
                  {countryObj.topleveldomain}
                </InfoRow>
                <InfoRow title={"Currencies"}>{countryObj.currencies}</InfoRow>
                <InfoRow title={"Languages"}>
                  {countryObj.languages.map((l) => l).join(", ")}
                </InfoRow>
              </div>
            </div>

            {countryObj.borders && (
              <>
                <h4>Border Countries</h4>
                <div className={styles.borderContainer}>
                  {countryObj.borders.map((border) => (
                    <QuadLink key={border} to={`/${border}`}>
                      {border}
                    </QuadLink>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Country;
