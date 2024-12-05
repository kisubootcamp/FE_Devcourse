import React, { useEffect, useState } from "react";
import { useAuthStore } from "../stores/authStore";
import { Outlet, useNavigate } from "react-router";

export default function Private() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    setShow(true);
  }, []);
  return <div>{show && <Outlet />}</div>;
}
