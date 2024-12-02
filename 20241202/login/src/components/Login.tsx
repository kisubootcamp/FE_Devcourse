import { useReducer, useState } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

const initialState = {
  email: "",
  password: "",
  isSubmit: false,
  error: "",
  successMessage: "",
};

type StateProps = {
  email: string;
  password: string;
  isSubmit: string | boolean;
  error: string;
  successMessage: string;
};

type ActionProps =
  | { type: "SET_FIELD"; field: string; value: string }
  | { type: "SET_ERROR"; error: string }
  | { type: "SET_START" }
  | { type: "SET_SUCCESS" };

function reducer(state: StateProps, action: ActionProps): StateProps {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "SET_START":
      return { ...state, isSubmit: true, error: "" };
    case "SET_SUCCESS":
      return {
        ...state,
        isSubmit: false,
        successMessage: `로그인에 성공했습니다!`,
      };
    default:
      return state;
  }
}

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [agree, setAgree] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.email) {
      dispatch({ type: "SET_ERROR", error: "이메일을 입력하세요." });
      return;
    }
    if (!state.password) {
      dispatch({ type: "SET_ERROR", error: "비밀번호를 입력하세요." });
      return;
    }

    if (!agree) {
      dispatch({ type: "SET_ERROR", error: "약관에 동의해주세요." });
      return;
    }

    if (state.isSubmit) return;

    dispatch({ type: "SET_START" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "SET_SUCCESS" });
    } catch (error) {
      dispatch({ type: "SET_ERROR", error: `로그인에 실패했습니다.` });
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
              value={state.email}
              onChange={handleChange}
              className="input-style1"
              placeholder="someone@example.com"
              autoComplete="off"
            />
            <Input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              className="input-style1"
              placeholder="Enter Password"
            />
            <Checkbox checked={agree} onChange={() => setAgree(!agree)}>
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>

            {state.error && (
              <p className="text-rose-500 text-sm h-1">{state.error}</p>
            )}

            {state.successMessage && (
              <p className="text-green-400 text-sm h-1">
                {state.successMessage}
              </p>
            )}

            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
              >
                {state.isSubmit ? "확인중..." : "Log In"}
              </Button>
              <Button
                type="button"
                className="w-full border border-[#4f4f4f] text-[#4f4f4f] rounded-lg"
              >
                Go To Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
