import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  onToggle,
  onDelete,
}: {
  todos: { text: string; completed: boolean }[];
  onToggle: (index: number) => void;
  onDelete: (index: number) => void;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          onToggle={() => onToggle(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}
