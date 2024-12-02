import TodoListItem from "./TodoListItem";

export default function TodoList({
  items,
  setItems,
}: {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <TodoListItem key={index} item={item} setItems={setItems} />
      ))}
    </ul>
  );
}
