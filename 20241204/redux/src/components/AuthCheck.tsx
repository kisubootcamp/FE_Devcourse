import { login, logout } from "../store/authSlice";
import { reset } from "../store/CounterSlice";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  //   const { isLoggedIn, login, logout } = useContext(AuthContext)!;
  //   const { reset } = useContext(CounterActionContext)!;
  const user = useSelector((state: RootState) => state.auth.user);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      {isLoggedIn && user?.name}
      {isLoggedIn && children}
      {isLoggedIn && (
        <button
          onClick={() => {
            dispatch(logout());
            dispatch(reset());
          }}
        >
          로그아웃
        </button>
      )}
      {!isLoggedIn && (
        <button onClick={() => dispatch(login({ name: "GD", age: 37 }))}>
          로그인
        </button>
      )}
    </>
  );
}
