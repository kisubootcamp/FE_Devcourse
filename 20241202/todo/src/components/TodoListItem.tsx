import { useState } from "react";

export default function TodoListItem({
  todo,
  removeTodo,
  toggleTodo,
}: {
  todo: Todo;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <li className="flex items-center justify-between p-3 transition-colors border-b hover:bg-gray-100">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-4 h-4 mr-3 text-blue-500 focus:ring-blue-400"
        />
        <span className={todo.completed ? "line-through" : ""}>
          {todo.text}
        </span>
      </div>
      <button
        className="ml-4 text-red-500 hover:text-red-700"
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}
