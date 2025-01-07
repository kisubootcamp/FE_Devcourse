import { useState } from "react";
import { AuthContext } from "../AuthContext";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // true, false
  const login = (user: User) => {
    setUser(user);
    setIsLoggedIn(true); // 로그인 성공
  };
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
