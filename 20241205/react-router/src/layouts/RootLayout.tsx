import { NavLink, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <header>header</header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
        style={({ isActive }) => (isActive ? { color: "blue" } : {})}
      >
        Home
      </NavLink>
      <Outlet />
      <footer>footer</footer>
    </>
  );
}
