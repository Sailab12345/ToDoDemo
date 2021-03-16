import { createStore, combineReducers } from "redux";
import counterReducer from "./counter-reducer";

const reducers = combineReducers({ counter: counterReducer });

function configureStore(initialState) {
  const store = createStore(reducers);
  return store;
}
export default configureStore();
