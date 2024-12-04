import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { login, logout } from "../store/slice/authSlice";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useSelector((state: RootState) => {
    return state.auth.isLoggedIn;
  });

  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      {isLoggedIn && children}
      {!isLoggedIn && (
        <button onClick={() => dispatch(login({ name: "james", age: 234 }))}>
          로그인
        </button>
      )}
      {isLoggedIn && (
        <button onClick={() => dispatch(logout())}>로그아웃</button>
      )}
    </>
  );
}
