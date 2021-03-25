import { combineReducers, createStore, applyMiddleware } from "redux";
import Reducer from "../users/userreducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
//const combinereducer = combineReducers({ cake: Reducer });

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
