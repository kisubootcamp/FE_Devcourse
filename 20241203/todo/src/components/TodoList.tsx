import React from "react";
import TodoListItem from "./TodoListItem";

type TodoListProps = {
  list: { id: number; content: string; checked: boolean }[];
  setList: React.Dispatch<
    React.SetStateAction<{ id: number; content: string; checked: boolean }[]>
  >;
};

export default function TodoList({ list, setList }: TodoListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {list.map((item, index) => (
        <TodoListItem key={index} item={item} setList={setList} />
      ))}
    </ul>
  );
}
