import { createStore } from "redux";

// Reducer function
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

// Create and export the store
export const store = createStore(reducer);
