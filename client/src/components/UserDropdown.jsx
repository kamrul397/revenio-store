"use client";

import Link from "next/link";
import { toast } from "react-toastify";
import {
  HiOutlineLogout,
  HiOutlineUser,
  HiOutlineViewGrid,
} from "react-icons/hi";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

export default function UserDropdown() {
  const { user, logoutUser } = useAuth();

  // Helper function to force-close the dropdown when a link is clicked
  const closeDropdown = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const handleLogout = async () => {
    closeDropdown(); // Close menu instantly on logout click
    try {
      await logoutUser();
      toast.success("Logout Successful");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="dropdown dropdown-end">
      {/* Avatar Button */}
      <div
        tabIndex={0}
        role="button"
        className="avatar cursor-pointer rounded-full transition-all duration-300 active:scale-95 block"
      >
        <div className="w-9 h-9 rounded-full relative overflow-hidden ring-2 ring-cyan-500/30 hover:ring-cyan-500 transition-all duration-300 shadow-md shadow-slate-900/5">
          {user?.photoURL ? (
            <Image
              src={user.photoURL}
              alt="User profile picture"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          ) : (
            /* Elegant Premium SVG Avatar Fallback */
            <div className="w-full h-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs uppercase select-none">
              {user?.displayName ? (
                user.displayName.substring(0, 2)
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 opacity-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Dropdown Card */}
      <ul className="dropdown-content z-[60] mt-4 w-64 rounded-2xl bg-white/95 backdrop-blur-md p-2 shadow-[0_10px_40px_-10px_rgba(15,23,42,0.15)] border border-slate-100 gap-1">
        {/* Profile Header */}
        <div className="mx-1 mt-1 mb-2 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/70 p-3 border border-slate-200/40">
          <p className="font-bold text-slate-800 text-sm tracking-tight truncate">
            {user?.displayName || "User Profile"}
          </p>
          <p className="text-xs text-slate-500 truncate mt-0.5">
            {user?.email}
          </p>
        </div>

        {/* Navigation Action Links */}
        <li>
          <Link
            href="/dashboard"
            onClick={closeDropdown} // Added click handler here
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 active:scale-98 transition-all duration-200"
          >
            <HiOutlineViewGrid className="text-lg text-slate-400" />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            href="/profile"
            onClick={closeDropdown} // Added click handler here
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 active:scale-98 transition-all duration-200"
          >
            <HiOutlineUser className="text-lg text-slate-400" />
            Account Settings
          </Link>
        </li>

        <div className="border-t border-slate-100 my-1 mx-2"></div>

        {/* Logout Action */}
        <li>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 hover:text-red-600 active:scale-98 transition-all duration-200"
          >
            <HiOutlineLogout className="text-lg" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
