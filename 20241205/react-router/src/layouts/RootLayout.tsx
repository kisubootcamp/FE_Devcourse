import { NavLink, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <header>header</header>
      <nav>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
