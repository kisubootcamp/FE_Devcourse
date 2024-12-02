import { useState } from "react";

export default function TodoListItem(props: {
  content: string;
  key: number;
  index: number;
  todolist: string[];
  setTodolist: any;
}) {
  const [check, setCheck] = useState(false);
  const clickHandler = (index: number) => {
    props.setTodolist((prev: any) => {
      return [...prev].filter((_, i) => i !== index);
    });
  };
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          onChange={() => {
            setCheck(!check);
          }}
        />
        {check ? (
          <span style={{ textDecoration: "line-through" }}>
            {props.content}
          </span>
        ) : (
          <span>{props.content}</span>
        )}
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={() => {
          clickHandler(props.index);
        }}
      >
        Delete
      </button>
    </li>
  );
}
