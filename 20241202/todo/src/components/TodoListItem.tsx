import { useState } from "react";

type TodoListProps = {
  item: { id: number; content: string };
  setList: React.Dispatch<
    React.SetStateAction<{ id: number; content: string }[]>
  >;
};

export default function TodoListItem({ item, setList }: TodoListProps) {
  const deleteClickHandler = () => {
    setList((prev) => prev.filter((listItem) => listItem.id !== item.id));
  };
  const [checked, setChecked] = useState(false);
  const checkboxChangeHandler = () => {
    setChecked((prev) => !prev);
  };
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          onChange={checkboxChangeHandler}
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        />
        <span className={`${checked ? "line-through" : ""}`}>
          {item.content}
        </span>
      </div>
      <button
        onClick={deleteClickHandler}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </li>
  );
}
