import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";

export default function CountDetail() {
  console.log("CountDetail Rendering");
  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
