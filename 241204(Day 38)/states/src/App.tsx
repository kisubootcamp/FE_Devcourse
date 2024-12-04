import AuthCheck from "./components/AuthCheck";
import Count from "./components/Count";
import CountOutsideDisplay from "./components/CountOutsideDisplay";

export default function App() {
  return (
    // // 참고 -2
    // <CounterProvider>
    //   <Count />
    //   <CountOutsideDisplay />
    // </CounterProvider>
    // // Count 컴포넌트부터 묶이는 것
    // // Count 하위부터 묶고 싶다면?? Count.tsx 참고 -3

    <>
      <AuthCheck>
        <Count />
        <CountOutsideDisplay />
      </AuthCheck>
    </>
  );
}
