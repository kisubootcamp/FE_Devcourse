import { useState } from "react";

export default function TodoListItem({ todo, state, id }: toDO) {
  const [chk, setChk] = useState(false);
  // 체크 박스 상태 변환
  const handleChange = () => {
    setChk(!chk);
  };
  // 할일 삭제를 위한 부모에게 id 넘기기
  const delTodo = () => {
    state(id);
  };
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={chk}
          onChange={handleChange}
        />
        <span style={{ textDecoration: chk ? "line-through" : "none" }}>
          {todo.content}
        </span>
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={delTodo}
      >
        Delete
      </button>
    </li>
  );
}
