import TodoListItem from "./TodoListItem";

export default function TodoList(props: ITodoListProps) {
  const { todos, setTodos } = props;
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo, index) => (
        <TodoListItem key={index} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
}
