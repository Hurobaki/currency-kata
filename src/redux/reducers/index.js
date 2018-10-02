import { combineReducers } from "redux";
import { currenciesReducer } from "./currencies";

export const RootReducer = combineReducers({
  currenciesState: currenciesReducer
});
