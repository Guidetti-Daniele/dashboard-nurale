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
    <SidebarProvider>
      {/* Sidebar */}
      <MainSidebar />
      <section className="p-2">
        <SidebarToggleButton />
      </section>

      {/* Pages */}
      <section className="grow p-4">
        <Outlet />
      </section>
    </SidebarProvider>
  ) : (
    <Navigate to={ROUTE_PATHS.login} />
  );
};
