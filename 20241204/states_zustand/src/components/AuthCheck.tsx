import { useAuthStore } from "../store/authStore";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const user = useAuthStore((state) => state.user);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  return (
    <>
      {isLoggedIn && <div>{user?.name}</div>}
      {isLoggedIn && children}
      {!isLoggedIn && (
        <button onClick={() => login({ name: "janmes", age: 20 })}>
          로그인
        </button>
      )}
      {isLoggedIn && <button onClick={() => logout()}>로그아웃</button>}
    </>
  );
}
