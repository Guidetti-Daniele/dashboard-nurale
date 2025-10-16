import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const ProtectedRoutes: React.FC = () => {
  const navigate = useNavigate();

  const {
    auth: { isAuthenticated },
  } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, []);

  return <Outlet />;
};

export default ProtectedRoutes;
