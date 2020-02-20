import React, { Component } from "react";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";
const mapStateToProps = (state, ownProps) => {
  const { todos } = state;
  return { todos: todos };
};
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
export default connect(mapStateToProps)(TodoList);
