import { useReducer, useState } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

type ReducerState = {
  email: string;
  password: string;
  checked: boolean;
  isSubmit: boolean;
  error?: string;
};
type ReducerAction = {
  type: string;
  field?: string;
  error?: string;
  value?: string;
  checked?: boolean;
};

const initialState = {
  email: "",
  password: "",
  checked: false,
  isSubmit: false,
  error: "",
};

const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field!]: action.value };
    case "CHECKED":
      return { ...state, checked: !state.checked };
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

export default function Login() {
  const [agree, setAgree] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

  const validateEmail = (email: string) => {
    return reg.test(email);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.email) {
      dispatch({ type: "SET_ERROR", error: "이메일을 입력해 주세요." });
      return;
    } else if (!validateEmail(state.email)) {
      dispatch({
        type: "SET_ERROR",
        error: "이메일 형식이 올바르지 않습니다.",
      });
      return;
    } else if (!state.password) {
      dispatch({ type: "SET_ERROR", error: "비밀번호를 입력해 주세요." });
      return;
    } else if (!state.checked) {
      dispatch({ type: "SET_ERROR", error: "약관에 동의해 주세요." });
      return;
    }

    if (state.isSubmit) return;

    dispatch({ type: "SUBMIT_START" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      dispatch({ type: "SUBMIT_SUCCESS" });
      console.log(state);
    } catch (error) {
      if (e) dispatch({ type: "SET_ERROR", error: "폼 전송 실패" });
    } finally {
      dispatch({ type: "SUBMIT_END" });
    }
  };
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px]  rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form onSubmit={submitHandler} className="grid gap-4">
            <Input
              type="text"
              className="input-style1"
              placeholder="someone@example.com"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              className="input-style1"
              placeholder="Enter Password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
            <Checkbox
              checked={agree}
              onChange={(e) => {
                setAgree(!agree);
                dispatch({ type: "CHECKED", checked: e.target.checked });
              }}
            >
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            <div className="h-4">{state.error}</div>
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
