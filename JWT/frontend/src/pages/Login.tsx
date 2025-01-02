import { useNavigate } from "react-router";
import { axiosInstance } from "../api/axios";
import { useAuthStore } from "../stores/authStore";

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const loginHandler = async () => {
    const { data } = await axiosInstance.post("/login", {
      username: "test2",
      password: "1234",
    });
    console.log(data.accessToken);
    login(data.accessToken);
    navigate("/");
  };
  return (
    <>
      <h1>로그인</h1>
      <button onClick={loginHandler}>로그인</button>
    </>
  );
};

export default Login;
