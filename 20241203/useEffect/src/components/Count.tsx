import { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Count Created!");

  //   const interval = setInterval(() => {
  //     console.log("interval!!");
  //   }, 1000);
  //   // 삭제될 때 효출형
  //   return () => {
  //     console.log("Count Destroyed");
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    if (count > 0) {
      console.log("Count updated: " + count);
    }
  }, [count]);

  return (
    <>
      <div className="text-5xl font-bold">
        <h1>Count: {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>증가</button>
      </div>
    </>
  );
};

export default Count;
