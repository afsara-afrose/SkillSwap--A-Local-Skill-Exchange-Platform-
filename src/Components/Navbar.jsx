import React, { use } from "react";

import MyContainer from "./MyContainer";
import logo from "../assets/NavbarLogo.png";
import avatarImg from "../assets/avatar.png";
import { Link, NavLink, useNavigate } from "react-router";

import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    console.log("User trying to log out");
    logOut()
      .then(() => {
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar bg-amber-200 shadow-sm">
      <MyContainer className="flex justify-between items-center">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown for mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className="font-semibold">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/skillDetails" className="font-semibold">
                  Skill Details
                </NavLink>
              </li>
              <li>
                <NavLink to="/myProfile" className="font-semibold">
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className="w-[45px] rounded-full" src={logo} alt="Logo" />
            <span className="text-xl font-bold">SkillSwap</span>
          </div>
        </div>

        {/* Navbar Center (desktop view) */}
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary"
                    : "font-semibold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skillDetails"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary"
                    : "font-semibold"
                }
              >
                Skill Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myProfile"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary"
                    : "font-semibold"
                }
              >
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        {user ? (
          <div className="flex items-center gap-4">
            {/* user avatar with hover name */}
            <div className="relative group cursor-pointer">
              <img
                className="w-[45px] h-[45px] rounded-full border-2 border-primary"
                src={user.photoURL || avatarImg}
                alt="User Avatar"
              />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] bg-gray-800 text-white text-sm px-2 py-1  opacity-0 group-hover:opacity-100 transition">
                {user?.displayName ? user.displayName : "Anonymous User"}
              </span>
            </div>

            <button onClick={handleLogOut} className="btn btn-primary">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/auth/login" className="btn btn-primary">
              Login
            </Link>
            <Link to="/auth/signup" className="btn btn-secondary">
              SignUp
            </Link>
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
