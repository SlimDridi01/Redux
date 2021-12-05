import { combineReducers } from "redux";
import Reducer from "../Reducer";
import filterReducer from "./filterReducer.js";

export default combineReducers({
	todoReducer: Reducer,
	filterReducer,
});
