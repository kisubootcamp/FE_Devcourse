import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [items, setItems] = useState<string[]>([]);
  return (
    <div className="max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
      <TodoHeader />
      <TodoEditor setItems={setItems} />
      <TodoList items={items} setItems={setItems} />
    </div>
  );
}
