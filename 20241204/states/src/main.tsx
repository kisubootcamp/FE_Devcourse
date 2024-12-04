import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import CounterProvider from "./context/Provider/CounterProvider.tsx";
import AuthProvider from "./context/Provider/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <CounterProvider>
      <App />
    </CounterProvider>
  </AuthProvider>
);
