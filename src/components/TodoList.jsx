import React from "react";
import PropTypes from "prop-types";
import Todo from "./todo";
const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <Todo
          text={todo.text}
          key={todo.id}
          {...todo}
          onClick={() => props.toggleTodo(todo.id)}
        />
      ))}
    </ul>
  );
};
export default TodoList;
