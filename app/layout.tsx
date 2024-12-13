import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { AuthProvider } from "@/context/auth";
import { NavigationSidebarProvider } from "@/context/navigationSidebar";

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Seawas",
  description: "Sheger Enterprenurs Association",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        <AuthProvider>
          <NavigationSidebarProvider>{children}</NavigationSidebarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
