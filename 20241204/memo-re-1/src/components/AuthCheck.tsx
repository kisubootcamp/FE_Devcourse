import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CounterActionContext } from "../context/CounterContext";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, login, logout } = useContext(AuthContext)!;
  const { reset } = useContext(CounterActionContext)!;
  return (
    <>
      {isLoggedIn && children}
      {isLoggedIn && (
        <button
          onClick={() => {
            logout();
            reset();
          }}
        >
          로그아웃
        </button>
      )}
      {!isLoggedIn && (
        <button onClick={() => login({ name: "GD", age: 37 })}>로그인</button>
      )}
    </>
  );
}
