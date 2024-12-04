import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootSate } from "../store/store";
import { login, logout } from "../store/slice/authSlice";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const user = useSelector((state: RootSate) => state.auth.user);
  const isLoggedIn = useSelector((state: RootSate) => state.auth.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      {isLoggedIn && user?.name}
      {isLoggedIn && children}

      {isLoggedIn && (
        <button onClick={() => dispatch(logout())}>로그아웃</button>
      )}
      {!isLoggedIn && (
        <button onClick={() => dispatch(login({ name: "짱구", age: 5 }))}>
          로그인
        </button>
      )}
    </>
  );
}
