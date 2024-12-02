import { useState } from 'react';
import TodoEditor from './TodoEditor';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export default function Todo() {
  // todo 아이템들의 목록을 나타내는 상태
  // 체크박스를 누른 후 삭제 했을 때 하위 아이템에 체크가 유지되는 상태를 막기 위해 isChecked 추가
  const [todos, setTodos] = useState<{ text: string; isChecked: boolean }[]>(
    []
  );

  // 새로운 todo를 추가하는 로직
  const addTodo = (newTodo: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: newTodo, isChecked: false },
    ]);
  };

  // todo를 삭제하는 로직
  const removeTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const toggleCheck = (index: number) => {
    // (todo, i)에서 i는 prevTodos 배열에서 현재 항목의 순서를 나타냄
    // map이 배열을 순회하는 동안, 현재 순회 중인 항목의 인덱스(i)와 사용자가 체크하려는 항목의 인덱스(index)가 같을 때만 isChecked 값을 반전(토글)
    // 인덱스가 일치하는 항목만 업데이트 하고 나머지 항목은 유지하므로 배열 순서가 변경되지 않음
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  return (
    <div className='max-w-md mx-auto shadow-lg rounded-lg overflow-hidden'>
      <TodoHeader />
      {/* TodoEditor에 onAddTodo을 props로 addTodo 함수를 전달 */}
      {/* TodoEditor에서는 onAddTodo를 props로 받아 addTodo 함수를 사용할 수 있음 */}
      <TodoEditor onAddTodo={addTodo} />
      {/* todos를 props로 todos(상태)를 TodoList로 전달 */}
      {/* onRemoveTodo를 props로 removeTodo 함수를 전달 */}
      {/* TodoList에서는 onRemoveTodo를 props로 받아 removeTodo 함수를 사용할 수 있음 */}
      <TodoList
        todos={todos}
        onRemoveTodo={removeTodo}
        onToggleCheck={toggleCheck}
      />
    </div>
  );
}
