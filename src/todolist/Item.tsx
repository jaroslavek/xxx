import * as React from "react";
import { TodoItem } from "./TodoList";

export interface IItemProps {
  item: TodoItem;
  removeItem: (id: number) => void;
}

export function Item(props: IItemProps) {
  function handleItemClick() {
    props.removeItem(props.item.id);
  }

  return <li onClick={handleItemClick}>{props.item.text}</li>;
}
