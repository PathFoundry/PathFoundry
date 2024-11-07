import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  BriefcaseIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import "/src/css/forms.css";

const Sidebar = ({ inputRef, onChange }) => {
  return (
    <aside
      id="sidebar-container"
      className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700"
    >
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>

        <input
          type="text"
          ref={inputRef}
          onChange={onChange}
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          placeholder="Search"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            to="/"
          >
            <HomeIcon className="w-6 h-6" />
            <span className="mx-4 font-medium">Homepage</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            to="/jobs/addjob"
          >
            <BriefcaseIcon className="w-6 h-6" />
            <span className="mx-4 font-medium">Create Job</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            to="/about"
          >
            <InformationCircleIcon className="w-6 h-6" />
            <span className="mx-4 font-medium">About</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
