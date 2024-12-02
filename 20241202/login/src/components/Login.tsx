import { useReducer } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

interface ReducerState {
  name: string;
  email: string;
  password: string;
  checked: boolean;
  error: string;
  isSubmit: boolean;
}

interface ReducerAction {
  type: string;
  field?: string;
  value?: string;
  error?: string;
  checked?: boolean;
}

const initialState = {
  name: "",
  email: "",
  password: "",
  checked: false,
  error: "",
  isSubmit: false,
};

function reducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field!]: action.value };
    case "SET_ERROR":
      return { ...state, error: action.error || "" };
    case "SUBMIT_START":
      return { ...state, isSubmit: true };
    case "SUBMIT_SUCCESS":
      return { ...state, isSubmit: false };
    case "SUBMIT_END":
      return { ...state, isSubmit: false };
    case "TOGGLE_CHECKED":
      return { ...state, checked: action.checked! };
    default:
      return state;
  }
}

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "TOGGLE_CHECKED", checked: e.target.checked });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.email || !state.password || !state.checked) {
      dispatch({ type: "SET_ERROR", error: "모두 입력해주세요" });
      return;
    }

    if (state.isSubmit) return;
    dispatch({ type: "SET_ERROR", error: "" });
    dispatch({ type: "SUBMIT_START" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch (error) {
      if (error) {
        dispatch({ type: "SET_ERROR", error: " 폼 전송 중 에러 발생!" });
      }
    } finally {
      dispatch({ type: "SUBMIT_END" });
    }
  };

  return (
    <div className="item-middle bg-black">
      <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
        <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
        <p className="text-sm mb-5">Please enter your details to continue.</p>
        <form onSubmit={submitHandler} className="grid gap-4">
          <Input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            className="input-style1"
            placeholder="someone@example.com"
          />
          <Input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            className="input-style1"
            placeholder="Enter Password"
          />
          <Checkbox checked={state.checked} onChange={handleCheckboxChange}>
            <span className="text-sm color-[#4f4f4f]">
              I agree with <em className="not-italic font-bold">terms</em> and{" "}
              <em className="not-italic font-bold">policies</em>.
            </span>
          </Checkbox>
          {state.error && <div className="text-red-500"> {state.error}</div>}
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
  );
}
