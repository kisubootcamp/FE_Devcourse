import { useState } from "react";

export default function TodoEditor({
  onAddTodo,
}: {
  onAddTodo: (text: string) => void;
}) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="flex p-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-r-md hover:bg-blue-600"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
}
