interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface Props {
  todo: Todo;
  onFinish: () => void;
  onDelete: () => void;
}

export default function TodoListItem({ todo, onFinish, onDelete }: Props) {
  return (
    <li className="flex items-center justify-between p-3 transition-colors border-b hover:bg-gray-100">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={onFinish}
          className="w-4 h-4 mr-3 text-blue-500 focus:ring-blue-400"
        />
        <span className={todo.done ? "line-through text-gray-500" : ""}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}
