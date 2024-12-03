// import CountDetail from "./CountDetail";

// export default function Count({
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
//       <CountDetail
//         count={count}
//         increment={increment}
//         decrement={decrement}
//         reset={reset}
//       />
//     </>
//   );
// }

import CountDetail from "./CountDetail";

export default function Count() {
  return (
    <>
      <CountDetail />
    </>
  );
}
