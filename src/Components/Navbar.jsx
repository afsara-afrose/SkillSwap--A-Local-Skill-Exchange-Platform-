import React from "react";
import MyContainer from "./MyContainer";
import { NavLink } from "react-router";
import logo from "../assets/NavbarLogo.png"
import logInlogo from "../assets/loginlogo.png"
import MyLink from "./MyLink";

const Navbar = () => {
  return (
    
     
        <div className="navbar bg-base-100 shadow-sm">
            <MyContainer className="flex justify-between items-center">
         
            <img className="w-[55px]" src={logo} alt="" />
          
          <div className="navbar-center hidden lg:flex">
            <ul className="flex justify-around px-1 gap-3 ">
              <li>
                <MyLink to='/'>Home</MyLink>
              </li>
              <li>
                <MyLink to='/skillDetails'>Skill Details</MyLink>
              </li>
              <li>
                <MyLink to='/myProfile'>My Profile</MyLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-between gap-3">
            <img className="w-[35px]" src={logInlogo} alt="" />
            <NavLink className="btn btn-primary">Login</NavLink>
            <NavLink className="btn btn-primary">SignUp</NavLink>
          </div>
        </MyContainer>
        </div>
      
    
  );
};

export default Navbar;
