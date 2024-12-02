import TodoListItem from "./TodoListItem";

export default function TodoList({
  titleArr,
  deleteList,
}: {
  titleArr: string[];
  deleteList: (idx: number) => void;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {titleArr.map((e, idx) => (
        <TodoListItem text={e} index={idx} deleteList={deleteList} key={idx} />
      ))}
    </ul>
  );
}
