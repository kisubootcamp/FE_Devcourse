import { useMemo, useState } from "react";
import { AuthActionContext, AuthContext } from "../AuthContext";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = (user: User) => {
    setUser(user);
    setIsLoggedIn(true);
  };
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };
  const memo = useMemo(
    () => ({
      login,
      logout,
    }),
    []
  );
  return (
    <AuthActionContext.Provider value={memo}>
      <AuthContext.Provider value={{ user, isLoggedIn }}>
        {children}
      </AuthContext.Provider>
      ;
    </AuthActionContext.Provider>
  );
}
