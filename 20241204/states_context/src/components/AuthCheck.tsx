import { useContext } from "react";
import { AuthActionContext, AuthContext } from "../context/AuthContext";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { login, logout } = useContext<AuthActionContextType | null>(
    AuthActionContext
  )!;
  const { isLoggedIn } = useContext<AuthContextType | null>(AuthContext)!;
  return (
    <>
      {isLoggedIn && children}
      {isLoggedIn && (
        <button
          onClick={() => {
            login({ name: "james", age: 20 });
          }}
        >
          로그인
        </button>
      )}
      {isLoggedIn && <button onClick={logout}>로그아웃</button>}
    </>
  );
}
