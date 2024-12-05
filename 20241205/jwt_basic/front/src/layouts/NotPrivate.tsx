import { useEffect, useState } from "react";
import { useAuthStore } from "../stores/authStore";
import { Outlet, useNavigate } from "react-router";

// 인증되지 않은 사용자를 위한 레이아웃
export default function NotPrivate() {
  const navigate = useNavigate();
  const [show, setIsShow] = useState(false);

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
      return;
    }
    setIsShow(true);
  }, []);
  return <>{show && <Outlet />}</>;
}
