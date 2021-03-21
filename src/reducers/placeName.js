const placeName = (state = "", action) => {
  switch (action.type) {
    case "NEW_PLACE":
      return action.payload;
    default:
      return state;
  }
};

export default placeName;
