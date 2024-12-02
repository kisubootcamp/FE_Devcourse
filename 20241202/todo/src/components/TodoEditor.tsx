import { useRef } from "react";

export default function TodoEditor({ dispatch }: { dispatch: React.Dispatch<ReducerAction> }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const addTodo = () => {
    if (!inputRef.current!.value) return alert("할 일을 입력해주세요!");

    dispatch({
      type: "ADD_TODO",
      value: {
        id: Date.now(),
        title: inputRef.current!.value,
        isChecked: false,
        isEditable: false,
      },
    });
    inputRef.current!.value = "";
  };
  return (
    <div className="flex p-4">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoCorrect="off"
        autoComplete="off"
      />
      <button
        onClick={addTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add Todo
      </button>
    </div>
  );
}
