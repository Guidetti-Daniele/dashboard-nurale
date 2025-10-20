import { useAuth } from "@/hooks/useAuth";
import { Outlet, Navigate } from "react-router";

import { SidebarProvider } from "./ui/sidebar";
import MainSidebar from "./organisms/MainSidebar";
import SidebarToggleButton from "./molecules/Home/Sidebar/SidebarToggleButton";

import { ROUTE_PATHS } from "@/constants/routes";

const ProtectedRoutes: React.FC = () => {
  const {
    auth: { isAuthenticated },
  } = useAuth();

  return isAuthenticated ? (
    <SidebarProvider className="w-screen min-h-screen p-1.5 flex">
      <MainSidebar />
      <section className="basis-full p-2">
        <SidebarToggleButton />
        <Outlet />
      </section>
    </SidebarProvider>
  ) : (
    <Navigate to={ROUTE_PATHS.login} />
  );
};

export default ProtectedRoutes;
