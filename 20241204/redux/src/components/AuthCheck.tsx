import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { login, logout } from "../store/slice/authSlice";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <>
      {isLoggedIn && children}
      {!isLoggedIn && (
        <button onClick={() => dispatch(login({ name: "james", age: 20 }))}>로그인</button>
      )}
      {isLoggedIn && <button onClick={() => dispatch(logout())}>로그아웃</button>}
    </>
  );
}
