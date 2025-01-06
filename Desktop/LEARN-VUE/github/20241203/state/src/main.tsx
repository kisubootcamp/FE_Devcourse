import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";
import CounterProvider from "./context/provider/CounterProvider.tsx";
import CountOutsideDisplay from "./components/CountOutsideDisplay.tsx";

// App 컴포넌트가 CounterProvider의 children으로 들어감
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
    <CountOutsideDisplay />
    {/* context 밖에 위치, context 데이터를 공유받지 못함 */}
  </StrictMode>
);
