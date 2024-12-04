import React, { useId } from "react";

// todoList item에 메모이제이션을 준다.
export default React.memo(function TodoListItem({
  todo,
  onDelete,
  onToggle,
}: TodoItemProps) {
  console.log("todoListItem rendering");

  const uuid = useId();

  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400 "
          id={uuid}
        />
        <label htmlFor={uuid} className={`${todo.completed && `line-through`}`}>
          {todo.text}
        </label>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </li>
  );
});
