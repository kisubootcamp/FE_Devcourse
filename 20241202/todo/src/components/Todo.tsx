import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [list, setList] = useState([{ id: 1, content: "Todo Example" }]);
  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <TodoHeader />
      <TodoEditor setList={setList} />
      <TodoList list={list} setList={setList} />
    </div>
  );
}
