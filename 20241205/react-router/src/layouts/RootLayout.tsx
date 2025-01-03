import { NavLink, Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <header>header</header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet />
      <footer>footer</footer>
    </>
  );
};

export default RootLayout;
