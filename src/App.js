import React from "react";
import { Provider } from "react-redux";
import ToDoMain from "./todomain";
import store from "./store";
console.log(store);
const App = () => {
  return (
    <>
      <Provider store={store}>
        <ToDoMain />
      </Provider>
    </>
  );
};
export default App;
