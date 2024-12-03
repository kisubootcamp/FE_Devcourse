import { useEffect, useState } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log('Count created!');

  //   const interval = setInterval(() => {
  //     console.log('interval');
  //   }, 1000);

  //   // 삭제될 때 호출
  //   // 클립업(clean-up) 함수
  //   return () => {
  //     console.log('Count destroyed');
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    if (count > 0) {
      console.log('count update:' + count);
    }
  }, [count]);

  return (
    <div>
      <h1 className='text-5xl font-bold'>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </div>
  );
}
