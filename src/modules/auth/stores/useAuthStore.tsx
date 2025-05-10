import { create } from "zustand";
import { persist } from "zustand/middleware";
import { encryptedStorage } from "@/modules/shared/utils/encryptedStorage";
import type { AuthState, RegisterData } from "@/modules/auth/types/auth";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_HOST;
const API_CONFIG = {
  headers: { "Content-Type": "application/json" },
  endpoints: {
    register: `${BASE_URL}/api/auth/register`,
    login: `${BASE_URL}/api/auth/login`,
    logout: `${BASE_URL}/api/auth/logout`,
    checkSession: `${BASE_URL}/api/auth/session/check`,
  },
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // Initial state
      auth: true,
      user: null,
      loading: false,
      error: null,

      // Actions
      resetError: () => set({ error: null }),

      register: async (data: RegisterData) => {
        set({ loading: true, error: null });
        try {
          const response = await axios({
            method: "post",
            url: API_CONFIG.endpoints.register,
            data,
          });

          if (response.data.success === true) {
            // Opción 1: Iniciar sesión automáticamente después del registro
            set({
              auth: true,
              user: response.data.user,
              error: null,
            });

            // Opción 2: Solo confirmar registro exitoso sin iniciar sesión
            // set({ errorAuth: null });
            // return response.data;
          } else {
            set({
              error: response.data.message || "Ocurrió un error al registrarse",
            });
          }
        } catch (err: any) {
          console.error("Error durante el registro:", err);
          set({
            error:
              err.response?.data?.message || "Ocurrió un error al registrarse",
          });
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: "stxf-269",
      storage: encryptedStorage,
    }
  )
);
