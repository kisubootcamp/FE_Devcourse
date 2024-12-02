import { useReducer } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

interface ReducerState {
  email: string;
  password: string;
  isPolicyAgree: boolean;
  isSubmit: boolean;
}

interface ReducerAction {
  type: ACTION_TYPE;
  field?: keyof ReducerState;
  value?: string | boolean;
}

type ACTION_TYPE = "SET_FIELD" | "SUBMIT_START" | "SUBMIT_SUCCESS" | "SUBMIT_END";

const initialValue = {
  email: "",
  password: "",
  isPolicyAgree: false,
  isSubmit: false,
};

const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field!]: action.value };
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
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name as keyof ReducerState, value });
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    dispatch({ type: "SET_FIELD", field: "isPolicyAgree", value: checked });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.email || !state.password || !state.isPolicyAgree) {
      alert("입력 값을 모두 입력해주세요.");
      return;
    }

    if (state.isSubmit) return;
    dispatch({ type: "SUBMIT_START" });

    try {
      await new Promise((resolve) =>
        setTimeout(() => {
          alert("로그인 성공!");
          resolve(true);
        }, 2000)
      );
      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch (error) {
      if (error) console.error(error);
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
          <form onSubmit={submitHandler} className="grid gap-4">
            <Input
              type="text"
              name="email"
              onChange={handleInputChange}
              className="input-style1"
              placeholder="someone@example.com"
            />
            <Input
              type="password"
              name="password"
              onChange={handleInputChange}
              className="input-style1"
              placeholder="Enter Password"
            />
            <Checkbox
              checked={state.isPolicyAgree}
              name="isPolicyAgree"
              onChange={handleCheckboxChange}
            >
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                disabled={state.isSubmit}
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg disabled:opacity-50"
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
