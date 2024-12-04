import CountButtons from './CountButtons';
import CountDisplay from './CountDisplay';

export default function CountDetail() {
  console.log(`CountDetail rendering`);
  // 왜 이 컴포넌트는 리렌더링이 안되는가?
  // 컴포넌트 트리의 노드로 들어가는 것이 아니라 context의 범위만 지정해주는 것이기 때문
  // context에 지정된 상태를 사용하는 컴포넌트만 리렌더링 되는 것
  // 따라서 이 CountDetail 컴포넌트는 리렌더링이 안되는 것
  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
