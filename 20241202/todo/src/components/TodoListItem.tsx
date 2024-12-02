import { useState } from "react";

export default function TodoListItem(props: ITodoListItemProps) {
  const { todo, setTodos } = props;
  const [isChecked, setIsChecked] = useState(false);
  const onCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  const onDeleteBtnClick = () => {
    setTodos((preTodos) => preTodos.filter((item) => item !== todo));
  };

  return (
    <li className="flex items-center justify-between p-3 transition-colors border-b hover:bg-gray-100">
      <div className="flex items-center">
        <input
          checked={isChecked}
          onChange={onCheckboxChange}
          type="checkbox"
          className="w-4 h-4 mr-3 text-blue-500 focus:ring-blue-400"
        />
        <span
          style={{
            textDecoration: isChecked ? "line-through" : "none",
          }}
        >
          {todo}
        </span>
      </div>
      <button
        onClick={onDeleteBtnClick}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}
