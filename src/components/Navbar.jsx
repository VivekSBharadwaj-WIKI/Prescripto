import React, { useState } from "react";
import { assets, doctors } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [islogged, setIslogged] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  let dropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <nav>
      <div className=" h-[77px] max-w-7xl mx-auto flex items-center justify-between px-6 py-4 border-b border-gray-400">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={assets.logo} alt="logo" className="w-35" />
          </Link>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link
            to="/"
            className="relative group text-gray-700 hover:text-blue-600 transition"
          >
            HOME
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>

          <Link
            to="/doctors"
            className="relative group text-gray-700 hover:text-blue-600 transition"
          >
            ALL DOCTORS
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>

          <Link
            to="/about"
            className="relative group text-gray-700 hover:text-blue-600 transition"
          >
            ABOUT
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>

          <Link
            to="/contact"
            className="relative group text-gray-700 hover:text-blue-600 transition"
          >
            CONTACT
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
        </div>

        {/* Right Button */}
        <button
          onClick={() => setIslogged(!islogged)}
          className="text-white rounded-full text-sm w-1/8"
        >
          {islogged ? (
            <div>
              <div className="w-full bg-blue-500 rounded-full flex items-center gap-2">
                <img src={assets.profile_pic} alt="" className="w-10 h-10 rounded-full bg-transparent border-1 border-black m-1"/>
                
              </div>
            </div>
            ) : (
            <div><p className="w-full px-6 py-3 m-1 bg-blue-500 text-white rounded-full">Create Account</p></div>
            )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
