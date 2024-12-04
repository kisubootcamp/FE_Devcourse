import { useState } from "react";
import Interval from "./Interval";

export default function Practice() {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      {display && <Interval />}
      <button onClick={() => setDisplay((prev) => !prev)}>클릭</button>
    </div>
  );
}
