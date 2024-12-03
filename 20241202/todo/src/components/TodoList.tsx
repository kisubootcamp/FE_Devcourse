import { Dispatch } from "react";
import { TodoItemType, TodoReducerAction } from "../types/todo";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todoList: TodoItemType[];
  dispatch: Dispatch<TodoReducerAction>;
}

export default function TodoList({ todoList, dispatch }: TodoListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {todoList.map((todoItem, index) => (
        <TodoListItem
          key={index}
          todoIndex={index}
          todoItem={todoItem}
          dispatch={dispatch}
        />
      ))}
    </ul>
  );
}
