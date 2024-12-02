import { useReducer, useState } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";
import { reducer } from "./reducer/reducer";

const initialState: IReducerState = {
  email: "",
  password: "",
  isSubmit: false,
  error: "",
};

export default function MyLogin() {
  const [agree, setAgree] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.email || !state.password || !agree) {
      const error =
        !state.email || !state.password
          ? "입력 값을 모두 입력하세요."
          : "약관에 동의해야 합니다.";

      dispatch({ type: "SET_ERROR", error });
      return;
    }

    if (state.isSubmit) return;

    dispatch({ type: "SET_ERROR", error: "" });
    dispatch({ type: "SUBMIT_START" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "SUBMIT_SUCCESS" });
      console.log("폼 제출 성공!");
    } catch {
      dispatch({ type: "SET_ERROR", error: "폼 전송 중 에러 발생!" });
    }
  };

  return (
    <>
      <div className="bg-black item-middle">
        <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="mb-5 text-sm">Please enter your details to continue.</p>
          <form onSubmit={submitHandler} className="grid gap-4">
            <Input
              autoComplete="off"
              onChange={handleChange}
              type="text"
              name="email"
              className="input-style1"
              placeholder="someone@example.com"
            />
            <Input
              autoComplete="off"
              onChange={handleChange}
              name="password"
              type="password"
              className="input-style1"
              placeholder="Enter Password"
            />
            <Checkbox checked={agree} onChange={() => setAgree(!agree)}>
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            {state.error && <div className="text-red-600">{state.error}</div>}
            <div className="grid gap-4 mt-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
              >
                {state.isSubmit ? "Submitting..." : "Log In"}
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
