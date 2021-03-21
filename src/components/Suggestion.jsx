import React from "react";
import { useDispatch } from "react-redux";
import { changeLatLong, changePlaceName } from "../actions";

const Suggestion = ({ suggestion, i }) => {
  const dispatch = useDispatch();

  const {
    name,
    address_line1,
    county,
    state,
    country,
    lat,
    lon,
  } = suggestion.properties;
  let final_name = name || address_line1;
  let handleClick = (place) => {
    let name = place.properties.name || place.properties.address_line1;
    console.log([lat, lon], name);
    dispatch(changeLatLong([lat, lon]));
    dispatch(changePlaceName(name));
  };
  return (
    <button
      key={i}
      className="suggestions"
      onClick={() => handleClick(suggestion)}
    >
      <span className="main_name">{final_name}, </span>
      {county}, {state}, {country}
    </button>
  );
};

export default Suggestion;
