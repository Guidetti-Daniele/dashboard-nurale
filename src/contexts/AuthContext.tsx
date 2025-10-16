import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

interface Auth {
  isAuthenticated: boolean;
  username: string;
}

interface AuthContextType {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<Auth>({
    isAuthenticated: false,
    username: "",
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx)
    throw new Error(
      "Auth Context was not found! Assert to have inserted the AuthProvider."
    );

  return ctx;
};

export default AuthProvider;
