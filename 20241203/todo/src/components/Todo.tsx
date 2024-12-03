import { useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todo") || "[]")
  );
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(list));
  }, [list]);
  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor setList={setList} />
      <TodoList list={list} setList={setList} />
    </div>
  );
}
