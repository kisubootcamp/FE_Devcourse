import { useCounterStore } from "../store/counterStore";
import CompoB from "./CompoB";

export default function CompoA() {
  const count = useCounterStore((state) => state.count);
  console.log("A rendering");
  return (
    <>
      <h1>A</h1>
      <p>{count}</p>
      <CompoB />
    </>
  );
}
