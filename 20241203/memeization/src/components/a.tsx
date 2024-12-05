import { useCallback, useState } from "react";
import B from "./b";

export default function A() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("aRender");
  const increment = useCallback(() => {
    setCount((e) => e + 1);
  }, []);
  return (
    <div>
      <h1>
        a : {count} / {count2}
      </h1>
      <button onClick={increment}>버튼</button>
      <button onClick={() => setCount2((e) => e + 1)}>버튼</button>
      <B count2={count2} increment={increment} />
    </div>
  );
}
