import TodoListItem from "./TodoListItem";

export default function TodoList({ todolist, setTodolist }: PropsType) {
  return (
    <ul className="divide-y divide-gray-200">
      {todolist.map((val, index) => {
        return (
          <TodoListItem
            key={index}
            index={index}
            content={val}
            todolist={todolist}
            setTodolist={setTodolist}
          />
        );
      })}
    </ul>
  );
}
