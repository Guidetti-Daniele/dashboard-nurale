import { useAuth } from "@/contexts/AuthContext";
import { Outlet, Navigate } from "react-router";

import { LOGIN_ROUTE } from "@/constants/routes";

const ProtectedRoutes: React.FC = () => {
  const {
    auth: { isAuthenticated },
  } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to={LOGIN_ROUTE} />;
};

export default ProtectedRoutes;
