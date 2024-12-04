import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("count create");

  //     const interval = setInterval(() => {
  //       console.log("interval!!");
  //     }, 1000);

  //     // 삭제될 때 호출됨
  //     // 클린업(clean-up) 함수
  //     return () => {
  //       console.log("Count Destroyed");
  //       clearInterval(interval);
  //     };
  //   }, []);

  useEffect(() => {
    if (count > 0) {
      console.log("count updated : " + count);
    }
  }, [count]);

  return (
    <div className="text-5xl font-bold">
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </div>
  );
}
