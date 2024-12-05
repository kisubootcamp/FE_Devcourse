import React from "react";
import { useAuthStore } from "../stores/authStore";

export default function Home() {
  const accessToken = useAuthStore((state) => state.accessToken);
  return <div>Home {accessToken}</div>;
}
