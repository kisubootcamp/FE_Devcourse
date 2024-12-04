type TodoEditorProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export default function TodoEditor({ value, onChange, onClick } : TodoEditorProps) {
  return (
    <div className="flex p-4">
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onClick}
        className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-r-md hover:bg-blue-600"
      >
        Add Todo
      </button>
    </div>
  );
}
