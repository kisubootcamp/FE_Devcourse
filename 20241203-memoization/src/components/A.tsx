import { useCallback, useState } from 'react';
import B from './B';

export default function A() {
  console.log('A rendering');

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      <div>
        A : {count} // {count2}
      </div>
      <button onClick={increment}>Count 1 증가</button>
      <button onClick={() => setCount2((count) => count + 1)}>
        Count 2증가
      </button>
      <B count2={count2} increment={increment} />
    </>
  );
}
