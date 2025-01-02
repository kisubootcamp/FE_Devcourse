import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import About from "./pages/About";
import Team from "./component/Team";
import RootLayout from "./layouts/RootLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />

        <Route path="user" element={<h1>User</h1>}>
          <Route path="login" element={<h1>로그인</h1>} />
        </Route>

        <Route path="team/:teamId" element={<Team />} />

        <Route path="*" element={<h1>Pages Not Found.</h1>} />
      </Route>
    </Routes>
  );
}
