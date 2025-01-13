import { Outlet } from "react-router";

export default function User() {
  return (
    <>
      <header>login header</header>
      <Outlet />
      <footer>login footer</footer>
    </>
  );
}
