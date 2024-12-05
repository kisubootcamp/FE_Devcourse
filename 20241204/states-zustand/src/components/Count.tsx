import AuthCheck from "./AuthCheck";
import CountDetail from "./CountDetail";
import CountOutsideDisplay from "./CountOutsideDisplay";

export default function Count() {
  return (
    <AuthCheck>
      <CountDetail />
      <CountOutsideDisplay />
    </AuthCheck>
  );
}
