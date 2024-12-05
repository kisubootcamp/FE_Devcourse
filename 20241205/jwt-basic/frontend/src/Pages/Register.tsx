import React from "react";
import { axiosInstance } from "../api/axios";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();
  const registerHandler = async () => {
    const { status, data } = await axiosInstance.post("/register", {
      username: "test1",
      password: "1234",
    });
    if (status === 201) {
      console.log(data);
      navigate("/login");
    } else {
      console.log("failed");
    }
  };
  return (
    <>
      <h1>register</h1>
      <button onClick={registerHandler}>회원가입</button>
    </>
  );
}
