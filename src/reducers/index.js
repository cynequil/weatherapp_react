import { combineReducers } from "redux";
import latLong from "./latLong";
import placeName from "./placeName";
import foreCast from "./foreCast";
import isAvailable from "./isAvailable";

// all individual reducers of the application are imported
// combined using combineReducers and exported as allReducers

const allReducers = combineReducers({
  coordinates: latLong,
  place_name: placeName,
  forecast: foreCast,
  data: isAvailable,
});

export default allReducers;
