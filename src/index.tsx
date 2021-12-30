import * as React from "react";
import { render } from "react-dom";
import { TodoList } from "./todolist/TodoList";

import "./styles.css";

function App() {
  return <TodoList />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
