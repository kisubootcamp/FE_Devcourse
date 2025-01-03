import { Outlet } from "react-router";

export default function User() {
  return (
    <>
      <header>header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
