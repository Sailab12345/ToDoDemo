import React from "react";
import { connect } from "react-redux";
// import store from "../store";
const Home = (props) => {
  const { age, onAdd, onDecrease } = props;
  return (
    <>
      <div className="ui container">
        <div>Age:{age}</div>
        <div className="ui button" onClick={onAdd}>
          ADD
        </div>
        <div className="ui button" onClick={onDecrease}>
          Decrease
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch({ type: "ADD" }),
    onDecrease: () => dispatch({ type: "DECREASE" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
