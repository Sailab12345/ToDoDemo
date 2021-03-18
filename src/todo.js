import React from "react";
import { connect } from "react-redux";

const ToDo = (props) => {
  const { value, onIncrement, onDecrement } = props;
  return (
    <>
      <div className="ui segment">
        <h1>{value}</h1>
        <div className="ui button" onClick={onIncrement}>
          Add
        </div>

        <div className="ui button" onClick={onDecrement}>
          Decrease
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
