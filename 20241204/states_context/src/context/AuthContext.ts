import { createContext } from "react";

export const AuthContext = createContext<AuthContextType | null>(null);
export const AuthActionContext = createContext<AuthActionContextType | null>(
  null
);
