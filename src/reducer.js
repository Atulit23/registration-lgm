function twReducer(state = [{}], action) {
  switch (action.type) {
    case "ADD_MSG":
      return [...state, action.text];
    case "DEL_MSG":
      return state.filter((item) => item != action.text);
    default:
      return state;
  }
}

export default twReducer;
