import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, login, logout } = useContext(AuthContext)!;
  return (
    <>
      {isLoggedIn && children}
      {!isLoggedIn && (
        <button onClick={() => login({ name: "james", age: 20 })}>
          {" "}
          로그인
        </button>
      )}
      {isLoggedIn && <button onClick={logout}>로그아웃</button>}
    </>
  );
}
