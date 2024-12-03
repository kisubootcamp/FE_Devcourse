import React, { useState } from 'react';
import C from './C';

export default React.memo(function B({
  count2,
  increment,
}: {
  count2: number;
  increment: () => void;
}) {
  console.log('B rendering', count2);

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>B : {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>B 증가</button>
      <C />
    </>
  );
});
