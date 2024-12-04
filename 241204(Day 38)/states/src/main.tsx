import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import CounterProvider from "./context/provider/CounterProvider.tsx";
import AuthProvider from "./context/provider/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 참고 -4
    모든 영역이 컨텍스트로 묶이게 됨
    같은 컨텍스트를 가지고 있는 것들끼리는 데이터를 공유하는 것
    
    이제 데이터를 공급해야 한다. 
    CounterProvider.tsx 참고 -5 */}
    <AuthProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </AuthProvider>
  </StrictMode>
);
