import { useReducer } from "react";
import { loginReducer } from "../reducer/loginReducer";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import Input from "./html/Input";

const initialState: LoginReducerState = {
  mail: "",
  password: "",
  agree: false,
  alert: "",
  isSubmit: false,
};

export default function Login() {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleAgree = () => {
    dispatch({ type: "SET_AGREE" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.mail || !state.password) {
      dispatch({ type: "SET_ALERT", alert: "입력 값을 모두 입력하세요." });
      return;
    }

    if (!state.agree) {
      dispatch({ type: "SET_ALERT", alert: "약관에 동의해주세요." });
      return;
    }

    if (state.isSubmit) return;

    dispatch({ type: "SET_ALERT", alert: "" });
    dispatch({ type: "SUBMIT_START" });

    // API 호출
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "SET_ALERT", alert: "로그인이 완료되었습니다." });
    } catch (error) {
      if (error)
        dispatch({ type: "SET_ALERT", alert: "로그인에 실패했습니다." });
    } finally {
      dispatch({ type: "SUBMIT_END" });
    }
  };

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[444px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <Input
              type="email"
              className="input-style1"
              placeholder="someone@example.com"
              name="mail"
              value={state.mail}
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
            <Checkbox checked={state.agree} onChange={handleAgree}>
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            <div>
              <p className="text-rose-500 text-sm h-5">{state.alert}</p>
              <div className="mt-3 grid gap-4">
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
