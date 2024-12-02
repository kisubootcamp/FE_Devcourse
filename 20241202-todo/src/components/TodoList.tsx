import TodoListItem from './TodoListItem';

export default function TodoList({
  todos,
  onRemoveTodo,
}: {
  todos: string[];
  onRemoveTodo: (index: number) => void;
}) {
  return (
    <ul className='divide-y divide-gray-200'>
      {/* todos.map()을 사용해서 todos 배열을 순회하고, 각 todo 항목을 TodoListItem 컴포넌트에 전달 */}
      {/* 삭제 버튼이 클릭될 때, 해당 index를 onRemoveTodo 함수에 전달하여 해당 항목을 삭제 */}
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          onRemove={() => onRemoveTodo(index)}
        />
      ))}
    </ul>
  );
}
