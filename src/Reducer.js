const Reducer = (state, action) => {
  console.log(action.type);
  console.log(action.payload);

  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        username: action.payload
      };

    default:
      return state;
  }
};

export default Reducer;
