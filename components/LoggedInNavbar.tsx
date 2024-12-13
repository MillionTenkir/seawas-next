"use client";
// import { IoMdNotificationsOutline } from "react-icons/io";
import UserPicture from "../../assets/Avatar Style 6.png";
// import { IoInformationCircleOutline } from "react-icons/io5";
import { useContext, useEffect } from "react";
// import { FaBars } from "react-icons/fa";
import { NavigationSidebarContext } from "../context/navigationSidebar";
import { Bell, BookMarked, Menu } from "lucide-react";
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";

//
function LoggedInNavbar() {
  const { isNavigationSidebarOpen, setNavigationSidebarOpen } = useContext(
    NavigationSidebarContext
  );

  // Close sidebar on smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNavigationSidebarOpen(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setNavigationSidebarOpen]);
  return (
    <div className="flex items-center justify-between min-h-20 px-4 bg-white border-b border-gray-200 sticky top-0 z-10">
      <div
        className={`m-3 flex ${
          isNavigationSidebarOpen ? "justify-between" : "justify-center"
        } items-center`}
      >
        <button
          className="p-2 text-gray-500 focus:outline-none hover:bg-gray-200"
          onClick={() => setNavigationSidebarOpen(!isNavigationSidebarOpen)}
        >
          <FaBars />
        </button>
      </div>
      <div className="flex items-center space-x-4 p-2">
        <button>
          <IoMdNotificationsOutline className="text-xl md:text-2xl text-blue-500" />
        </button>
        <button>
          <IoInformationCircleOutline className="text-xl md:text-2xl text-blue-500" />
        </button>
        <img
          alt="user logo"
          src="/Avatar Style 6.png"
          className="w-12 h-12 rounded-full"
        />
      </div>
    </div>
  );
}

export default LoggedInNavbar;
