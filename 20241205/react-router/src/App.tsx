import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/user">
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
