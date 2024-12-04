import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("Count is Created!");

  //     const interval = setInterval(() => {
  //       console.log("Interval!");
  //     }, 1000);
  //     // 컴포넌트 삭제시 호출
  //     return () => {
  //       console.log("Count is Destroyed!");
  //       clearInterval(interval);
  //     };
  //   }, []);

  useEffect(() => {
    console.log("Count is Updated!");
  }, [count]);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </div>
  );
}
