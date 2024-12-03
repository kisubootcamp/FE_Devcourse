import TodoListItem from "./TodoListItem";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoListProps {
  todos: Todo[];
  dispatch: React.Dispatch<any>;
}

export default function TodoList({ todos, dispatch }: TodoListProps) {
  return (
    <>
      <ul className="divide-y divide-gray-200">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onFinish={() => dispatch({ type: "FINISH_TODO", payload: todo.id })}
            onDelete={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
          />
        ))}
      </ul>
    </>
  );
}
