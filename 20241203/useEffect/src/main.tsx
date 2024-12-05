import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import Practice from "./components/Practice.tsx";

createRoot(document.getElementById("root")!).render(<App />);
