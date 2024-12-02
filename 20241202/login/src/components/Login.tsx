import { useReducer, useState } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

interface loginState {
  email: string;
  password: string;
  agree: boolean;
  error?: string;
  isSubmit?: boolean;
}

type ReducerAction =
  | { type: "set_email"; payload: string }
  | { type: "set_password"; payload: string }
  | { type: "set_agree"; payload: boolean }
  | { type: "set_error"; payload: string };

const loginReducer = (state: loginState, action: ReducerAction): loginState => {
  switch (action.type) {
    case "set_email":
      return { ...state, email: action.payload };
    case "set_password":
      return { ...state, password: action.payload };
    case "set_agree":
      return { ...state, agree: action.payload };
    case "set_error":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default function Login() {
  const initialState = {
    email: "",
    password: "",
    agree: false,
    error: "",
  };
  const [loginState, dispatch] = useReducer(loginReducer, initialState);

  const validationForm = () => {
    if (!loginState.email) {
      dispatch({ type: "set_error", payload: "이메일을 입력해주세요" });
      return false;
    }
    if (!loginState.password) {
      dispatch({ type: "set_error", payload: "비밀번호를 입력해주세요" });
      return false;
    }
    if (!loginState.agree) {
      dispatch({ type: "set_error", payload: "약관 동의를 하세요" });
      return false;
    }

    dispatch({ type: "set_error", payload: "" });
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (validationForm()) {
      alert("성공");
    }
  };

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form action="" className="grid gap-4" onSubmit={handleSubmit}>
            <Input
              type="text"
              className="input-style1"
              placeholder="someone@example.com"
              value={loginState.email}
              name="email"
              onChange={(e) =>
                dispatch({ type: "set_email", payload: e.target.value })
              }
            />
            <Input
              type="password"
              className="input-style1"
              placeholder="Enter Password"
              value={loginState.password}
              name="password"
              onChange={(e) => {
                dispatch({ type: "set_password", payload: e.target.value });
              }}
            />
            <Checkbox
              checked={loginState.agree}
              onChange={(e) =>
                dispatch({ type: "set_agree", payload: e.target.checked })
              }
            >
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            {loginState.error && (
              <div className="text-[#f00]">{loginState.error}</div>
            )}
            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
                disabled={loginState.isSubmit}
              >
                Log In
              </Button>
              <Button
                type="button"
                className="w-full border border-[#4f4f4f] text-[#4f4f4f] rounded-lg"
                disabled={loginState.isSubmit}
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
