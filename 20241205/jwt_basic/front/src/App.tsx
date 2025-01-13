import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import RootLayout from "./layouts/RootLayout";
import Private from "./layouts/Private";
import NotPrivate from "./layouts/NotPrivate";
import { useEffect } from "react";
import { useAuthStore } from "./stores/authStore";
import { axiosInstance } from "./api/axios";

export default function App() {
  const login = useAuthStore((state) => state.login);
  const getUser = async () => {
    try {
      const data: { accessToken: string } = await axiosInstance.post("/token");
      login(data.accessToken);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />

          <Route element={<NotPrivate />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<Private />}>
            <Route path="/user" element={<User />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}