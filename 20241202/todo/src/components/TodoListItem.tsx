import { useState } from "react";

export default function TodoListItem({ todo, handleDelete }: TodoItemProps) {
  const [checked, setChecked] = useState(false);

  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        />
        <span className={checked ? `line-through` : ""}>{todo}</span>
      </div>
      <button
        onClick={() => handleDelete(todo)}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </li>
  );
}
