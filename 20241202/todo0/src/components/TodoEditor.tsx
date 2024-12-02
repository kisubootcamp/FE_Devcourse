import { useState } from "react";

export default function TodoEditor({ edit }: todoProps) {
  const [value, setValue] = useState("");
  // 할일 등록및 입력창 초기화
  const updateTodo = () => {
    edit(value);
    setValue("");
  };
  return (
    <div className="flex p-4">
      <input
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={updateTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add Todo
      </button>
    </div>
  );
}
