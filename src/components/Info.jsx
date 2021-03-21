import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeForecast, changePlaceName, forcastActive } from "../actions";
import PlaceInfo from "./PlaceInfo";
import Weather from "./Weather";

const Info = () => {
  const coordinates = useSelector((state) => state.coordinates);
  const name = useSelector((state) => state.place_name);
  const data = useSelector((state) => state.data);
  const forecast = useSelector((state) => state.forecast);
  const dispatch = useDispatch();

  useEffect(() => {
    let api_key = "a6b0453f42f34524920e0643a65200ce";
    let query = `lat=${coordinates[0]}&lon=${coordinates[1]}&`;
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?${query}&key=${api_key}&days=2`;
    if (coordinates[0] !== undefined) {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          dispatch(changeForecast(result.data));
          if (name === "") dispatch(changePlaceName(result.city_name));
          dispatch(forcastActive());
        })
        .catch((error) => console.log("error", error));
    }
  }, [coordinates, dispatch, name]);
  return (
    <div className="box info">
      {data && <PlaceInfo name={name} coordinates={coordinates} />}
      <div className="weather_components">
        {data && <Weather data={forecast[0]}></Weather>}
        {data && <Weather data={forecast[1]}></Weather>}
      </div>
    </div>
  );
};

export default Info;
