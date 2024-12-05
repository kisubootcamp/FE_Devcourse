import AuthCheck from "./components/AuthCheck";
import Count from "./components/Count";

export default function App() {
  return (
    <AuthCheck>
      <Count />
    </AuthCheck>
  );
}
