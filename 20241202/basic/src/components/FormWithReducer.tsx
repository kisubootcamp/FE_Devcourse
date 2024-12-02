import { useReducer } from "react";

type ReducerState = {
  name: string;
  email: string;
  password: string;
  isSubmit: boolean;
  error?: string;
};
type ReducerAction = {
  type: string;
  field?: string;
  error?: string;
  value?: string;
};

const initialState = {
  name: "",
  email: "",
  password: "",
  isSubmit: false,
  error: "",
};

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
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
};

export default function FormWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.name || !state.email || !state.password) {
      dispatch({ type: "SET_ERROR", error: "값이 비어있습니다." });
      return;
    }
    if (state.isSubmit) return;
    dispatch({ type: "SUBMIT_START" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch (e) {
      if (e) dispatch({ type: "SET_ERROR", error: "폼 전송 실패" });
    } finally {
      dispatch({ type: "SUBMIT_END" });
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label htmlFor="uname">Name</label>
            <input
              type="text"
              id="uname"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="uemail">Email</label>
            <input
              type="text"
              id="uemail"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="upw">Password</label>
            <input
              type="password"
              id="upw"
              //name value 추가
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div>{state.error && state.error}</div>
          <button type="submit" disabled={state.isSubmit}>
            회원가입
          </button>
        </div>
      </form>
    </>
  );
}
