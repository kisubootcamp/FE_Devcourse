import { useState } from 'react';

export default function TodoListItem({
  todo,
  onRemove,
}: {
  todo: string;
  onRemove: () => void;
}) {
  // 체크박스의 상태
  const [ischecked, setIsChecked] = useState(false);

  // 기존의 isChecked 상태 값을 반전시키는 역할(토글)
  const handleCheck = () => {
    setIsChecked((check) => !check);
  };

  return (
    <li className='flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors'>
      <div className='flex items-center'>
        <input
          type='checkbox'
          checked={ischecked}
          onChange={handleCheck}
          className='mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400'
        />
        <span className={ischecked ? 'line-through' : ''}>{todo}</span>
      </div>
      {/* TodoListItem에서 onRemove 버튼을 클릭하면 onRemove가 호출되고, 그 onRemove는 상위 컴포넌트인 TodoList에서 onRemoveTodo(index)로 전달*/}
      {/* TodoList에서 onRemoveTodo 함수는 index를 인자로 받아 Todo 컴포넌트의 setTodos 함수로 전달되면서 해당 index의 할 일(todo)을 삭제하는 동작을 실행 */}
      {/* setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index)) 코드가 실행되면서, index와 일치하는 아이템을 제외한 나머지 prevTodos 배열을 새로운 상태로 설정 */}
      {/* 상태가 변경될 때마다 배열을 다시 렌더링하기 때문에 index로 삭제를 진행해도 index가 겹쳐 오류가 생길 일이 없음 */}
      <button
        onClick={onRemove}
        className='text-red-500 hover:text-red-700 ml-4'>
        Delete
      </button>
    </li>
  );
}
