import TodoListItem from "./TodoListItem";



export default function TodoList({
  todos,
  toggleTodoCompletion,
  deleteTodo,
}: TodoListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodoCompletion={toggleTodoCompletion}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
