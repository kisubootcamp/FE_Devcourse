import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import CounterProvider from "./context/Provider/CounterProvider.tsx";
import CountOutsideDisplay from "./components/CountOutsideDisplay.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <CounterProvider>
      <App />
      <CountOutsideDisplay />
    </CounterProvider>
  </>
);
