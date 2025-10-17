import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Outlet, useNavigate } from "react-router";

import { LOGIN_ROUTE } from "@/constants/routes";

const ProtectedRoutes: React.FC = () => {
  const navigate = useNavigate();

  const {
    auth: { isAuthenticated },
  } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) navigate(LOGIN_ROUTE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
};

export default ProtectedRoutes;
