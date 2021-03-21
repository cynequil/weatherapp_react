const browserLocation = (state = false, action) => {
  switch (action.type) {
    case "LOCATION_BROWSER":
      return action.payload;
    default:
      return state;
  }
};

export default browserLocation;
