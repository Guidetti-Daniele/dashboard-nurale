import React from "react";
import { NavLink } from "react-router";

import type { RouteType } from "@/constants/routes";

type SidebarMenuLinkProps = {
  title: string;
  url: RouteType;
  icon: React.ReactElement;
};

const SidebarMenuLink: React.FC<SidebarMenuLinkProps> = ({
  title,
  url,
  icon,
}) => {
  return (
    <NavLink
      to={url}
      className="flex items-center gap-2 w-full rounded-lg p-2 bg-gray-200 hover:bg-black hover:text-white cursor-pointer"
    >
      {icon}
      <span>{title}</span>
    </NavLink>
  );
};

export default SidebarMenuLink;
