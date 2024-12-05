import AuthCheck from "./components/AuthCheck";
import Count from "./components/Count";
import CountOutsideDisplay from "./components/CountOutsideDisplay";

export default function App() {
  const [count, set] = useState({ count: 0 });
  const increment = () => {
    set((state) => ({ ...state }));
  };
  return <Count />;
}
