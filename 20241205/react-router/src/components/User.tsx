import { Outlet } from "react-router";

export default function User() {
  return (
    <div>
      <div>User</div>
      <Outlet />
      <div>흠</div>
    </div>
  );
}
