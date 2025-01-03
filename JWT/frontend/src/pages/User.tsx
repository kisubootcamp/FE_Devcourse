import { useEffect } from "react";
import { axiosInstance } from "../api/axios";

const User = () => {
  const getUser = async () => {
    const { data } = await axiosInstance.get("/user", {
      withCredentials: true,
    });
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <h1>User</h1>
    </>
  );
};

export default User;
