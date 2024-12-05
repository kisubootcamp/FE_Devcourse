import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import User from "./Pages/User";
import Dashboard from "./Pages/Dashboard";
import RootLayout from "./Layouts/RootLayout";
import Private from "./Layouts/Private";
import NotPrivate from "./Layouts/NotPrivate";
import { useEffect } from "react";
import { useAuthStore } from "./stores/authStore";
import { axiosInstance } from "./api/axios";

function App() {
  const login = useAuthStore((state) => state.login);
  const getUser = async () => {
    try {
      const { data } = await axiosInstance.post("/token");
      login(data.accessToken);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route element={<NotPrivate />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
          <Route element={<Private />}>
            <Route path="/user" element={<User />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
