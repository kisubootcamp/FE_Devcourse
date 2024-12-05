import { create } from "zustand";

type User = {
  name: string;
  age: number;
};

interface AuthStoreType {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStoreType>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (user) => set({ user: user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));
