import * as React from "react";
import { Title } from "./Title";
import { Form } from "./Form";
import { List } from "./List";

export interface TodoItem {
  id: number;
  text: string;
}

type State = {
  todoItems: TodoItem[];
};

let id: number = 0;
export function TodoList() {
  const [state, setState] = React.useState<State>({ todoItems: [] });

  React.useEffect(() => {
    document.title = `Todo List (${state.todoItems.length})`;
  });

  function addItem(text: string) {
    setState(prevState => {
      id++;
      return {
        todoItems: [{ id, text }, ...prevState.todoItems]
      };
    });
  }

  function removeItem(id: number) {
    setState(prevState => {
      return {
        todoItems: prevState.todoItems.filter(item => item.id !== id)
      };
    });
  }

  return (
    <div className="app">
      <Title title="Todo List" />
      <Form addItem={addItem} />
      <List removeItem={removeItem} items={state.todoItems} />
    </div>
  );
}
