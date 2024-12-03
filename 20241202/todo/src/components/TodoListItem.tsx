import { Dispatch } from "react";
import { twMerge } from "tailwind-merge";
import { TodoItemType, TodoReducerAction } from "../types/todo";

interface TodoListItemProps {
  todoItem: TodoItemType;
  todoIndex: number;
  dispatch: Dispatch<TodoReducerAction>;
}

export default function TodoListItem({
  todoItem,
  todoIndex,
  dispatch,
}: TodoListItemProps) {
  const handleToggleTodo = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todoIndex });
  };

  const handleDeleteTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: todoIndex });
  };

  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={todoItem.done}
          onChange={handleToggleTodo}
        />
        <span className={twMerge(todoItem.done && "line-through")}>
          {todoItem.todo}
        </span>
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={handleDeleteTodo}
      >
        Delete
      </button>
    </li>
  );
}
