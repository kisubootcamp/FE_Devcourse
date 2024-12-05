import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  handleDelete,
  handleToggle,
}: TodoListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </ul>
  );
}
