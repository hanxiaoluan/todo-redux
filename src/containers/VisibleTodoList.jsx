import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.completed);
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
    default:
      throw new Error("Unknown filter" + filter);
  }
};
const mapStateToProps = (state, ownProps) => {
  const { todos, visibilityFilter } = state;
  return { todos: getVisibleTodos(todos, visibilityFilter) };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});
/* const mapStateToProps = (state,)
class VisibleTodoList extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
} */
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
