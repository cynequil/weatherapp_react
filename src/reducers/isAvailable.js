const isAvailable = (state = false, action) => {
  switch (action.type) {
    case "FORECAST_AVAILABLE":
      return true;
    default:
      return state;
  }
};

export default isAvailable;
