import { useState } from "react";
import B from "./B";

export default function A() {
  console.log("A render");
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // const increase = useCallback(() => {
  //   setCount((count) => count + 1);
  // }, []);

  const increase = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>
        A :{count} / {count2}
      </h1>
      <button onClick={increase}>증가1</button>
      <button onClick={() => setCount2((count2) => count2 + 1)}>증가2</button>
      <B count2={count2} setCount={setCount} />
      {/* <B count2={count2} increase={increase} /> */}
    </>
  );
}
