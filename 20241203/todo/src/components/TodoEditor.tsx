import { useState } from "react";

type TodoEditorProps = {
  setList: React.Dispatch<
    React.SetStateAction<{ id: number; content: string; checked: boolean }[]>
  >;
};

export default function TodoEditor({ setList }: TodoEditorProps) {
  const [input, setInput] = useState("");
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const addClickHandler = () => {
    if (!input) return;
    const newId = Date.now();
    setList((prev) => [...prev, { id: newId, content: input, checked: false }]);
    setInput("");
  };
  const keydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    console.log(e.key);
    if (e.key === "Enter") {
      e.preventDefault();
      addClickHandler();
    }
  };
  return (
    <div className="flex p-4">
      <input
        type="text"
        value={input}
        onChange={inputChangeHandler}
        onKeyDown={keydown}
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={addClickHandler}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add Todo
      </button>
    </div>
  );
}
