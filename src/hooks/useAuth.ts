import { useContext } from "react";
import { AuthContext } from "@/contexts";

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx)
    throw new Error(
      "Auth Context was not found! Assert to have inserted the AuthProvider."
    );

  return ctx;
};
