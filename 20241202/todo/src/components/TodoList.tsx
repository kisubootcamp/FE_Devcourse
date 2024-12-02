import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todos: Todo[];
  dispatch: React.Dispatch<ReducerAction>;
}

export default function TodoList({ todos, dispatch }: TodoListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}
