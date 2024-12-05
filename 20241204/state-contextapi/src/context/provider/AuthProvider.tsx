import { useState } from "react";
import { AuthContext } from "../AuthContext";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLooggedIn] = useState(false);

  const login = (user: User) => {
    setUser(user);
    setIsLooggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLooggedIn(false);
  };

  return (
    <>
      <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
