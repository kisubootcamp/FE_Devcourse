import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  isSubmit: false,
  error: "",
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "SUBMIT_START":
      return { ...state, isSubmit: true };
    case "SUBMIT_SUCCESS":
      return { ...state, isSubmit: false };
    default:
      return state;
  }
}

const FormWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.name || !state.email || !state.password) {
      dispatch({ type: "SET_ERROR", error: "입력 값을 모두 입력하세요." });
      return;
    }

    if (state.isSubmit) return;
    dispatch({ type: "SET_ERROR", error: "" });
    dispatch({ type: "SUBMIT_START" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch (error) {
      if (error) {
        dispatch({ type: "SET_ERROR", error: " 폼 전송 중 에러 발생!" });
      }
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
          />
        </div>
        <div>에러 메세지</div>
        {state.error && <div style={{ color: "red" }}>{state.error}</div>}
        <button type="submit" disabled={state.isSubmit}>
          회원가입
        </button>
      </form>
    </>
  );
};

export default FormWithReducer;
