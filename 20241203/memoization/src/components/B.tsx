import C from "./C";
import React, { Dispatch, SetStateAction, useState } from "react";

// B라는 컴포넌트를 메모이제이션한것이다.
export default React.memo(function B({
  count2,
  setCount,
}: {
  count2: number[];
  setCount: Dispatch<SetStateAction<number>>;
}) {
  const [count, setCountB] = useState(0);
  console.log("B rendering", count2);
  return (
    <>
      <h1>B : {count}</h1>
      <button onClick={() => setCountB((count) => count + 1)}>증가</button>
      <C />
    </>
  );
});
