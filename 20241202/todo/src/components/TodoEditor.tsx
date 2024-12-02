interface TodoEditorProps {
  input: string;
  setInput: (value: string) => void;
  addTodo: (value: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function TodoEditor({
  input,
  setInput,
  addTodo,
  inputRef,
}: TodoEditorProps) {
  return (
    <div className="flex p-4">
      <input
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            addTodo(input);
          }
        }}
        ref={inputRef}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        onClick={() => {
          addTodo(input);
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
