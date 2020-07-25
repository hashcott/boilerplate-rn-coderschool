import { combineReducers } from "redux";
import ExampleReducer from "./ExampleReducer";

export default combineReducers({
  example: ExampleReducer,
});
