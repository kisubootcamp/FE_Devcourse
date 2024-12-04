import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { login, logout } from "../store/slice/authSlice";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const user = useSelector((state: RootState) => state.auth.user);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispacth = useDispatch<AppDispatch>();

  return (
    <>
      {isLoggedIn && <div>{user?.name}</div>}
      {isLoggedIn && children}
      {!isLoggedIn && (
        <button onClick={() => dispacth(login({ name: "janmes", age: 20 }))}>
          로그인
        </button>
      )}
      {isLoggedIn && (
        <button onClick={() => dispacth(logout())}>로그아웃</button>
      )}
    </>
  );
}
