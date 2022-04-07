import { combineReducers } from "redux";
import addTask from "./task";
const rootReducer = combineReducers({
  addTask,
});
export default rootReducer;
