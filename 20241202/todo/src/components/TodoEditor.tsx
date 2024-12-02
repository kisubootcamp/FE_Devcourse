import { useState } from "react";
import TodoList from "./TodoList";

export default function TodoEditor() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onBtnClick = () => {
    if (!input) return;
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <>
      <div className="flex p-4">
        <input
          onChange={onInputChange}
          value={input}
          type="text"
          placeholder="Enter a new todo"
          className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onBtnClick}
          className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-r-md hover:bg-blue-600"
        >
          Add Todo
        </button>
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
