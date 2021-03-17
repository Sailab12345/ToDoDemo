import React from "react";
import { Provider } from "redux";
import ToDoMain from "./todomain";
import store from "./store";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <ToDoMain />
      </Provider>
    </>
  );
};
