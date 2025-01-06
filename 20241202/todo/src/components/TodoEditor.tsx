import { useState, ChangeEvent, FormEvent } from "react";



export default function TodoEditor({ addTodo }: TodoEditorProps) {
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      addTodo(newTodoText);
      setNewTodoText(""); // 인풋 필드 초기화
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };

  return (
    <div className="flex p-4">
      <form onSubmit={handleSubmit} className="flex w-full">
        <input
          type="text"
          placeholder="Enter a new todo"
          value={newTodoText}
          onChange={handleInputChange}
          className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
