import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export interface TodoType {
  text: string;
  checked: boolean;
}
export default function Todo() {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      text: "더미 데이터 1",
      checked: true,
    },
    {
      text: "더미 데이터 2",
      checked: true,
    },
    {
      text: "더미 데이터 3",
      checked: false,
    },
  ]);

  const addTodo = (text: string) => {
    setTodos([...todos, { text, checked: false }]);
  };
  const toggleTodo = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
