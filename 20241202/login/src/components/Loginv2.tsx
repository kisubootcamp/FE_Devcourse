import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";
import { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
  agree: false,
  submit: false,
  error: "",
};

interface ReducerState2 {
  email: string;
  password: string;
  agree: boolean;
  submit: boolean;
  error: string;
}
// interface ReducerAction2 {
//   type: string;
//   payload?: string;
// }

type ReducerAction2 =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_AGREE"; payload: boolean }
  | { type: "SET_ERROR"; payload: string }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_END" };

function reducer(state: ReducerState2, action: ReducerAction2): ReducerState2 {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_AGREE":
      return { ...state, agree: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SUBMIT_START":
      return { ...state, submit: true };
    case "SUBMIT_END":
      return { ...state, submit: false };

    default:
      return state;
  }
}

export default function Loginv2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.email || !state.password || !state.agree) {
      dispatch({
        type: "SET_ERROR",
        payload: "모두 입력하고 약관 동의해주세요.",
      });
      return;
    }
    dispatch({ type: "SET_ERROR", payload: "" });
    dispatch({ type: "SUBMIT_START" });

    // 로그인 정보 전송
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("로그인이 되었습니다!");
    } catch (e) {
      dispatch({ type: "SET_ERROR", payload: "폼 전송중 에러 발생" });
    } finally {
      dispatch({ type: "SUBMIT_END" });
    }
  };
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <Input
              type="email"
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
              checked={state.agree}
              onChange={(e) =>
                dispatch({ type: "SET_AGREE", payload: e.target.checked })
              }
            >
              <span className="text-sm color-[#4f4f4f]">
                I state with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            {state.error && <p className="text-rose-500">{state.error}</p>}

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
