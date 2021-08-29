/** @format */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../state/reducers/index";

export const store = createStore(reducer, {}, applyMiddleware(thunk));
