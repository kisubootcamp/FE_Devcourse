import { useState } from "react";

export default function TodoEditor({
  addTodo,
}: {
  addTodo: (text: string) => void;
}) {
  const [input, setInput] = useState("");

  const addHandler = () => {
    if (!input) return;
    addTodo(input);
    setInput("");
  };

  // IME -> 조합문자
  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    addHandler();
  };

  return (
    <div className="flex p-4">
      <input
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && keyDownHandler(e)}
      />
      <button
        className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-r-md hover:bg-blue-600"
        onClick={addHandler}
      >
        Add Todo
      </button>
    </div>
  );
}
