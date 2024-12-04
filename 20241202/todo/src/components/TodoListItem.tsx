import { useId } from "react";
import { Todo } from "./Todo";

type TodoListItemProps = {
  todo: Todo;
  onClick: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoListItem({ todo, onClick, onDelete }: TodoListItemProps) {
  const uuid = useId(); // 컴포넌트마다 고유한 아이디가 필요할 때
  
  return (
    <li className='flex items-center justify-between p-3 transition-colors border-t hover:bg-gray-100'>
      <div className='flex items-center'>
        <input
          id={uuid}
          type='checkbox'
          checked={todo.checked}
          onChange={() => onClick(todo.id)}
          className='w-4 h-4 mr-3 text-blue-500 focus:ring-blue-400'
        />
        <label htmlFor={uuid} style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
          {todo.text}
        </label>
      </div>
      <button 
        onClick={() => onDelete(todo.id)}
        className='ml-4 text-red-500 hover:text-red-700'
      >
        Delete
      </button>
    </li>
  );
}
