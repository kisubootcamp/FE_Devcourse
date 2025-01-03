import { useEffect, useState } from "react";
import { useAuthStore } from "../stores/authStore";
import { Outlet, useNavigate } from "react-router";

export default function Private() {
  const navigate = useNavigate();
  const [show, setIsShow] = useState(false);

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    setIsShow(true);
  }, []);
  return <>{show && <Outlet />}</>;
}
