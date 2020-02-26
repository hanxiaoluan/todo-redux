import React from "react";
import PropTypes from "prop-types";

const Todo = props => {
  return (
    <li
      onClick={props.onClick}
      style={{ textDecoration: props.completed ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
};
export default Todo;
