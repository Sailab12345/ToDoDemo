const initialstate = {
  age: 20
};

const reducer = (state = initialstate, action) => {
  const { newState } = { ...state };
  switch (action.type) {
    case "ADD_ASYNC":
      return {
        ...state,
        age: state.age + 1
      };

    case "DECREASE":
      return {
        ...state,
        age: state.age - 1
      };
    default:
      return state;
  }
  // return newState;
};

export default reducer;
