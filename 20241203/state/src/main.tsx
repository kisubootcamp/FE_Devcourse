import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import CounterProvider from "./context/provider/CounterProvider.tsx";
import CountOutsideDisplay from "./components/CountOutsideDisplay.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterProvider>
      <App />
      <CountOutsideDisplay />
    </CounterProvider>
  </StrictMode>
);
