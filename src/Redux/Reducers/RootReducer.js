import { combineReducers } from "redux";
import { TodoReducer } from "./TodoReducer";

export const rootReducer = combineReducers({
  reducer: TodoReducer,
});
