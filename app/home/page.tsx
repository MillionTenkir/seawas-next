"use client";
import LoggedInNavbar from "@/components/LoggedInNavbar";
import SideBar from "@/components/SideBar";
import { AuthContext, AuthProvider } from "@/context/auth";
import {
  NavigationSidebarContext,
  NavigationSidebarProvider,
} from "@/context/navigationSidebar";
import { useContext, useEffect, useState } from "react";

const dashboard = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { isNavigationSidebarMinimized } = useContext(NavigationSidebarContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobile = screenWidth < 768;

  const display =
    isNavigationSidebarMinimized || !isMobile ? "block" : "hidden";
  return (
    <main className="flex h-screen bg-blue-50 overflow-auto font-work-sans">
      <AuthProvider>
        <NavigationSidebarProvider>
          <SideBar className="font-work-sans font-normal " />
          <div
            className={`flex flex-col justify-between flex-grow overflow-y-auto ${display}`}
          >
            <LoggedInNavbar />
            <main className="flex-grow">{children}</main>
          </div>
        </NavigationSidebarProvider>
      </AuthProvider>
    </main>
  );
};

export default dashboard;
