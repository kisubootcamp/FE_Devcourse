import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todolists: string[];
  deleteTodo: (index: number) => void;
}

export default function TodoList({ todolists, deleteTodo }: TodoListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {todolists.map((listTitle, i) => {
        return (
          <TodoListItem
            title={listTitle}
            index={i}
            key={i}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
