import { useContext, useEffect } from "react";
import { CounterActionContext } from "../context/CounterContext";
import CountDetail from "./CountDetail";

export default function Count() {
  //카운터 컴포넌트가 언마운트(화면에서 삭제)되면 리셋 실행
  const { reset } = useContext(CounterActionContext)!;
  ///이하 useEffect 클린업
  useEffect(() => {
    return () => {
      reset();
    };
  }, []);
  return <CountDetail />;
}
