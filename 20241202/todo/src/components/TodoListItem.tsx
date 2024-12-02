export default function TodoListItem({
  todo,
  toggleTodo,
  index,
  deleteTodo,
}: {
  todo: { text: string; checked: boolean };
  toggleTodo: (index: number) => void;
  index: number;
  deleteTodo: (index: number) => void;
}) {
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => toggleTodo(index)}
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        />
        <span className={todo.checked ? "line-through" : ""}>{todo.text}</span>
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={() => deleteTodo(index)}
      >
        Delete
      </button>
    </li>
  );
}
