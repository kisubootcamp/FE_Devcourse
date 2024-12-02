import { useReducer } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";
import { loginReducer, initialState } from "../reducer/login.reducer";

export default function Login() {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    dispatch({
      type: "SET_FIELD",
      field: name,
      value: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.email || !state.password) {
      dispatch({ type: "SET_ERROR", error: "입력 값을 모두 입력하세요." });
      return;
    }

    if (!state.agree) {
      dispatch({ type: "SET_ERROR", error: "약관에 동의하지 않았습니다." });
      return;
    }

    if (state.isSubmit) return;

    dispatch({ type: "SUBMIT_START" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch (error) {
      dispatch({ type: "SET_ERROR", error: "폼 전송 중 오류가 발생했습니다." });
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
            <Checkbox
              name="agree"
              checked={state.agree}
              onChange={handleChange}
            >
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>

            {state.error && (
              <div className="text-red-500 text-sm">{state.error}</div>
            )}

            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
                disabled={state.isSubmit}
              >
                {state.isSubmit ? "로그인 중..." : "Log In"}
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
