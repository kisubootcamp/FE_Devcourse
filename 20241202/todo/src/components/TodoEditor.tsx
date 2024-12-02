import { useState } from "react";

interface TodoEditorProps {
  newTodo: (title: string) => void;
}

export default function TodoEditor({ newTodo }: TodoEditorProps) {
  const [title, setTitle] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <div className="flex p-4">
        <input
          type="text"
          placeholder="Enter a new todo"
          value={title}
          onChange={handleChange}
          className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => {
            newTodo(title);
            setTitle("");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        >
          Add Todo
        </button>
      </div>
    </>
  );
}
