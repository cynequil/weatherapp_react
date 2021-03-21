export const changeLatLong = (payload) => {
  return {
    type: "NEW_COORDINATE",
    payload,
  };
};

export const changePlaceName = (payload) => {
  return {
    type: "NEW_PLACE",
    payload,
  };
};

export const changeForecast = (payload) => {
  return {
    type: "FORECAST",
    payload,
  };
};

export const forcastActive = () => {
  return {
    type: "FORECAST_AVAILABLE",
  };
};
