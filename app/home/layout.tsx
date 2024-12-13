import { AuthProvider } from "@/context/auth";
import { NavigationSidebarProvider } from "@/context/navigationSidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  // define

  return (
    <AuthProvider>
      <NavigationSidebarProvider>
        <main>{children}</main>
      </NavigationSidebarProvider>
    </AuthProvider>
  );
}
