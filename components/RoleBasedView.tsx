import {
  Banknote,
  Bookmark,
  House,
  MapPinHouse,
  SquareMenu,
  UserCheck,
  Users,
} from "lucide-react";
import {
  FaAddressCard,
  FaBookmark,
  FaBookReader,
  FaHome,
  FaLightbulb,
  FaMoneyCheckAlt,
  FaProjectDiagram,
  FaUserAstronaut,
  FaUserCheck,
  FaUserFriends,
} from "react-icons/fa";
import { FaBarsProgress, FaMoneyBillTrendUp } from "react-icons/fa6";

const DefaultViews = {
  // "/profile": {
  //   label: "Settings",
  //   component: <Profile />,
  //   icon: CogIcon,
  // },
};

const RoleBasedViews = {
  super_admin: {
    name: "super_admin",
    routes: {
      "/dashboard": {
        label: "Dashboard",
        // component: <SuperAdminDashboard />,
        icon: FaHome,
      },
      "/add-user": {
        label: "Add User",
        // component: <ContactUs />,
        icon: FaAddressCard,
      },
      "/reports": {
        label: "Reports",
        // component: <ContactUs />,
        icon: FaBookmark,
      },
    },
  },
  admin_of_system: {
    name: "admin",
    routes: {
      "/dashboard": {
        label: "Dashboard",
        // component: <AdminDashboard />,
        icon: FaHome,
      },
      "/approve-registration": {
        label: "Approve Registration",
        // component: <ApproveRegistration />,
        icon: FaUserCheck,
      },
      "/mentor-matching": {
        label: "Mentor Matching",
        // component: <ContactUs />,
        icon: FaUserFriends,
      },
      "/work-progress": {
        label: "Work Progress",
        // component: <ContactUs />,
        icon: FaBarsProgress,
      },
      "/transactions": {
        label: "Transactions",
        // component: <ContactUs />,
        icon: FaMoneyBillTrendUp,
      },
    },
  },
  donors_sponsors: {
    name: "mentors",
    routes: {
      "/dashboard": {
        label: "Dashboard",
        // component: <DonorsDashboard />,
        icon: FaHome,
      },
      "/assigned-kidpreneurs": {
        label: "Assigned Kidpreneurs",
        // component: <ContactUs />,
        icon: FaUserAstronaut,
      },
      "/feedback": {
        label: "Feedback",
        // component: <ContactUs />,
        // icon: FaCommentDots,
      },
      "/donations": {
        label: "Donations",
        // component: <ContactUs />,
        icon: FaMoneyCheckAlt,
      },
    },
  },
  kid_preneurs: {
    name: "kidpreneurs",
    routes: {
      "/dashboard": {
        label: "Dashboard",
        // component: <KidpreneursDashboard />,
        icon: FaHome,
        bool: true,
      },
      "/elearning": {
        label: "E-Learning",
        // component: <ContactUs />,
        icon: FaBookReader,
        bool: true,
      },
      "/ideas": {
        label: "Ideas",
        // component: <ContactUs />,
        icon: FaLightbulb,
        bool: true,
      },
      "/projects": {
        label: "Projects",
        // component: <ContactUs />,
        icon: FaProjectDiagram,
        bool: true,
      },
      "/find-mentor": {
        label: "Find Mentor",
        // component: <ContactUs />,
        icon: FaUserFriends,
        bool: true,
      },
    },
  },
};

export { RoleBasedViews, DefaultViews };
