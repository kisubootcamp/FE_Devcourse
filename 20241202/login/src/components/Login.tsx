import { useReducer, useState } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

interface ReducerState {
  email: string;
  password: string;
  agree: boolean;
  error: string;
  isSubmit: boolean;
}

// reducer action 타입 지정하기
type ReducerAction =
  | {
      type: "SET_EMAIL";
      payload: string;
    }
  | {
      type: "SET_PASSWORD";
      payload: string;
    }
  | {
      type: "SET_AGREE";
      payload: boolean;
    }
  | {
      type: "SET_ERROR";
      payload: string;
    }
  | {
      type: "START_SUBMIT";
    }
  | {
      type: "SUCCESS_SUBMIT";
    };

const initialized = {
  email: "",
  password: "",
  agree: false,
  error: "",
  isSubmit: false,
};

function reducer(state: ReducerState, action: ReducerAction): ReducerState {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_AGREE":
      return { ...state, agree: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "START_SUBMIT":
      return { ...state, isSubmit: true };
    case "SUCCESS_SUBMIT":
      return { ...state, isSubmit: false };
    default:
      return state;
  }
}

export default function Login() {
  const [agree, setAgree] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialized);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!state.email || !state.password || !state.agree) {
      return dispatch({ type: "SET_ERROR", payload: "필드를 다 완성하세요" });
    }

    if (state.isSubmit) return;

    dispatch({ type: "START_SUBMIT" });

    setTimeout(() => {
      dispatch({ type: "SUCCESS_SUBMIT" });
      alert("로그인 되었습니다.");
    }, 1000);
  }

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
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "SET_EMAIL", payload: e.target.value })
              }
            />
            <Input
              type="password"
              className="input-style1"
              placeholder="Enter Password"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "SET_PASSWORD", payload: e.target.value })
              }
            />
            <Checkbox
              checked={agree}
              onChange={(e) => {
                setAgree(!agree);
                dispatch({ type: "SET_AGREE", payload: e.target.checked });
              }}
            >
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
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
            {state.error}
          </form>
        </div>
      </div>
    </>
  );
}
