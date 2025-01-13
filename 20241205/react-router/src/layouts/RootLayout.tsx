import { Link, NavLink, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <header>header</header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <Link to="/about">About</Link>
        <NavLink
          to="/user/login"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Login
        </NavLink>
      </nav>
      <Outlet />
      <footer>footer</footer>
    </>
  );
}
