import React from "react";
import ReactDOM from "react-dom";

import ToDo from "./todo";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
const store = createStore(counter);
const ToDoMain = (props) => (
  <div>
    <ToDo
      value={props.state}
      onIncrement={() =>
        store.dispatch({
          type: "INCREMENT"
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: "DECREMENT"
        })
      }
    />
  </div>
);
const mapStateToProps = (state) => ({ state: state });
const MainComponent = connect(mapStateToProps)(ToDoMain);

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
