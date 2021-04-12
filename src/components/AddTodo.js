import { render } from "@testing-library/react";
import React from "react";

const AddTodo = () => {
  return (
    <div className="ui segment ">
      <form className="ui form text-center">
        <div className="field">
          <label>First Name</label>
          <input type="text" name="first-name" placeholder="First Name" />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
