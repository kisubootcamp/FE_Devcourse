import { useReducer } from "react";

interface ReudcerState {
  name: string;
  email: string;
  password: string;
  isSubmit: boolean;
  error?: string;
}

interface ReudcerAction {
  type: string;
  field?: string;
  value?: string;
  error?: string;
}

const initailState = {
  name: "",
  email: "",
  password: "",
  isSubmit: false,
  error: "",
};

function reducer(state: ReudcerState, action: ReudcerAction): ReudcerState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field!]: action.value };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "SUBMIT_START":
      return { ...state, isSubmit: true };
    case "SUBMIT_SUCCESS":
      return { ...state, isSubmit: false };
    case "SUBMIT_END":
      return { ...state, isSubmit: false };
    default:
      return state;
  }
}

export default function FormWithReducer() {
  const [state, dispatch] = useReducer(reducer, initailState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.name || !state.email || !state.password) {
      // 에러 처리
      dispatch({ type: "SET_ERROR", error: "입력 값을 모두 입력하세요." });
      return;
    }

    if (state.isSubmit) return;
    dispatch({ type: "SET_ERROR", error: "" });
    dispatch({ type: "SUBMIT_START" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      throw new Error("error");
      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch (error) {
      if (error)
        dispatch({ type: "SET_ERROR", error: "폼 전송 중 에러 발생!" });
    } finally {
      dispatch({ type: "SUBMIT_END" });
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="uname">이름:</label>
          <input
            type="text"
            id="uname"
            name="name"
            value={state.name}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email">이메일:</label>
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
          <label htmlFor="password">비밀번호:</label>
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
          회원가입
        </button>
      </form>
    </>
  );
}
