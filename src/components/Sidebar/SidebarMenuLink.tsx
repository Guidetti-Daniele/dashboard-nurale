import React from "react";
import { NavLink, useLocation } from "react-router";
import { cn } from "@/lib/utils";

import { type RouteType } from "@/routing";

type SidebarMenuLinkProps = {
  title: string;
  url: RouteType;
  icon: React.ReactElement;
};

export const SidebarMenuLink: React.FC<SidebarMenuLinkProps> = ({
  title,
  url,
  icon,
}) => {
  const { pathname } = useLocation();
  const isActive = pathname === url;

  return (
    <NavLink
      to={url}
      className={cn(
        "flex items-center gap-2 w-full rounded-lg p-2 hover:bg-black hover:text-white cursor-pointer",
        isActive ? "bg-red-500" : "bg-gray-200"
      )}
    >
      {icon}
      <span>{title}</span>
    </NavLink>
  );
};
