import React from "react";
import { useSidebar } from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

const SidebarToggleButton: React.FC = () => {
  const { toggleSidebar, open } = useSidebar();

  return (
    <Button onClick={() => toggleSidebar()}>
      {open ? <X /> : <MenuIcon />}
    </Button>
  );
};

export default SidebarToggleButton;
