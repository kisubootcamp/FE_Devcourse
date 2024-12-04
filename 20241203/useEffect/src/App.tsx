import { useState } from "react";
import Count from "./components/Count";

export default function App() {
  const [on, setOn] = useState(true);
  return (
    <>
      <button onClick={() => setOn(!on)}>a</button>
      {on ? <Count /> : null}
    </>
  );
}
