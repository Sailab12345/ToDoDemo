import { applyMiddleware, createStore } from "redux";
import Reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import { watchAgeup } from "../sagas/age_saga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeup);
export default store;
