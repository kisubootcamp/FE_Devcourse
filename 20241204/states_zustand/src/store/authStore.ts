import { create } from "zustand";

export const useAuthStore = create<AuthStoreType>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (user) => set({ user: user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));
