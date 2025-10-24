import { Outlet, Navigate } from "react-router";

import {
  SidebarProvider,
  MainSidebar,
  SidebarToggleButton,
} from "@/components";

import { useAuth } from "@/hooks";
import { ROUTE_PATHS } from "@/routing";

export const ProtectedRoutes: React.FC = () => {
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
