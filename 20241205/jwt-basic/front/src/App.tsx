import { Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Private from "./components/Private";
import NotPrivate from "./components/NotPrivate";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import { axiosInstance } from "./api/axios";

function App() {
  const login = useAuthStore((state) => state.login);
  const getUser = async () => {
    try {
      const { data } = await axiosInstance.post("/token");
      login(data.accessToken);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
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
  );
}

export default App;
