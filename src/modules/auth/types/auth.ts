export interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  avatarUrl: string | null;
  phone: string | null;
  roleId: number;
}

export interface RegisterData {
  email: string;
  username: string;
  fullName: string;
  password: string;
  phone?: string;
}

export interface AuthState {
  auth: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
  resetError: () => void;
  register: (data: RegisterData) => Promise<void>;
}
