import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiSearch,
  FiBell,
  FiUsers,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#18181B] border-b border-gray-800 z-50">

      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-12">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-xl font-bold text-white">
              O
            </div>

            <div>
              <h1 className="text-white text-lg font-semibold">
                Odoo India
              </h1>

              <p className="text-xs text-gray-400">
                Dashboard
              </p>
            </div>

          </div>

          {/* Navigation */}

          <div className="flex items-center gap-3">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-5 py-2 rounded-lg transition ${
                  isActive
                    ? " bg-purple-600 text-white"
                    : "text-gray-400 hover:bg-[#242428] hover:text-white"
                }`
              }
            >
              <div className="flex items-center gap-2">
                <FiUsers />
                Employees
              </div>
            </NavLink>

            <NavLink
              to="/attendance"
              className={({ isActive }) =>
                `px-5 py-2 rounded-lg transition ${
                  isActive
                    ? " bg-purple-600 text-white"
                    : "text-gray-400 hover:bg-[#242428] hover:text-white"
                }`
              }
            >
              <div className="flex items-center gap-2">
                <FiClock />
                Attendance
              </div>
            </NavLink>

            <NavLink
              to="/timeoff"
              className={({ isActive }) =>
                `px-5 py-2 rounded-lg transition ${
                  isActive
                    ? " bg-purple-600 text-white"
                    : "text-gray-400 hover:bg-[#242428] hover:text-white"
                }`
              }
            >
              <div className="flex items-center gap-2">
                <FiCalendar />
                Time Off
              </div>
            </NavLink>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          {/* Search */}


          {/* Add Employee */}

         

          {/* Notification */}

          <button className="w-11 h-11 rounded-lg bg-[#242428] hover:bg-[#303035] flex items-center justify-center text-gray-300">
            <FiBell />
          </button>

          {/* Profile */}

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Profile"
            className="w-11 h-11 rounded-full object-cover border-2  bg-purple-600 hover cursor-pointer"
          />

        </div>

      </div>

    </nav>
  );
};

export default Navbar;