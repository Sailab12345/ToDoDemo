import React from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

function CakeMain() {
  const value = useSelector((state) => state.cakes);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="ui segment">No. of Cakes-{value}</div>
      <button onClick={() => dispatch({ type: "BUY" })}>BUY</button>
    </div>
  );
}

export default CakeMain;
