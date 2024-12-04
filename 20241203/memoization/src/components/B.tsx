import React, { useState } from "react";
import C from "./C";

const B = ({ count2 }: { count2: number }) => {
  const [count, setCount] = useState(0);
  console.log("B Rendering", count2);
  return (
    <div>
      <h1>B: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <C />
    </div>
  );
};

export default React.memo(B);
