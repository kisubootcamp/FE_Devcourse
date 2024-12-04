import React, { useContext } from 'react';
import { CounterActionContext } from '../context/CounterContext';

// CounterButton을 메모 했는데도 왜 리렌더링이 발생하는가?
// 버튼을 누르면 CounterProvider에 정의된 상태가 바뀌는 것이기 때문에 CounterProvider이 리렌더링
// 리렌더링이 발생한 컴포넌트의 자식 컴포넌트는 전부 리렌더링되기 때문에 CountButtons도 리렌더링되는 것
export default React.memo(function CountButtons() {
  console.log('CountButtons rendering');
  const { increment, decrement, reset } = useContext(CounterActionContext)!;
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
});
