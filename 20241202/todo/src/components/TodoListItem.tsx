import { useState } from "react";

export default function TodoListItem({
  item,
  setItems,
}: {
  item: string;
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <li className="flex items-center justify-between p-3 transition-colors border-b hover:bg-gray-100">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked((checked) => !checked)}
          className="w-4 h-4 mr-3 text-blue-500 focus:ring-blue-400"
        />
        <span className={checked ? "line-through" : ""}>{item}</span>
      </div>
      <button
        className="ml-4 text-red-500 hover:text-red-700"
        onClick={() => setItems((items) => items.filter((v) => v !== item))}
      >
        Delete
      </button>
    </li>
  );
}
