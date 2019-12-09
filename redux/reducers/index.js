import { combineReducers } from "redux";

import notifyReducer from "./notifyReducer"
export default combineReducers({
    setting: notifyReducer,
});