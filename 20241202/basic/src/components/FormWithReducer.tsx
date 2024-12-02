import React, { useReducer } from "react";

interface IReducerState {
  name: string;
  email: string;
  password: string;
  isSubmit: boolean;
  error?: string;
}

interface IReduceAction {
  type: string;
  field?: string;
  error?: string;
  value?: string;
}

const initialState: IReducerState = {
  name: "",
  email: "",
  password: "",
  isSubmit: false,
  error: "",
};

const reducer = (state: IReducerState, action: IReduceAction):IReducerState => {
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
  return state;
};

export default function FormWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = ( a) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.name || !state.email || !state.password) {
      dispatch({ type: "SET_ERROR", error: "입력 값을 모두 입력하세요." });
    }

    if (state.isSubmit) return;
    dispatch({ type: "SET_ERROR", error: "" });
    dispatch({ type: "SUBMIT_START" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch (error) {
      if (error)
        dispatch({ type: "SET_ERROR", error: "폼 전송 중 에러 발생!" });
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="uname">이름: </label>
          <input
            className="text-black"
            type="text"
            id="uname"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Email">이메일: </label>
          <input
            className="text-black"
            type="text"
            id="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호: </label>
          <input
            className="text-black"
            type="text"
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        {state.error && <div>{state.error}</div>}
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}
