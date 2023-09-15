import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    // console.log("Visited Country List");
    // console.log(country?.name?.common);
    const newVisitedCountries = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountries);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h4>Countries: {visitedCountry.length}</h4>
        <ol>
          {visitedCountry.map((country) => (
            <li key={country.cca3}>{country?.name?.common}</li>
          ))}
        </ol>
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
