import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  delTodo,
  checkedTodo,
}: {
  todos: todoType[];
  delTodo: (id: number) => void;
  checkedTodo: (id: number) => void;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoListItem
          id={todo.id}
          content={todo.content}
          completed={todo.completed}
          key={todo.id}
          delTodo={delTodo}
          checkedTodo={checkedTodo}
        />
      ))}
    </ul>
  );
}
