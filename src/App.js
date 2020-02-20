import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css";
import todoApp from "./reducers";
import Home from "./components/home";
const store = createStore(todoApp);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
