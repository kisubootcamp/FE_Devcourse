import { Todo } from "./Todo";

type TodoListItemProps = {
  todo: Todo;
  onClick: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoListItem({todo, onClick, onDelete}: TodoListItemProps) {
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400" checked={todo.checked} onChange={() => onClick(todo.id)}
        />
        <span style={{textDecoration: todo.checked ? 'line-through' : 'none'}}>{todo.text}</span>
      </div>
      <button className="text-red-500 hover:text-red-700 ml-4" onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

