import { useReducer } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";
import { reducer } from "./reducer/loginReducer";

const initState = {
  email: "",
  password: "",
  isChecked: false,
  isSubmit: false,
  error: "",
};

export default function Login() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value: value });
  };
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value: checked });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.isSubmit) return;

    if (!state.email || !state.password || !state.isChecked) {
      dispatch({
        type: "SET_ERROR",
        error: "입력값을 모두 입력하고 체크하세요!",
      });
      return;
    }

    dispatch({ type: "SUBMIT_START" });
    dispatch({ type: "SET_FIELD", field: "email", value: "" });
    dispatch({ type: "SET_FIELD", field: "password", value: "" });
    dispatch({ type: "SET_FIELD", field: "isChecked", value: false });
    dispatch({ type: "SET_ERROR", error: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch({ type: "SUBMIT_SUCCESS" });
      alert("로그인이 되었습니다!");
    } catch (e) {
      dispatch({ type: "SET_ERROR", error: "폼 전송중에 에러 발생!" });
    } finally {
      dispatch({ type: "SUBMIT_END" });
    }
  };
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <Input
              type="text"
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
            <Checkbox
              checked={state.isChecked}
              name="isChecked"
              onChange={handleChangeCheckbox}
            >
              <span className="text-sm color-[#4f4f4f]">
                I state with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            <div className="text-rose-500">
              {state.error !== "" && state.error}
            </div>
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
