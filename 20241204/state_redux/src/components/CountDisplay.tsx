import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // 스토어 파일의 루트 스테이트(리덕스 툴킷이 아닌)

export default function CountDisplay() {
  // 무조건 store에 접근(store는 하나밖에 없어서 지정해줄 필요 없음)
  // store의 reducer에 접근 가능       // 접근
  const count = useSelector((state: RootState) => state.counter.count);
  return (
    <>
      {/* //사용 */}
      <h1>count: {count}</h1>
    </>
  );
}
