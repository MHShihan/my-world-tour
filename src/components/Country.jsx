import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry }) => {
  // console.log(country);
  const { name, area, flags } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3>{name?.common}</h3>
      <img src={flags?.png} alt="" />
      <p>Area: {area} SKM</p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <hr />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited" : "I want to visit"}
    </div>
  );
};

export default Country;
