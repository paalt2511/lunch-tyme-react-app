import { combineReducers } from "redux";

import listViewReducer from "./reducers/listView.reducer";
import lunchPageReducer from "./reducers/launchPage.reducer";

export default combineReducers({
  list: listViewReducer,
  lunchPage: lunchPageReducer
});
