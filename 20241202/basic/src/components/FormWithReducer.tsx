import React, { useReducer } from "react";

interface stateType {
  name: string;
  email: string;
  password: string;
  isSubmit: boolean;
  error: string;
}

// 초기 상태 설정
const initialState = {
  name: "",
  email: "",
  password: "",
  isSubmit: false,
  error: "",
};

// 리듀서 함수 정의
function reducer(state: stateType, action: any) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value }; // 기존 상태 복사 후 특정 필드 업데이트
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "SUBMIT_START":
      return { ...state, isSubmit: true, error: "" }; // 제출 시작 상태로 전환
    case "SUBMIT_SUCCESS":
      return { ...initialState }; // 초기 상태로 리셋
    default:
      return state; // 기본 상태 반환
  }
}

export default function FormWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 입력 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 필수 입력값 검증
    if (!state.name || !state.email || !state.password) {
      dispatch({ type: "SET_ERROR", error: "모든 필드를 입력해주세요." });
      return;
    }

    if (state.isSubmit) return; // 중복 제출 방지

    dispatch({ type: "SUBMIT_START" });

    // 가정: 서버 요청 등 처리
    setTimeout(() => {
      // 서버 응답 성공 처리 (예시)
      dispatch({ type: "SUBMIT_SUCCESS" });
      alert("회원가입이 완료되었습니다!");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      {state.error && <div style={{ color: "red" }}>{state.error}</div>}
      <button type="submit" disabled={state.isSubmit}>
        {state.isSubmit ? "제출 중..." : "회원가입"}
      </button>
    </form>
  );
}
