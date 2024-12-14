// import { AuthProvider } from "@/context/auth";
// import { NavigationSidebarProvider } from "@/context/navigationSidebar";

// export default function Layout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {

//   // define

//   return (
//     <AuthProvider>
//       <NavigationSidebarProvider>
//         <main>{children}</main>
//       </NavigationSidebarProvider>
//     </AuthProvider>
//   );
// }

"use client";
import React from "react";
import { usePathname } from "next/navigation";
import LoggedInNavbar from "@/components/LoggedInNavbar";
import SideBar from "@/components/SideBar";
import { AuthContext, AuthProvider } from "@/context/auth";
import {
  NavigationSidebarContext,
  NavigationSidebarProvider,
} from "@/context/navigationSidebar";
import { useContext, useEffect, useState } from "react";
import LoggedInFooter from "@/components/LoggedInFooter";

export default function Layout({ children }) {
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

  const pathname = usePathname();
  console.log("pathname from route: ", pathname);
  return (
    <main className="flex h-screen bg-gray-50 overflow-auto font-work-sans">
      <AuthProvider>
        <NavigationSidebarProvider>
          <SideBar className="font-work-sans font-normal " active={pathname} />
          <div
            className={`flex flex-col justify-between flex-grow overflow-y-auto ${display}`}
          >
            <LoggedInNavbar />
            <main className="flex-grow">{children}</main>
            <LoggedInFooter />
          </div>
        </NavigationSidebarProvider>
      </AuthProvider>
    </main>
  );
}

// export default dashboard;
