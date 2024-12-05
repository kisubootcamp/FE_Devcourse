import { useCallback, useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

// 리액트 훅
// 최상위 스코프 레벨에서만 써야함
// 함수 바로 안에서만 써야함
export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      { id: Date.now(), text: text, completed: false },
    ]);
  };
  const toggleTodo = useCallback((id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);
  const removeTodo = useCallback((id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}
