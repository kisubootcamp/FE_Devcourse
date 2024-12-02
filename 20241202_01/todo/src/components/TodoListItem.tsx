import { TodoItem } from "./Todo";

interface TodoListItemProps {
  todo: TodoItem;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoListItem({
  todo,
  toggleTodo,
  deleteTodo,
}: TodoListItemProps) {
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-3 h-4 w-4 ext-blue-500 focus:ring-blue-400"
        />
        <span className={`${todo.completed ? "line-through" : ""}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </li>
  );
}
