import { useState } from "react";

export default function TodoEditor({
  setItems,
}: {
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [input, setInput] = useState("");

  const deleteHandler = () => {
    setItems((items) => [...items, input]);
    setInput("");
  };

  return (
    <div className="flex p-4">
      <input
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-r-md hover:bg-blue-600"
        onClick={deleteHandler}
      >
        Add Todo
      </button>
    </div>
  );
}
