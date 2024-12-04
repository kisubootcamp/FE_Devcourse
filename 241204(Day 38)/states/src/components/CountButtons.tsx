// import React, { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// export default React.memo(function CountButtons() {
//   console.log("CountButtons rendering");
//   // 참고 -9
//   // CounterContext에서 increment, decrement, reset 들고 와서 사용하겠다는 것
//   // null일 수도 있으니 뒤에 ! 사용하여 널 부정 해줘야 한다

//   // CountButtons는 React.memo()로 메모이제이션 처리를 했는데
//   // 왜 계속 리렌더링이 되는걸까?
//   // CountProvider.tsx 참고 -10
//   const { increment, decrement, reset } = useContext(CounterContext)!;
//   return (
//     <>
//       <button onClick={decrement}>감소</button>
//       <button onClick={reset}>리셋</button>
//       <button onClick={increment}>증가</button>
//     </>
//   );
// });

// 참고 -13
import React, { useContext } from "react";
import { CounterActionContext } from "../context/CounterContext";

export default React.memo(function CountButtons() {
  const { increment, decrement, reset } = useContext(CounterActionContext)!;
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
});
