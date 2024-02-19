import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-slate-100 shadow-md p-5">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <Link to="/">
            <span className="text-blue-500">FHandP</span>
            <span className="text-blue-700">Logo</span>
          </Link>
        </h1>

        <ul className="flex items-center gap-6">
          <Link to="/">
            <li className="hidden sm:inline hover:underline font-bold text-blue-600">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li
              className="hidden sm:inline hover:underline font-bold
             text-blue-600"
            >
              About
            </li>
          </Link>

          <Link to="/blog">
            <li
              className="hidden sm:inline hover:underline font-bold
             text-blue-600"
            >
              Blog
            </li>
          </Link>

          <Link to="/faq">
            <li
              className="hidden sm:inline hover:underline font-bold
             text-blue-600"
            >
              FAQ
            </li>
          </Link>

          <Link to="/become-agent">
            <li
              className="hidden sm:inline hover:underline font-bold
             text-blue-600"
            >
              Become agent
            </li>
          </Link>

          <Link to="/contact-us">
            <li
              className="hidden sm:inline hover:underline font-bold
             text-blue-600"
            >
              Contact us
            </li>
          </Link>

          <Link to="/sign-in">
            <li
              className="sm:inline hover:underline font-bold
             text-blue-600"
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
