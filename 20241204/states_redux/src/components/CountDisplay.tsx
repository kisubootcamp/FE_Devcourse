import { useSelector } from "react-redux";
import { RootSate } from "../store/store";

export default function CountDisplay() {
  // store에 있는 reducer에 접근 가능
  console.log("Display rendering");

  const count = useSelector((state: RootSate) => state.counter.count);

  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
