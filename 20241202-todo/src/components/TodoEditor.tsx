import { useState } from 'react';

export default function TodoEditor({
  onAddTodo,
}: {
  onAddTodo: (todo: string) => void;
}) {
  // input 태그에 입력된 값을 나타내는 상태
  const [inputValue, setInputValue] = useState('');

  // handleAdd는 inputValue.trim(), 즉, 양쪽 공백을 제외한 입력값이 빈 문자열(falsy)이 아니면 동작하도록 설정
  const handleAdd = () => {
    if (inputValue.trim()) {
      // 전달 받은 onAddTodo props를 통해 상위 컴포넌트로 inputValue.trim()가 전달
      // Todo 컴포넌트에서는 전달받은 newTodo 값이 addTodo 함수로 들어가게 되고, 이 함수는 setTodos를 호출하여 todos 상태를 업데이트
      onAddTodo(inputValue.trim());
      // 그리고 input 태그를 빈 문자열로 상태 변경
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Enter를 입력했을 때와 (한국어나 일본어 같이) 조합형 언어를 처리하기 위한 조건이 모두 만족했을 때,
    // handleAdd() 함수를 호출하여 Enter를 눌렀을 때도 리스트에 추가되도록 설정
    // 조합형 언어에 대한 처리를 해주는 이유는 불필요한 리스트 항목의 추가를 막기 위함
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className='flex p-4'>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Enter a new todo'
        className='flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <button
        onClick={handleAdd}
        className='bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors'>
        Add Todo
      </button>
    </div>
  );
}
