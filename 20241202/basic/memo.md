// useState
// useState는 상태 업데이트 함수만으로 상태를 변경할 수 있다는 장점(문법이 간단)이 있지만
//상태가 업데이트 되는것을 예측 불가능하다.(코드가 길경우 어디서 업데이트되는지 파악하기 힘듦)

---

useReducer

// const [상태(state),액션발생함수(dispatch)] = useReducer(리듀서함수,초깃값);

// 리듀서 함수: 상태를 변경하는 로직을 수행하는 함수

// useReducer
// useReducer는 상태가 업데이트 되는방식이 예측 가능하다.(오직 리듀서 함수에서만 상태를 변경하는 로직이 수행되므로 리듀서함수만 보면된다.)
// 단점은 문법이 복잡하다.

// 리듀서 함수
// 매개변수 두개 전달받음 상태, 액션

상태 : 최신 상태
액션: 리듀서 함수 내에서 상태를 업데이트 할때 참조할 수 있는 값, 보통 객체로 지정

리듀서 함수는 반드시 상태를 반환해야한다.
반환된 값이 새로운 상태값이 되기 때문이다.

dispatch
dispatch를 호출하면 reducer함수를 반환하며,
reducer함수의 두번째 인자인 action에 dispatch 인자에 전달한 값이 들어간다.

// dispatch 함수 예측
const dispatch =(action)=>{
// ...
return reducer(최신상태,action);
}

즉, useReducer의 상태 변화 과정을 살펴보면

초깃값이 state에 들어가게 되고,

dispatch함수를 호출하면 reducer함수에 action값을 전달해주고,
reducer함수가 실행되면서 전달받은 action값을 기반으로 새로운 상태값을 반환해 상태를 업데이트해주는 것이다.

내가 생각해본 useState와 useReducer의 차이는
useState는 상태업데이트 함수를 호출하면 내부로직에 의해서 알아서 최신 상태로 업데이트 해주지만 useReducer는 내가 액션발생함수를 호출하면 상태를 업데이트 해줄 로직을 리듀서함수를 만들어서 작성해줘야한다는 차이가 있는것같아

reducer의 상태 식별자와 useReducer의 상태 식별자의 이름을 맞춰주는 관례가 있다.

function countReducer(count: ReducerState, action: ReducerAction) {
if (action.type === "decrement") return count - 1;
else if (action.type === "increment") return count + 1;
else if (action.type === "reset") return 0;
else return count; // 아무런 조작하지 않겠다.
}

export default function CountWithReducer() {
const [count, countDispatch] = useReducer(countReducer, 0);

return (
<>
<h1>Count: {count}</h1>
<button onClick={() => dispatch({ type: "decrement" })}>감소</button>
<button onClick={() => dispatch({ type: "reset" })}>리셋</button>
<button onClick={() => dispatch({ type: "increment" })}>증가</button>
</>
);
}

리듀서함수는 하나의 useReducer당 하나다.

즉 여러개의 usReducer를 작성할 경우 갯수에 맞게 리듀서 함수를 만들어줘야한다.

만약 useReducer를 이용해서 만든 변수들이 굉장히 많다면 별도의 함수도 매번 생성해야해서
코드가 굉장히 길어질 것이다.

실무에서는 reducer함수가 모여있는 별도의 ts파일을 만들어서 export해준다.

reducer에 action 인자에는 보통 객체가 들어간다 . {type: ... , payload:...}
그리고 reducer함수안의 로직도 if문보다는 switch문을 사용한다.

export function countReducer(count: ReducerState, action: ReducerAction) {
switch (action.type) {
case "decrement":
return count - 1;
case "increment":
return count + 1;
case "reset":
return 0;
default:
return count;
}
}

// useReducer로 form요소 제어하기
useReducer 타입 지정 꿀팁: 처음에 any로 하고 나중에 타입지정해주는게 속편함
