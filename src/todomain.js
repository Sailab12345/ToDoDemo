import ToDo from "./todo";
import React from "react";
import { connect } from "react-redux";

const ToDoMain = (props) => {
  const { temp, increment, decrement } = props;
  return (
    <>
      <ToDo value={temp} onIncrement={increment} onDecrement={decrement} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    temp: state.temp
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoMain);
