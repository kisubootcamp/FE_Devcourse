import React from "react";
import { axiosInstance } from "../api/axios";
import { useAuthStore } from "../stores/authStore";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const loginHandler = async () => {
    const { data } = await axiosInstance.post(
      "/login",
      {
        username: "test1",
        password: "1234",
      }
    );
    console.log(data.accessToken);
    login(data.accessToken);
    navigate("/");
  };
  return (
    <>
      <div>Login</div>
      <button onClick={loginHandler}>로그인</button>
    </>
  );
}
