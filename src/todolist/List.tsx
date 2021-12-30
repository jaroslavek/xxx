import * as React from "react";
import { TodoItem } from "./TodoList";
import { Item } from "./Item";

type Props = {
  items: TodoItem[];
  removeItem: (id: number) => void;
};

export function List(props: Props) {
  const todoItems = props.items.map(item => (
    <Item key={item.id} item={item} removeItem={props.removeItem} />
  ));

  return <ul>{todoItems}</ul>;
}
