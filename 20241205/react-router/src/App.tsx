import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import About from "./pages/About";
import Login from "./pages/Login";
import User from "./pages/User";
import RootLayout from "./layouts/RootLayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />

          {/* <Route path="user" element={<User />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<h1>Register</h1>} />
        </Route> */}

          <Route element={<User />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<h1>Register</h1>} />
          </Route>

          <Route path="team/:teamId" element={<h1>Team</h1>} />
        </Route>
      </Routes>
    </>
  );
}
