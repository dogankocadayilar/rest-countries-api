import jsonData from "./data/data.json";
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import parseCountryData from "./helpers";
import Country from "./pages/Country";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";

export const themeContext = createContext("dark");
export const countriesContext = createContext(null);

function App() {
  const [countries, setCountries] = useState([]);

  const [theme, setTheme] = useState("dark");

  // Getting the data from the rest countries API
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((resp) => {
        setCountries(
          resp.data.map((country) => parseCountryData(country, resp.data))
        );
      })
      .catch(() => {
        setCountries([]);
      });
  }, []);

  return (
    <div className="app">
      <themeContext.Provider value={{ theme, setTheme }}>
        <countriesContext.Provider value={countries}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:country" element={<Country />} />
          </Routes>
        </countriesContext.Provider>
      </themeContext.Provider>
    </div>
  );
}

export default App;
