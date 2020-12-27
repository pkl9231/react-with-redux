import { BUY_PEN } from "../pen/PenType";

const initialState = {
  numberOfPens: 10,
};

const PenReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case BUY_PEN:
      return {
        ...state,
        numberOfPens: state.numberOfPens - action.payload, // getting value from BookAction file using buybook function from payload
      };
    default:
      return state;
  }
};

export default PenReducer;
