import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (newTodo: string) =>
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  const handleDeleteTodo = (deleteTodo: string) =>
    setTodos((prevTodos) => [
      ...prevTodos.filter((item) => item !== deleteTodo),
    ]);

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor handleAdd={handleAddTodo} />
      <TodoList todos={todos} handleDelete={handleDeleteTodo} />
    </div>
  );
}
