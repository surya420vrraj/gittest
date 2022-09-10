import UserReducer from "./reducer/user";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  user: UserReducer,
});
export const store = createStore(rootReducer);
