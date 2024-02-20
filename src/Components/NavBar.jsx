import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo_white.png"
const NavBar = () => {
  return (
    <header className="bg-slate-500 shadow-md p-4 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="text-sm sm:text-xl flex flex-wrap">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </h1>

        <ul className="flex items-center gap-6 text-white">
          <Link to="/">
            <li className="hidden sm:inline hover:underline font-bold">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li
              className="hidden sm:inline hover:underline font-bold
             "
            >
              About
            </li>
          </Link>

          <Link to="/blog">
            <li
              className="hidden sm:inline hover:underline font-bold
            "
            >
              Blog
            </li>
          </Link>

          <Link to="/faq">
            <li
              className="hidden sm:inline hover:underline font-bold
             "
            >
              FAQ
            </li>
          </Link>

          <Link to="/become-agent">
            <li
              className="hidden sm:inline hover:underline font-bold
             "
            >
              Become agent
            </li>
          </Link>

          <Link to="/contact-us">
            <li
              className="hidden sm:inline hover:underline font-bold
             "
            >
              Contact us
            </li>
          </Link>

          <Link to="/sign-in">
            <li
              className="sm:inline hover:underline font-bold
             "
            >
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
