import { createStore, combineReducers } from "redux";
import Reducer from "./reducer";

const reducers = combineReducers({ counter: Reducer });

const configstore = () => {
  const store = createStore(reducers);
  return store;
};

export default configstore();
