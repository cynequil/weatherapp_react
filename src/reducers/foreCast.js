const foreCast = (state = [], action) => {
  switch (action.type) {
    case "FORECAST":
      return action.payload;
    default:
      return state;
  }
};

export default foreCast;
