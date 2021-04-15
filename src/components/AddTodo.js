import { render } from "@testing-library/react";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
const AddTodo = (props) => {
  debugger;
  const { onSubmit } = props;
  const [todo, setTodo] = useState({});
  console.log(todo);

  const updateState = (event) => {
    const { target } = event;
    const { name, value } = target;
    setTodo((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  };

  const handleSubmit = () => {
    debugger;

    onSubmit(todo);
  };
  return (
    <div className="ui segment ">
      <form className="ui form align-center">
        <div className="field">
          <label>First Name</label>
        </div>
        <div className="field">
          <input type="text" name="todoName" onChange={updateState} placeholder="First Name" />
          <button className="ui button" onClick={handleSubmit}>
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    onSubmit: (props) => {
      debugger;
      dispatch(addTodo(props));
    }
  };
};
export default connect(null, mapDispatchToProps)(AddTodo);
