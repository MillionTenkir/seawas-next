"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the shape of the context value
interface NavigationSidebarContextProps {
  isNavigationSidebarOpen: boolean;
  setNavigationSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isNavigationSidebarMinimized: boolean;
  setNavigationSidebarMinimized: Dispatch<SetStateAction<boolean>>;
}

// Create the context with the appropriate type, defaulting to `undefined` initially
export const NavigationSidebarContext = createContext<
  NavigationSidebarContextProps | undefined
>(undefined);

interface NavigationSidebarProviderProps {
  children: ReactNode;
}

export function NavigationSidebarProvider({
  children,
}: NavigationSidebarProviderProps) {
  const [isNavigationSidebarMinimized, setNavigationSidebarMinimized] =
    useState<boolean>(true);
  const [isNavigationSidebarOpen, setNavigationSidebarOpen] =
    useState<boolean>(true);

  return (
    <NavigationSidebarContext.Provider
      value={{
        isNavigationSidebarOpen,
        setNavigationSidebarOpen,
        isNavigationSidebarMinimized,
        setNavigationSidebarMinimized,
      }}
    >
      {children}
    </NavigationSidebarContext.Provider>
  );
}
