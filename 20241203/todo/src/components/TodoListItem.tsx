import React, { useCallback } from "react";

type TodoListProps = {
  item: { id: number; content: string; checked: boolean };
  setList: React.Dispatch<
    React.SetStateAction<{ id: number; content: string; checked: boolean }[]>
  >;
};

export default React.memo(function TodoListItem({
  item,
  setList,
}: TodoListProps) {
  const deleteClickHandler = useCallback(() => {
    setList((prev) => prev.filter((listItem) => listItem.id !== item.id));
  }, [setList, item.id]);

  const checkboxChangeHandler = useCallback(() => {
    setList((prev) =>
      prev.map((listItem) =>
        listItem.id === item.id
          ? { ...listItem, checked: !listItem.checked }
          : listItem
      )
    );
  }, [setList, item.id]);
  console.log("todo rendering");
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={checkboxChangeHandler}
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        />
        <span className={`${item.checked ? "line-through" : ""}`}>
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
});
