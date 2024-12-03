import { Dispatch, useState } from "react";
import { TodoReducerAction } from "../types/todo";

interface TodoEditorProps {
  dispatch: Dispatch<TodoReducerAction>;
}

export default function TodoEditor({ dispatch }: TodoEditorProps) {
  const [todo, setTodo] = useState("");
  const handleAddTodo = () => {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  };

  return (
    <div className="flex p-4">
      <input
        type="text"
        placeholder="Enter a new todo"
        value={todo}
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setTodo(e.target.value)}
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
