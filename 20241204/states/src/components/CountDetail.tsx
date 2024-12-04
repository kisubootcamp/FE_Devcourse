import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";

export default function CountDetail() {
  console.log("countDetail rendering");
  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
