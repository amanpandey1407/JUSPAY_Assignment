import {
  FaRegUser,
  FaRegFolder,
  FaRegBookmark,
  FaRegAddressCard,
  FaRegBuilding,
  FaRegNewspaper,
  FaRegComments,
} from "react-icons/fa";

export const navigationData = [
  {
    type: "user",
    name: "ByeWind",
    icon: FaRegUser,
  },
  {
    type: "section",
    title: "Favorites",
    items: [
      { name: "Overview", url: "/overview", dot: true },
      { name: "Projects", url: "/projects", dot: true },
    ],
  },
  {
    type: "section",
    title: "Dashboards",
    items: [
      {
        name: "Default",
        icon: FaRegAddressCard,
        url: "/",
      },
      {
        name: "eCommerce",
        icon: FaRegFolder,
        collapsible: true,
        subItems: [
          { name: "Products", url: "/dashboard/ecommerce/products" },
          { name: "Orders", url: "/orderlist" },
        ],
      },
      {
        name: "Projects",
        icon: FaRegFolder,
        collapsible: true,
        subItems: [
          { name: "Current", url: "/dashboard/projects/current" },
          { name: "Completed", url: "/dashboard/projects/completed" },
        ],
      },
      {
        name: "Online Courses",
        icon: FaRegBookmark,
        collapsible: true,
        subItems: [
          { name: "Enrolled", url: "/dashboard/courses/enrolled" },
          { name: "Completed", url: "/dashboard/courses/completed" },
        ],
      },
    ],
  },
  {
    type: "section",
    title: "Pages",

    items: [
      {
        name: "User Profile",
        icon: FaRegUser,
        collapsible: true,
        subItems: [
          { name: "Overview", url: "/pages/user-profile/overview" },
          { name: "Projects", url: "/pages/user-profile/projects" },
          { name: "Campaigns", url: "/pages/user-profile/campaigns" },
          { name: "Documents", url: "/pages/user-profile/documents" },
          { name: "Followers", url: "/pages/user-profile/followers" },
        ],
      },
      {
        name: "Account",
        icon: FaRegAddressCard,
        collapsible: true,
        subItems: [
          { name: "Settings", url: "/pages/account/settings" },
          { name: "Billing", url: "/pages/account/billing" },
        ],
      },
      {
        name: "Corporate",
        icon: FaRegBuilding,
        collapsible: true,
        subItems: [
          { name: "About Us", url: "/pages/corporate/about" },
          { name: "Team", url: "/pages/corporate/team" },
        ],
      },
      {
        name: "Blog",
        icon: FaRegNewspaper,
        collapsible: true,
        subItems: [
          { name: "All Posts", url: "/pages/blog/all" },
          { name: "New Post", url: "/pages/blog/new" },
        ],
      },
      {
        name: "Social",
        icon: FaRegComments,
        collapsible: true,
        subItems: [
          { name: "Feed", url: "/pages/social/feed" },
          { name: "Connections", url: "/pages/social/connections" },
        ],
      },
    ],
  },
];
