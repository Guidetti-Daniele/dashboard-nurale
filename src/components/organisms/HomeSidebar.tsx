import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import SidebarMenuLink from "../molecules/Home/Sidebar/SidebarMenuLink";

import { House, Inbox, Calendar, Search, Settings } from "lucide-react";
import { ROUTE_PATHS } from "@/constants/routes";

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

const HomeSidebar: React.FC = () => {
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
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

export default HomeSidebar;
