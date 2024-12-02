import TodoListItem from "./TodoListItem";

export default function TodoList({ todo, setId }: toDOList) {
  // 할일 삭제를 위한 id 값 부모에게 주기
  const delTodo = (id: number) => {
    setId(id);
  };

  return (
    <ul className="divide-y divide-gray-200">
      {todo.map((v, i) => (
        <TodoListItem todo={v} state={delTodo} id={v.id} key={i} />
      ))}
    </ul>
  );
}
