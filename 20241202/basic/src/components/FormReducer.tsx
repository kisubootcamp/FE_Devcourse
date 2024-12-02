import { useReducer } from "react";

interface ReducerState {
  name: string;
  email: string;
  password: string;
  isSubmit: boolean;
  error?: string;
}

interface ReducerAction {
  type: string;
  field?: string;
  value?: string;
  error?: string;
}

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field!]: action.value };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "SUBMIT_START":
      return { ...state, isSubmit: true };
    case "SUBMIT_DONE":
      return { ...state, isSubmit: false };
    case "SUBMIT_END":
      return { ...state, isSubmit: false };
    default:
      return state;
  }
};

export default function FormReducer() {
  const initailState = {
    name: "",
    email: "",
    password: "",
    isSubmit: false,
    error: "",
  };

  const [state, dispatch] = useReducer(reducer, initailState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.name || !state.email || !state.password) {
      dispatch({ type: "SET_ERROR", error: "모두 입력하세요" });
    }

    if (state.isSubmit) return;
    dispatch({ type: "SET_ERROR", error: "" });
    dispatch({ type: "SUBMIT_START" });

    try {
      await new Promise((res) => setTimeout(res, 3000));
      dispatch({ type: "SUBMIT_DONE" });
    } catch (error) {
      dispatch({ type: "SUBMIT_ERROR", error: "오류" });
    } finally {
      dispatch({ type: "SUBMIT_END" });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="uname">Name: </label>
        <input
          type="text"
          id="uname"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      {state.error && <div>{state.error}</div>}
      <button disabled={state.isSubmit}>회원가입</button>
    </form>
  );
}
