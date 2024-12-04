// import CountButtons from "./CountButtons";
// import CountDisplay from "./CountDisplay";

// export default function CountDetail({
//   count,
//   increment,
//   decrement,
//   reset,
// }: {
//   count: number;
//   increment: () => void;
//   decrement: () => void;
//   reset: () => void;
// }) {
//   return (
//     <>
//       <CountDisplay count={count} />
//       <CountButtons increment={increment} decrement={decrement} reset={reset} />
//     </>
//   );
// }

import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";

export default function CountDetail() {
  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
