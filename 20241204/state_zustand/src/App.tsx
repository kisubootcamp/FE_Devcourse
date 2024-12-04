import AuthCheck from "./components/authCheck";
import Count from "./components/Count";
import CountOutsideDisplay from "./components/CountOutsideDisplay";

export default function App() {
  return (
    <>
      <AuthCheck>
        <Count />;
        <CountOutsideDisplay />
      </AuthCheck>
    </>
  );
}
// 떠오르고 있는 전역상태 라이브러리임
// 비구조화할당으로 하면 최적화가 되지않음 useCounterStore에서는 지금 count가 변하고 있음 -> 따라서 변하고 있다생각하기에 그렇기에 하나하나 꺼내쓰는것을 추천함