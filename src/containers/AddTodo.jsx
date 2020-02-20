import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";
const AddTodo = props => {
  let input;
  const handleSubmit = event => {
    event.preventDefault();
    if (!input.value.trim()) return;
    props.dispatch(addTodo(input.value));
    input.value = "";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
