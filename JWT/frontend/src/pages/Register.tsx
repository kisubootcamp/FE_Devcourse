import { useNavigate } from "react-router";
import { axiosInstance } from "../api/axios";

const Register = () => {
  const navigate = useNavigate();

  const registerHandler = async () => {
    try {
      const { status, data } = await axiosInstance.post("/register", {
        username: "test2",
        password: "1234",
      });

      if (status === 201) {
        console.log(data);
        navigate("/login");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <button onClick={registerHandler}>회원가입</button>
    </>
  );
};

export default Register;
