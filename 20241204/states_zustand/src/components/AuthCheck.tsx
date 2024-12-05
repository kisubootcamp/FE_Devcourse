import { useAuthStore } from "../store/authStore";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  // const { isLoggedIn, user, login, logout } = useAuthStore();
  return (
    <>
      {isLoggedIn && user?.name}
      {isLoggedIn && children}

      {isLoggedIn && <button onClick={logout}>로그아웃</button>}
      {!isLoggedIn && (
        <button onClick={() => login({ name: "짱구", age: 5 })}>로그인</button>
      )}
    </>
  );
}
