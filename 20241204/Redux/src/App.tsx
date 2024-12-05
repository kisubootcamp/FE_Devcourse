import Count from "./components/Count";
import Authcheck from "./components/Authcheck";
import CountOutsideDisplay from "./components/CountOutsideDisplay";

export default function App() {
  return (
    <AuthCheck>
      <Count />
      <CountOutsideDislay />
    </AuthCheck>
  );
}
