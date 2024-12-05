import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import About from "./pages/About";
import User from "./components/User";
import Team from "./components/Team";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout></RootLayout>}>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />

        <Route element={<User />}>
          <Route path="login" element={<Main />} />
          <Route path="register" element={<About />} />
        </Route>

        <Route path="team/:teamId" element={<Team></Team>}></Route>
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
