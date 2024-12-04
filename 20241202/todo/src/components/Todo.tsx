import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (newTodo: string) =>
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: newTodo, completed: false },
    ]);

  const handleDeleteTodo = (deleteId: number) =>
    setTodos((prevTodos) => [
      ...prevTodos.filter((item) => item.id !== deleteId),
    ]);

  const handleToggleTodo = (checkId: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === checkId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor handleAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        handleDelete={handleDeleteTodo}
        handleToggle={handleToggleTodo}
      />
    </div>
  );
}
