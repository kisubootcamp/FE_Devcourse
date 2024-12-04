import React, { Dispatch, SetStateAction, useState } from "react";
import C from "./C";

export default React.memo(function B({
  count2,
  setCount,
}: // increase,
{
  count2: number;
  setCount: Dispatch<SetStateAction<number>>;
  // increase: () => void;
}) {
  console.log("B render");
  const [count, setCount2] = useState(0);
  console.log(setCount);
  return (
    <>
      <h1>
        B :{count} / {count2}
      </h1>
      <button onClick={() => setCount2((count) => count + 1)}>증가</button>

      <C />
    </>
  );
});
