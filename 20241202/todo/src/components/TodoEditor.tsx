type TodoEditorProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export default function TodoEditor({value, onChange, onClick} : TodoEditorProps) {

  return (
    <div className="flex p-4">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        onClick={onClick}
      >
        Add Todo
      </button>
    </div>
  );
}

