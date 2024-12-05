// 컨텍스트의 범위를 지정할 컴포넌트임 생성한 컨텍스트 객체를 사용해야함
import { useState } from "react";
import { CounterActionContext, CounterContext } from "../CounterContext";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode; //children으로 자식컴포넌트에 데이터를 넣어줄 수 있도록 기반을 마련한것임
}) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  // const providerData = {
  //   count: count,
  //   increment : increment,
  //   decrement : decrement
  // }
  return (
    <CounterActionContext.Provider value={{ increment, decrement, reset }}>
      <CounterContext.Provider value={{ count }}>
        {children}
        {/*App 컴포넌트를 기준으로 모든 컴포넌트들이 children에 들어가있는 상황임*/}
      </CounterContext.Provider>
      //value라는 속성으로 데이터를 공급할것임
    </CounterActionContext.Provider>
  );
}
// 만든것을 가지고 범위를 지정해주고 싶은 컴포넌트로 이동해 <CounterProvider>범위를 지정해주고 싶은 컴포넌트</CounterProvider>로 감싸주면됨! -> App서부터 지정하고 싶으면 main.tsx가서 해주면 됨

// value의 타입을 맞춰줘야하는데 그건 CounterContext에서 맞춰줘야함

// provider에서 <CounterContext.Provider>를 써주는 건 context의 provider를 사용해주는 것은 속성으로 가져다 쓴다는것임

// 버튼이 눌리면 useState의 상태가 바뀌는것이기에 리렌더링이 발행하게 되는 것임

// Context는 말그대로 범위를 지정해주는 것이지 컴포넌트 트리에 구성된 노드가 아님을 오해하면 안됨! 컴포넌트들중 하나가 변화가 있으면 그 가져다 쓴 애만 리렌더링이 되는것임

// 현재 코드에서 리렌더링을 막으려면 공급되고 있는 데이터를 메모이제이션 해주면 됨! ->  공급하는 데이터를 나눠서 메모이제이션
