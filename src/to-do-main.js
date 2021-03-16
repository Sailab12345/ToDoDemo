import ToDo from "./todo";
import React from "react";
import { connect } from "react-redux";

const ToDoMain = (props) => {
  const { counter, increase, decrease } = props;
  return <ToDo value={counter} onIncrement={increase} onDecrement={decrease} />;
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INCREMENT" }),
    decrease: () => dispatch({ type: "DECREMENT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoMain);
