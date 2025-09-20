import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  //   console.log(country.area.area);
  //   console.log(handleVisitedCountries);
  const handleVisited = () => {
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // setVisited(visited ? false : true);
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`Country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt="" />
      <h3>Name: {country.name.common}</h3>
      <h4>Capital: {country.capital.capital}</h4>
      <p>Population: {country.population.population}</p>
      <p>Region: {country.region.region}</p>
      <p>
        Area:
        {country.area.area}{" "}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      {/* <p>languages: {country.languages}</p> */}
    </div>
  );
};

export default Country;
