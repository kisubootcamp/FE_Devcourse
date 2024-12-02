import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAdd = () => {
    const newTodo: Todo = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      text: inputText,
      checked: false,
    };

    setTodos([...todos, newTodo]);
    setInputText(""); // 입력창 초기화
  };

  const handleCheck = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor value={inputText} onChange={handleChange} onClick={handleAdd} />
      <TodoList todos={todos} onClick={handleCheck} onDelete={handleDelete} />
    </div>
  );
}
