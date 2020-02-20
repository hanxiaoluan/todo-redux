import React, { Component } from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const Home = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
  </div>
);
export default Home;
