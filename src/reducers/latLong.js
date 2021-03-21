const latLong = (state = [], action) => {
  switch (action.type) {
    case "NEW_COORDINATE":
      return action.payload;
    default:
      return state;
  }
};

export default latLong;
