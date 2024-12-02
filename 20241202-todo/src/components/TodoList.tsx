import TodoListItem from './TodoListItem';

export default function TodoList({
  todos,
  onRemoveTodo,
  onToggleCheck,
}: {
  todos: { text: string; isChecked: boolean }[];
  onRemoveTodo: (index: number) => void;
  onToggleCheck: (index: number) => void;
}) {
  return (
    <ul className='divide-y divide-gray-200'>
      {/* todos.map()을 사용해서 todos 배열을 순회하고, 각 todo 항목을 TodoListItem 컴포넌트에 전달 */}
      {/* 삭제 버튼이 클릭될 때, 해당 index를 onRemoveTodo 함수에 전달하여 해당 항목을 삭제 */}
      {/* onToggle을 실행하면 체크된 항목만 isChecked가 변경 */}
      {/* map이 각 항목을 순회하며 isChecked 값을 변경할 때, 그 항목이 변경되거나 수정되었으면, 새로운 배열에서는 그 항목의 상태만 변경됨 */}
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo.text}
          isChecked={todo.isChecked}
          onRemove={() => onRemoveTodo(index)}
          onToggle={() => onToggleCheck(index)}
        />
      ))}
    </ul>
  );
}
