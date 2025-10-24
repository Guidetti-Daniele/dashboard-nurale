import React from "react";
import { House, Inbox, Calendar, Search, Settings } from "lucide-react";
import { ROUTE_PATHS } from "@/routing";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuLink,
} from "@/components";

//Sidebar items
const items = [
  {
    title: "Home",
    url: ROUTE_PATHS.home,
    icon: <House />,
  },
  {
    title: "Inbox",
    url: ROUTE_PATHS.inbox,
    icon: <Inbox />,
  },
  {
    title: "Calendar",
    url: ROUTE_PATHS.calendar,
    icon: <Calendar />,
  },
  {
    title: "Search",
    url: ROUTE_PATHS.search,
    icon: <Search />,
  },
  {
    title: "Settings",
    url: ROUTE_PATHS.settings,
    icon: <Settings />,
  },
];

export const MainSidebar: React.FC = () => {
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="group gap-2">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <SidebarMenuLink {...item} />
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup></SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
