import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookBookmark } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { TbStarsFilled } from "react-icons/tb";
import { IoLibrary } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
const sideLinks = [
  {
    // Only admin links
    icon: <FaBookBookmark />,
    title: "Product",
    to: "/admin/bestseller",
    isAdminOnly: true,
  },
  {
    // Only admin links
    icon: <FaUsers />,
    title: "Customers",
    to: "/admin/students",
    isAdminOnly: true,
  },
  {
    // Only admin links
    icon: <FaUsers />,
    title: "Admins",
    to: "/admin/admins",
    isAdminOnly: true,
  },
  {
    // Only admin links
    icon: <FaListUl />,
    title: "All Burrows",
    to: "/admin/all-burrows",
    isAdminOnly: true,
  },
  {
    // Only admin links
    icon: <TbStarsFilled />,
    title: "All Reviews",
    to: "/admin/reviews",
    isAdminOnly: true,
  },
  {
    icon: <IoLibrary />,
    title: "My Books",
    to: "/my-books",
    isAdminOnly: false,
  },
  {
    icon: <CgProfile />,
    title: "Profile",
    to: "/profile",
    isAdminOnly: false,
  },
];
const user = {
  role: "admin",
};

const list =
  user.role === "admin"
    ? sideLinks
    : sideLinks.filter((item) => !item.isAdminOnly);

const UserSideBar = () => {
  return (
    <div>
      <Stack gap={1}>
        {list.map(({ title, to, icon }) => (
          <Link
            key={title}
            to={to}
            className={`p-2 nav-link ${
              title === "" ? "bg-white text-dark rounded" : ""
            } `}
          >
            {icon} {title}
          </Link>
        ))}
      </Stack>
    </div>
  );
};

export default UserSideBar;
