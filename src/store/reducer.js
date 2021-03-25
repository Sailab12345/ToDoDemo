const initialState = {
  cakes: 20
};

const cakereducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY":
      return {
        ...state,
        cakes: state.cakes - 1
      };
    default:
      return state;
  }
};

export default cakereducer;
