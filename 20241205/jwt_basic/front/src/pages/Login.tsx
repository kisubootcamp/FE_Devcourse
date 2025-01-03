import { axiosInstance } from "../api/axios";
import { useAuthStore } from "../stores/authStore";
import { useNavigate } from "react-router";

export default function Login() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const loginHandler = async () => {
    const { data } = await axiosInstance.post(
      "/login",
      {
        username: "test",
        password: "1234",
      },
      {
        withCredentials: true, // 쿠키 전송을 위한 옵션, 보안정책 허용
      }
    );
    login(data.accessToken);
    navigate("/");
  };
  return (
    <>
      <h1>user</h1>
      <button onClick={loginHandler}>로그인</button>
    </>
  );
}
