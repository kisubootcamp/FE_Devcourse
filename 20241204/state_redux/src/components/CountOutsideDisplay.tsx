import { RootState } from "../store/store";
import { useSelector } from "react-redux";
// 커스텀 훅
export default function CountOutsideDisplay() {
  const count = useSelector((state: RootState) => state.counter.count); // 콜백함수 형태로  store 값을 가져옴, 매개변수로 state 값을 받아옴 타입은 RootStateType임
  return (
    <div>
      <h1>outside count:{count}</h1>
    </div>
  );
}
