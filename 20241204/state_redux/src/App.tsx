import AuthCheck from "./components/authCheck";
import Count from "./components/Count";
import CountOutsideDisplay from "./components/CountOutsideDisplay";

export default function App() {
  return (
    <>
      <AuthCheck>
        <Count />
        <CountOutsideDisplay />
      </AuthCheck>
    </>
  );
}

// redux 자바스크립트의 라이브러리임
// redux 문법이 어려워 진입장벽이 높음
// redux : 상태를 관리하고 있는 중앙집권체제같은 느낌으로 딱 1개 있는것 context는 제공하는 데이터에 따라 여러개를 만들수 있는데 redux는 딱한개임
