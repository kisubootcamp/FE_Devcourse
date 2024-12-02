import { useRef } from "react";
import { twMerge } from "tailwind-merge";

interface TodoListItemProps {
  todo: Todo;
  dispatch: React.Dispatch<ReducerAction>;
}

export default function TodoListItem({ todo, dispatch }: TodoListItemProps) {
  const titleRef = useRef<HTMLSpanElement>(null);

  const toggleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "UPDATE_TODO", value: { ...todo, isChecked: e.target.checked } });
  };
  const deleteTodo = () => {
    dispatch({ type: "DELETE_TODO", value: { ...todo } });
  };

  const startEdit = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (todo.isEditable) return;
    e.preventDefault();
    dispatch({ type: "UPDATE_TODO", value: { ...todo, isEditable: true } });
  };
  const endEdit = () => {
    if (titleRef.current!.innerText.length === 0) return alert("할 일을 입력해주세요!");
    dispatch({
      type: "UPDATE_TODO",
      value: { ...todo, title: titleRef.current!.innerText, isEditable: false },
    });
  };
  const endEditByEnter = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      endEdit();
    }
  };
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={todo.isChecked}
          onChange={toggleCheckbox}
        />
        <span
          ref={titleRef}
          className={twMerge(
            "select-none cursor-text",
            todo.isChecked && !todo.isEditable && "text-todo-checked"
          )}
          onClick={startEdit}
          onKeyDown={endEditByEnter}
          onBlur={endEdit}
          contentEditable={todo.isEditable}
          autoCorrect="off"
          suppressContentEditableWarning
        >
          {todo.title}
        </span>
      </div>
      <button onClick={deleteTodo} className="text-red-500 hover:text-red-700 ml-4">
        Delete
      </button>
    </li>
  );
}
