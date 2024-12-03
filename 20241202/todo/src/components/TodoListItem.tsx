export default function TodoListItem({
  id,
  content,
  completed,
  delTodo,
  checkedTodo,
}: {
  id: number;
  content: string;
  completed: boolean;
  delTodo: (id: number) => void;
  checkedTodo: (id: number) => void;
}) {
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={completed}
          onChange={() => {
            checkedTodo(id);
          }}
        />
        <span className={`${completed ? "line-through" : ""}`}>{content}</span>
      </div>
      <button
        onClick={() => {
          delTodo(id);
        }}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </li>
  );
}
