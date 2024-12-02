export default function TodoEditor({
  title,
  changeHandler,
  handleClick,
}: {
  title: { text: string };
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}) {
  return (
    <div className="flex p-4">
      <input
        type="text"
        value={title.text}
        onChange={changeHandler}
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        onClick={handleClick}
      >
        Add Todo
      </button>
    </div>
  );
}
