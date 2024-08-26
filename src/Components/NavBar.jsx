import React from "react";
import { Link } from "react-router-dom";
import '../Styles/main.css';

const NavBar = ({ topics }) => {
  return (
    <nav className="bg-black text-white p-4">
      {/* Main container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">
          <Link to="/">FakeNews</Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex justify-center w-full space-x-6"> {/* Center items with justify-center */}
          <li>
            <Link to="/" className="hover:text-red-500">HOME</Link>
          </li>
          {/* Dynamically generated topic links */}
          {topics.map((topic) => (
            <li key={topic.slug}>
              <Link to={`/topics/${topic.slug}`} className="hover:text-red-500">
                {topic.slug.toUpperCase()} {/* Capitalize the whole word */}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
