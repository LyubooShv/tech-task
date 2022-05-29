import { combineReducers } from "redux";
import getDogReducer from "./getDogReduser";
import logInReducer from "./logInReducer";

export default function createReducer() {
  const rootReducer = combineReducers({
    dog: getDogReducer,
    currentUser: logInReducer,
  });
  return rootReducer;
}
