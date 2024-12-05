import { useEffect } from "react";
import { axiosInstance } from "../api/axios";

export default function User() {
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
      <h1>user</h1>
    </>
  );
}
