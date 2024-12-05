import AuthCheck from "./components/AuthCheck";
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

// context API : 전역상태를 공유하기 위한 리액트 내장 API
// API? 어플리케이션 프로그래밍에서 사용할 수 있는 인터페이스(인터페이스란? 어떤 대상과 대상을 소통하게 해주는 매개체)
// context 환경을 조성하기 위한 인터페이스
// 컨텍스트환경? 포괄적으로는 같은 개발 환경, 리액트컴포넌트를같은 그룹으로 묶을때 사용 -> 같은 컨텍스트로 묶으면 같은 데이터를 가져다 쓸 수 있음
// 같은 컨텍스트로 묶을려면? 컨텍스트를 생성해줘야함 -> 컨텍스트는 어디에 만들어도 상관없음
