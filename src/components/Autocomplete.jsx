import React, { useState } from "react";
import Suggestion from "./Suggestion";

const Autocomplete = () => {
  const [suggestions, setSuggestions] = useState([]);

  let handleKeyChange = async (e) => {
    let value = e.target.value;
    let api_key = `7cf436ed54d54475a1f29637b5d60ecd`;
    if (value !== "") {
      fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&apiKey=${api_key}`
      )
        .then((response) => response.json())
        .then((result) => {
          setSuggestions(result.features);
        })
        .catch((error) => console.log("error", error));
    }
  };
  return (
    <div className="autocomplete">
      <input
        type="text"
        id="location_search"
        placeholder="Search and click suggestion for weather"
        onChange={handleKeyChange}
      />
      {suggestions.map((suggestion, i) => {
        return <Suggestion key={i} suggestion={suggestion} />;
      })}
    </div>
  );
};

export default Autocomplete;
