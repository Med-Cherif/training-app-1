import { create } from "zustand";

interface AuthStore {
  accessToken: string | null;
  authSuccess: (accessToken: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => {
  return {
    accessToken: localStorage.getItem("accessToken") || null,
    authSuccess(accessToken: string) {
      localStorage.setItem("accessToken", accessToken);
      set((current) => {
        return {
          ...current,
          accessToken,
        };
      });
    },

    logout() {
      localStorage.removeItem("accessToken");
      set((current) => {
        return {
          ...current,
          accessToken: null,
        };
      });
    },
  };
});

export default useAuthStore;
