import { useContext, useEffect } from "react";
import CounterProvider from "../context/provider/CounterProvider";
import CountDetail from "./CountDetail";
import { CounterActionContext } from "../context/CounterContext";

export default function Count() {
  const { reset } = useContext(CounterActionContext)!;
  useEffect(() => {
    return () => {
      reset();
    };
  }, []);
  return (
    // 참고 -3
    // 같은 컨텍스트에 묶인 것!!
    // <CounterProvider>
    //   <CountDetail />
    // </CounterProvider>

    // 전체를 같은 컨텍스트에 묶고 싶다면??
    // main.tsx 참고 -4
    <CountDetail />
  );
}
