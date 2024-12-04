import { useState } from "react";
import B from "./B";

export default function A() {
  console.log("A Rendering");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>A: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <B />
    </>
  );
}
