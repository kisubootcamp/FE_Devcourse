import { useReducer, useState } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

interface ReducerState {
  email: string;
  password: string;
  error?: string;
  isSubmit: boolean;
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
  error: "",
  isSubmit: false,
};

function reducer(state: ReducerState, action: ReducerAction) {
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
}

export default function Login() {
  const [agree, setAgree] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.email || !state.password) {
      dispatch({ type: "SET_ERROR", error: "입력 값을 모두 입력하세요" });
      alert("입력 값을 모두 입력하세요");
      return;
    }

    if (!agree) {
      dispatch({ type: "SET_ERROR", error: "체크박스를 눌러주세요." });
      alert("체크박스를 눌러주세요.");
      return;
    }
    if (state.isSubmit) return;
    dispatch({ type: "SET_ERROR", error: "" });
    dispatch({ type: "SUBMIT_START" });
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "SUBMIT_SUCCESS" });
      alert("로그인되었습니다");
    } catch (error) {
      if (error) dispatch({ type: "SET_ERROR", error: "폼 전송 중 에러 발생" });
    } finally {
      dispatch({ type: "SUBMIT_END" });
    }
  };

  return (
    <>
      <div className="bg-black item-middle">
        <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="mb-5 text-sm">Please enter your details to continue.</p>
          <form action="" className="grid gap-4" onSubmit={submitHandler}>
            <Input
              type="text"
              className="input-style1"
              placeholder="someone@example.com"
              name="email"
              value={state.email}
              onChange={changeHandler}
              autoComplete={"off"}
            />
            <Input
              type="password"
              className="input-style1"
              placeholder="Enter Password"
              name="password"
              value={state.password}
              onChange={changeHandler}
              autoComplete={"off"}
            />
            <Checkbox checked={agree} onChange={() => setAgree(!agree)}>
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            <div className="grid gap-4 mt-4">
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
