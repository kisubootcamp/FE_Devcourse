import { useState } from "react";
import { AuthContext } from "../AuthContext";

export default function AuthContextProvider({
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
    setUser(user);
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
