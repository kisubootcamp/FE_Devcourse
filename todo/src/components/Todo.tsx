import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [todolist, setTodolist] = useState<string[]>([]);
  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor todolist={todolist} setTodolist={setTodolist} />
      <TodoList todolist={todolist} setTodolist={setTodolist} />
    </div>
  );
}
