import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import CounterProvider from "./context/provider/CounterProvider.tsx";
import AuthContextProvider from "./context/provider/AuthContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </AuthContextProvider>
  </StrictMode>
);
