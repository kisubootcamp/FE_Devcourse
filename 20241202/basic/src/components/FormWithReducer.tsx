import { useReducer } from "react";

interface ReducerState {
  name: string;
  email: string;
  password: string;
  isSubmit: boolean;
  error?: string | null;
}

interface ReducerAction {
  type: string;
  field?: string;
  value?: string;
  error?: string | null;
}

const initialState: ReducerState = {
  name: "",
  email: "",
  password: "",
  isSubmit: false,
  error: null,
};

function reducer(state: ReducerState, action: ReducerAction): ReducerState {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field!]: action.value,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.error,
      };
    case "SET_SUBMIT":
      return {
        ...state,
        isSubmit: action.value === "start",
      };
    default:
      return state;
  }
}

export default function FormWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.name || !state.email || !state.password) {
      dispatch({ type: "SET_ERROR", error: "모두 입력해주세요." });
      return;
    }

    if (state.isSubmit) return;

    dispatch({ type: "SET_ERROR", error: null });
    dispatch({ type: "SET_SUBMIT", value: "start" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch({ type: "SET_SUBMIT", value: "end" });
      alert("회원가입 성공!");
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        error: "회원가입 중 에러가 발생했습니다.",
      });
    } finally {
      dispatch({ type: "SET_SUBMIT", value: "end" });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">이름:</label>
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
        {state.isSubmit ? "처리 중..." : "회원가입"}
      </button>
    </form>
  );
}
