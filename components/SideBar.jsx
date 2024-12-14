"use client";
import { useContext, useState, useMemo, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth";
// import { NavigationSidebarContext } from "../../contexts/navigationSidebar";
import { RoleBasedViews, DefaultViews } from "./RoleBasedView";
// import Logo from "../../assets/seawas-logo.png";
// import { Link, useLocation } from "react-router-dom";
import { NavigationSidebarContext } from "../context/navigationSidebar";
import Link from "next/link";
// import { useRouter } from "next/router";

const SideBarItems = ({ isOpen, Label, Icon, to, isActive }) => (
  <Link
    href={to}
    className={`flex flex-1 items-center ${
      isOpen ? "" : "justify-center"
    } space-x-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg w-full`}
  >
    {Icon && (
      <Icon
        className={`${
          isActive ? "text-blue-600" : "text-gray-700"
        } font-normal text-xl`}
      />
    )}
    {isOpen && (
      <span
        className={`${
          isActive ? "text-blue-600" : "text-gray-800"
        } font-normal text-lg`}
      >
        {Label}
      </span>
    )}
  </Link>
);
function SideBar({ active }) {
  // const {
  //   isNavigationSidebarOpen,
  //   setNavigationSidebarOpen,
  //   isNavigationSidebarMinimized,
  //   // setNavigationSidebarMinimized,
  // } = useContext(NavigationSidebarContext);
  const { user } = useContext(AuthContext);
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const location = useLocation();

  // useEffect(() => {
  //   const handleResize = () => setScreenWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const isMobile = screenWidth < 768;
  // const isTablet = screenWidth >= 768 && screenWidth <= 1024;

  // const handleLinkClick = () => {
  //   if (isMobile) {
  //     setNavigationSidebarOpen(false); // Close sidebar on mobile after clicking a link
  //   }
  // };
  const { isNavigationSidebarOpen } = useContext(NavigationSidebarContext);

  const rolesMenu = useMemo(() => {
    return Object.keys(RoleBasedViews[user.role]?.routes).map((key) => {
      const { icon, label, bool } = RoleBasedViews[user.role]?.routes[key];
      return { Icon: icon, Label: label, to: key, bool };
    });
  }, [user.role]);

  const defaultMenu = useMemo(() => {
    return Object.keys(DefaultViews).map((key) => {
      const { icon, label } = DefaultViews[key];
      return { Icon: icon, Label: label, to: key };
    });
  }, []);

  const sidebarItems = useMemo(() => {
    const mergedMenu = [...rolesMenu];
    defaultMenu.forEach((defaultRoute) => {
      if (!mergedMenu.some((roleRote) => roleRote.to === defaultRoute.to)) {
        mergedMenu.push(defaultRoute);
      }
    });
    return mergedMenu;
  }, [rolesMenu, defaultMenu]);

  return (
    <div
      className={` flex flex-col h-screen bg-white  border-r-2 border-gray-200   transition-all duration-300 ${
        isNavigationSidebarOpen ? "min-w-72" : "w-20"
      }`}
    >
      <div
        className={`m-3 mt-10 flex ${
          isNavigationSidebarOpen ? "justify-between" : "justify-center"
        } items-center`}
      >
        {isNavigationSidebarOpen ? (
          <img
            src="/seawas-logo.png"
            alt="logo for the sidebar"
            className="w-52"
          />
        ) : (
          <img
            src="/circle-logo.png"
            alt="logo for the sidebar"
            className="w-52"
          />
        )}
      </div>
      <nav className="flex flex-col items-center m-3 space-y-4 justify-center mt-12">
        {sidebarItems.map((eachSideBarItems, index) => {
          console.log("eachSidebAr Items are: ", eachSideBarItems.to);
          console.log("URL STIRNG: ", active);
          console.log("URL STIRNG: ", active == eachSideBarItems.to);

          return (
            (eachSideBarItems.bool === undefined ||
              eachSideBarItems.bool === true) && (
              <SideBarItems
                key={index}
                isOpen={isNavigationSidebarOpen}
                {...eachSideBarItems}
                isActive={active === eachSideBarItems.to}
              />
            )
          );
        })}

        {/* Sign Out */}
        {/* <div
          className={`flex items-center ${
            isNavigationSidebarOpen ? "" : "justify-center"
          } space-x-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg w-full`}
        >
          <FaSignOutAlt className="text-blue-500 text-xl" />
          {isNavigationSidebarOpen && (
            <span className="text-gray-800 font-medium">Sign Out</span>
          )}
        </div> */}
      </nav>
    </div>
  );
}

export default SideBar;
