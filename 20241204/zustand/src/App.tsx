import CompoA from "./components/CompoA";
import { useAuthStore } from "./store/authStore";

function App() {
  const user = useAuthStore((state) => state.user);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  return (
    <>
      <CompoA />
      {isLoggedIn && user?.name}
      {isLoggedIn && <button onClick={logout}>로그아웃</button>}
      {!isLoggedIn && (
        <button onClick={() => login({ name: "GD", age: 37 })}>로그인</button>
      )}
    </>
  );
}

export default App;
