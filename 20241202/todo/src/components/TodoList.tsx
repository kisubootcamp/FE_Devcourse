import { Todo } from "./Todo";
import TodoListItem from "./TodoListItem";

type TodoListProps = {
  todos: Todo[];
  onClick: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({todos, onClick, onDelete} : TodoListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onClick={onClick} onDelete={onDelete} />
      ))}
    </ul>
  );
}


