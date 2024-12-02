import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, handleDelete }: TodoListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo, index) => (
        <TodoListItem key={index} todo={todo} handleDelete={handleDelete} />
      ))}
    </ul>
  );
}
