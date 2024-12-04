// 메모이제이션
// 중복 계산을 피하기 위해 계산 결과를 저장해두고, 동일한 입력 값에 대해서는 이미 계산된 결과를 재사용하는 방법

function fibo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);
  return memo[n];
}

console.log(fibo(100));

// 컴포넌트
// 렌더링과 리렌더링
// 렌더링은 그냥 최초 1번 실행되는 것
// 리-렌더링은 이미 생성된 컴포넌트가 다시 생성되는 것

// 컴포넌트에 정의 된 상태가 변경되었을 떄

//불필요한 리렌더링
// React.memo() -> 컴포넌트를 반환하는 고차함수
// 컴포넌트를 메모이제이션할 때 사용

// useCallback -> 함수를 메모이제이션 할 때
// 함수를 props로 전달할때 하위 컴포넌트가 리렌더링되는 것을 방지할 때

// useMemo -> 값을 메모이제이션할때
// 메모이제이션 낭비
