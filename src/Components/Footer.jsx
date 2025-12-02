import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-500 text-gray-200 py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <p>Email: support@skillswap.com</p>
          <p>Phone: +880 1234 567 890</p>
          <p>Address: 123 SkillSwap Street, Dhaka, Bangladesh</p>
        </div>

        <div className="text-center">
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>
          <div className="flex justify-center sm:justify-start md:justify-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-blue-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-blue-600 transition" />
            </a>
          </div>
        </div>

        <div className="text-center sm:text-left md:text-right">
          <h3 className="font-bold text-lg mb-3">Policy</h3>
          <ul>
            <li>
              <Link to="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-700 pt-5 text-sm">
        &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
