import { useAuthStore } from "../store/authStore";
import { useCounterStore } from "../store/counterStore";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);
  const login = useAuthStore((state) => state.login);

  const reset = useCounterStore((state) => state.reset);
  return (
    <>
      {isLoggedIn && children}
      {!isLoggedIn && (
        <button onClick={() => login({ name: "james", age: 20 })}>로그인</button>
      )}
      {isLoggedIn && (
        <button
          onClick={() => {
            reset();
            logout();
          }}
        >
          로그아웃
        </button>
      )}
    </>
  );
}
