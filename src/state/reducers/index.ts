/** @format */

import { combineReducers } from "redux";
import reporsitoriesreducer from "./reporsitoriesreducer";

const reducers = combineReducers({
  repositories: reporsitoriesreducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
