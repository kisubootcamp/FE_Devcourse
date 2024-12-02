import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [toDolists, setTodoLists] = useState<string[]>([]);

  const newTodo = (title: string) => {
    if (!title) return;
    setTodoLists((prev) => [...prev, title]);
  };

  const deleteTodo = (index: number) => {
    setTodoLists((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor newTodo={newTodo} />
      <TodoList todolists={toDolists} deleteTodo={deleteTodo} />
    </div>
  );
}
