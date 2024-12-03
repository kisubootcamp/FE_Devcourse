import React, { useState } from "react";
import C from "./C";
export default React.memo(function B({
  count2,
  increment,
  setCount1,
}: {
  count2: number;
  increment: () => void;
  setCount1: React.Dispatch<React.SetStateAction<number>>;
}) {
  console.log("B");
  const [count, setCount] = useState(0);
  return (
    <div>
      B<p>count2{count2}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>B증가{count}</button>
      <C />
    </div>
  );
});
//props인 increment가 변경되면 B가 memo 되어도 렌더링
//함수, 객체, 배열은 참조 자료형이기 때문
//A가 리렌더링 되면 increment 함수는 재생성되고, 전달되는 increment 함수도 재생성된 함수로 전달된다.

//setState 함수는 재정의되지 않는다. (리액트 훅은 기본적으로 메모이제이션 처리가 되어있다.)
//useState는 컴포넌트가 생성될 때 한 번만 정의된다.