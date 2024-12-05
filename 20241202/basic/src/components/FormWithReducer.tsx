import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  isSubmit: false,
  error: "",
};

function reducer(state: any, action: any) {
  return state;
}

export default function FormWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.name || !state.email || state.password) {
      dispatch({ type: "SET_ERROR", error: "입력 값을 모두 입력하세요." });
      return;
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="uname">이름: </label>
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
          <label htmlFor="email">이메일: </label>
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
          <label htmlFor="password">비밀번호: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div>에러 메세지</div>
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}
