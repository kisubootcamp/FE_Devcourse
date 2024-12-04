import { useState } from "react";
import Count from "./components/Count";

const App = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      {isShow && <Count />}
      <button onClick={() => setIsShow(!isShow)}>APP</button>
    </>
  );
};

export default App;
