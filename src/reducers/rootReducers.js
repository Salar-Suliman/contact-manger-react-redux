import { combineReducers } from "redux";
import contactReducers from "./contactReducers";
export default combineReducers({
  contact: contactReducers
});
