export default function parseCountryData(country, countries) {
  return {
    name: {
      common: country.name.common,
      official: country.name.official,
      native: Object.values(country.name.nativeName || "")[0]?.official,
    },
    population: numberWithCommas(country.population),
    region: country.region,
    subregion: country.subregion,
    capital: Array.from(country.capital || "")[0],
    area: country.area,
    flag: country?.flags.svg,
    topleveldomain: Array.from(country.tld || "")[0],
    currencies: Object.values(country.currencies || "")[0]?.name,
    languages: Object.values(country.languages || []),
    borders: country.borders?.map(
      (border) =>
        countries.find((country) => country.cca3 === border).name.common || []
    ),
  };
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
