import React from "react";
import { useState } from "react";

export default React.memo(function C() {
  console.log("C render");
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>C :{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
});
