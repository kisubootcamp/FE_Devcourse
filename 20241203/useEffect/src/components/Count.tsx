import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  // 생성
  useEffect(() => {
    console.log("Count Created!");

    const interval = setInterval(() => {
      console.log("interval!!!");
    }, 1000);
    // 삭제될 때 호출됨
    // 클린 업 (clean up) 함수
    return () => {
      console.log("Count Destroyed");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("Count updated: " + count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </div>
  );
}
