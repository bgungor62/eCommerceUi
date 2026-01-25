//token, login, register kullanıcı bilgileri kontrol edilir
export type AuthUser = {
  email?: string;
  fullName?: string;
  roles: string[];
};

type LoginDto = {
  email: string;
  password: string;
};

type AuthContextType = {
  token: string | null;
  isAuthentication: boolean;
  user: AuthUser | null;
  roles: string;
  hasRole: (role: string) => boolean;
  login: (dto: LoginDto) => Promise<void>;
  logout: () => void;
};
