import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { login, logout } from "../store/slice/Auth/authSlice";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth)!;
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      {isLoggedIn && user?.name}
      {isLoggedIn && children}
      {!isLoggedIn && (
        <button onClick={() => dispatch(login({ name: "kim", age: 20 }))}>
          로그인
        </button>
      )}
      {isLoggedIn && (
        <button onClick={() => dispatch(logout())}>로그아웃</button>
      )}
    </>
  );
}
