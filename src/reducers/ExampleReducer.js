import { EXAMPLE } from "../actions/type";

export default (state = [], action) => {
  switch (action.key) {
    case EXAMPLE:
      return [...state, action.payload];

    default:
      return state;
  }
};
