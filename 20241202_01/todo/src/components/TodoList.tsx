import TodoListItem from "./TodoListItem";
import { TodoItem } from "./Todo";

interface TodoListProps {
  todos: TodoItem[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}: TodoListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
