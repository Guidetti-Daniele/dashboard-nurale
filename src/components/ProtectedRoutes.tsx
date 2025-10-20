import { useAuth } from "@/hooks/useAuth";
import { Outlet, Navigate } from "react-router";

import { ROUTE_PATHS } from "@/constants/routes";

const ProtectedRoutes: React.FC = () => {
  const {
    auth: { isAuthenticated },
  } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTE_PATHS.login} />;
};

export default ProtectedRoutes;
