import React from "react";
import { MenuIcon, X } from "lucide-react";
import { Button, useSidebar } from "@/components/";

export const SidebarToggleButton: React.FC = () => {
  const { toggleSidebar, open } = useSidebar();

  return (
    <Button className="rounded-lg sticky top-2" onClick={() => toggleSidebar()}>
      {open ? <X /> : <MenuIcon />}
    </Button>
  );
};
