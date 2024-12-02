import { useState } from 'react';
import TodoEditor from './TodoEditor';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export default function Todo() {
  // todo 아이템들의 목록을 나타내는 상태
  const [todos, setTodos] = useState<string[]>([]);

  // 새로운 todo를 추가하는 로직
  const addTodo = (newTodo: string) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // todo를 삭제하는 로직
  const removeTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
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
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
}
