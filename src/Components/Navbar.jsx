import React from "react";

import MyContainer from "./MyContainer";
import logo from "../assets/NavbarLogo.png"
import loginicon from '../assets/loginlogo.png'
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
        <div className="navbar-center hidden lg:flex">
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
        <div className="navbar-end flex items-center gap-3">
          <img className="w-[35px]" src={loginicon} alt="Login Icon" />
          <NavLink to="/login" className="btn btn-primary">
            Login
          </NavLink>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
