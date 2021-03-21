import React from "react";
import { useDispatch } from "react-redux";
import { changeLatLong } from "../actions";

const Currentlocation = () => {
  let dispatch = useDispatch();
  let getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      dispatch(
        changeLatLong([position.coords.latitude, position.coords.longitude])
      );
    });
  };
  return (
    <button className="current_location" onClick={() => getLocation()}>
      Get Current Location
    </button>
  );
};

export default Currentlocation;
