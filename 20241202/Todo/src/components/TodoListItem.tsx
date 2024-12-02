import { useState } from "react";

export default function TodoListItem({
  text,
  index,
  deleteList,
}: {
  text: string;
  index: number;
  deleteList: (idx: number) => void;
}) {
  // 체크박스 체크상태변수
  const [ischecked, setisChecked] = useState(false);
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={ischecked}
          onChange={() => {
            setisChecked(!ischecked);
          }}
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        />
        <span className={`${ischecked && "line-through"}`}>{text}</span>
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={() => {
          deleteList(index);
        }}
      >
        Delete
      </button>
    </li>
  );
}
