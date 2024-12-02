import { useReducer, useState } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

interface ReducerState {
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

export default function Login() {
  const [agree, setAgree] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 필수 입력값 체크
    if (!state.email || !state.password || !agree) {
      dispatch({ type: "SET_ERROR", error: "모두 입력,체크 해주세요." });
      return;
    }

    if (state.isSubmit) return;

    dispatch({ type: "SET_ERROR", error: null });
    dispatch({ type: "SET_SUBMIT", value: "start" });

    try {
      // 서버 요청 흉내
      await new Promise((resolve) => setTimeout(resolve, 3000));
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
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form action="" className="grid gap-4" onSubmit={submitHandler}>
            <Input
              type="email"
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
            <Checkbox checked={agree} onChange={() => setAgree(!agree)}>
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            <div className="text-xs text-red-500">{state.error}</div>
            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
                disabled={state.isSubmit}
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
