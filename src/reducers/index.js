//jshint esversion: 9
import { combineReducers } from "redux";
import inputReducer from "./inputReducer";
import fetchReducer from "./fetchReducer";
import darkmodeReducer from "./darkmodeReducer";

const rootReducer = combineReducers({
    inputReducer,
    fetchReducer,
    darkmodeReducer,
});

export default rootReducer;
