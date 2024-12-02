// import { useState } from "react";
import { useReducer } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

interface ReducerState {
  email: string;
  password: string;
  agree: boolean;
  error: string;
}

interface ReducerAction {
  type: string;
  field?: string;
  value?: string;
  error?: string;
}

const initialState = {
  email: "",
  password: "",
  agree: false,
  error: "",
};

function reducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field!]: action.value };
    case "TOGGLE_AGREE":
      return { ...state, agree: !state.agree };
    case "SET_ERROR":
      return { ...state, error: action.error || "" };
    default:
      return state;
  }
}

export default function Login() {
  // const [agree, setAgree] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleCheckbox = () => {
    dispatch({ type: "TOGGLE_AGREE" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.email || !state.password || !state.agree) {
      dispatch({
        type: "SET_ERROR",
        error: "모든 값을 입력하고 동의 체크해주세요.",
      });
    } else {
      console.log("로그인 정보: ", state.email, state.password, state.agree);
    }
  };
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <Input
              type="text"
              name="email"
              className="input-style1"
              placeholder="someone@example.com"
              value={state.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              className="input-style1"
              placeholder="Enter Password"
              value={state.password}
              onChange={handleChange}
            />
            {/* <Checkbox checked={agree} onChange={() => setAgree(!agree)}> */}
            <Checkbox checked={state.agree} onChange={handleCheckbox}>
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            {state.error && <p style={{ color: "red" }}>{state.error}</p>}
            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
              >
                Log In
              </Button>
              <Button
                type="button"
                className="w-full border border-[#4f4f4f] text-[#4f4f4f] rounded-lg"
              >
                Go To Sing up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
