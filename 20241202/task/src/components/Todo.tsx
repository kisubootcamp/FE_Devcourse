import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>(
    []
  );

  const addTodo = (text: string) => {
    if (text.trim() === "") return;
    setTodos((prevTodos) => [...prevTodos, { text, completed: false }]);
  };

  const toggleTodo = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}
