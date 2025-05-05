import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookBookmark } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { TbStarsFilled } from "react-icons/tb";
import { IoLibrary } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
const sideLinks = [
  {
    // Only admin links
    icon: <FaBookBookmark />,
    title: "Product",
    to: "/admin/products",
    isAdminOnly: true,
  },
  {
    // Only admin links
    icon: <FaUsers />,
    title: "Customers",
    to: "/admin/customers",
    isAdminOnly: true,
  },
  {
    // Only admin links
    icon: <FaUsers />,
    title: "All-orders",
    to: "/admin/all-orders",
    isAdminOnly: true,
  },

  {
    // Only admin links
    icon: <TbStarsFilled />,
    title: "All-Reviews",
    to: "/admin/reviews",
    isAdminOnly: true,
  },
  {
    icon: <IoLibrary />,
    title: "My Order",
    to: "/my-orders",
    isAdminOnly: false,
  },
  {
    icon: <CgProfile />,
    title: "Profile",
    to: "/profile",
    isAdminOnly: false,
  },
];
// const user = {
//   role: "admin",
// };

const UserSideBar = () => {
  const { user, menu } = useSelector((state) => state.userInfo);
  const list =
    user.role === "admin"
      ? sideLinks
      : sideLinks.filter((item) => !item.isAdminOnly);

  return (
    <div>
      <Stack gap={1}>
        {list.map(({ title, to, icon }) => (
          <Link
            key={title}
            to={to}
            className={`p-2 nav-link ${
              title === menu ? "bg-white text-dark rounded" : ""
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
