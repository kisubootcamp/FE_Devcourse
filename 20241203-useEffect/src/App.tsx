// useEffect
// 함수형 컴포넌트에서 생명주기를 다룰 때 사용하는 리액트 훅
// 생명주기 : 컴포넌트가 태어나고 죽을 때까지(렌더링 되고 화면에서 사라질 때까지)
// 생명주기 : 생성 -> 수정 -> 삭제

import { useState } from 'react';
import Count from './components/Count';

// import { useEffect } from 'react';

function App() {
  // 기본 문법 : useEffect(콜백함수, 의존성배열)
  // useEffect(() => {}, [])
  // 의존성 배열에 들어있는 값이 변경되지 않으면 다시 호출되지 않음
  // -> 빈 배열로 넣으면 다시 호출될 가능성이 없음

  // 생성
  // useEffect(() => {
  // 컴포넌트가 생성되면 하고 싶은 로직
  // 보통 API 호출
  // console.log('Component Created!');
  // }, []);
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      {isShow && <Count />}
      <button onClick={() => setIsShow((prev) => !prev)}>Change</button>
    </>
  );
}

export default App;
