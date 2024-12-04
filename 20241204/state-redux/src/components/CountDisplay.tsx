import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function CountDisplay() {
  //⚠️ 타입 지정 주의: store의 RootState 타입으로 해야 함
  const count = useSelector((state: RootState) => state.counter.count);
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
