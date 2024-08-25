import React from "react";
import { Link } from "react-router-dom";
import '../Styles/main.css';

const NavBar = ({ topics }) => {
  const handleTopicsSelect = (event) => {
    const selectedTopicURL = event.target.value;
    window.location.href = selectedTopicURL;
  };

  return (
    <nav className="bg-black text-white p-4">
      {/* Main container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">
          <Link to="/">Tailnews</Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-red-500">Home</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-red-500">Pages</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-red-500">Sport</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-red-500">Travel</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-red-500">Techno</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-red-500">Worklife</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-red-500">Future</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-red-500">More</Link>
          </li>
        </ul>

        {/* Topic Selector */}
        <div className="hidden md:flex items-center ml-4">
          <h1 className="mr-2 font-semibold">Choose your topic</h1>
          <form>
            <select
              id="select-bar"
              onChange={handleTopicsSelect}
              className="bg-gray-800 text-white p-2 rounded"
            >
              <option>Please select a topic...</option>
              {topics.map((topic) => (
                <option
                  className="topics-options"
                  key={topic.slug}
                  value={`/topics/${topic.slug}`}
                >
                  {topic.slug}
                </option>
              ))}
            </select>
          </form>
        </div>

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
