import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import CounterProiveder from "./context/provider/CounterProiveder.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterProiveder>
      <App />
    </CounterProiveder>
  </StrictMode>
);
