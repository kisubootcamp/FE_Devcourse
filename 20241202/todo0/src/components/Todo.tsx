import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState<{ id: number; content: string }[]>([]);
  const [id, setId] = useState(0);

  // 할일 등록
  const EditTodo = (data: string) => {
    setId((id) => id + 1);
    setTodo((todo) => [...todo, { content: data, id: id }]);
  };
  // 할일 삭제
  const delTodo = (id: number) => {
    setId(id);
    setTodo(todo.filter((v) => v.id !== id));
  };

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor edit={EditTodo} />
      {todo && <TodoList todo={todo} setId={delTodo} />}
    </div>
  );
}
