import { SidebarProvider } from "@/components/ui/sidebar";

import Welcome from "@/components/molecules/Home/Welcome";
import HomeSidebar from "@/components/organisms/HomeSidebar";
import SidebarToggleButton from "@/components/molecules/Home/Sidebar/SidebarToggleButton";

const Home: React.FC = () => {
  return (
    <SidebarProvider className="w-screen min-h-screen p-1.5 flex">
      <HomeSidebar />

      <section className="basis-full p-2">
        <SidebarToggleButton />
        <Welcome />
      </section>
    </SidebarProvider>
  );
};

export default Home;
