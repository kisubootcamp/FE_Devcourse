import { useState } from "react";

export default function TodoEditor({
  addTodo,
}: {
  addTodo: (text: string) => void;
}) {
  const [text, setText] = useState("");
  const handleAddTodo = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      console.log(text);
      handleAddTodo();
    }
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div className="flex p-4">
      <input
        type="text"
        value={text}
        onChange={handleOnChange}
        placeholder="Enter a new todo"
        onKeyDown={handleKeyDown}
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
}
