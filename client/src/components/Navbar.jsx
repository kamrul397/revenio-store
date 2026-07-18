"use client";

import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi"; // Much cleaner mobile icon
import NavLinks from "./NavLinks";
import UserDropdown from "./UserDropdown";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  return (
    // Floating layout container with backdrop-blur and a sublte gradient background
    <div className="sticky top-0 z-50 w-full px-4 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/40 bg-white/70 shadow-[0_8px_32px_0_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:bg-white/80">
        <div className="navbar h-16 px-4 sm:px-6">
          {/* Left Side: Brand & Mobile Menu */}
          <div className="navbar-start gap-1">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost p-2 min-h-0 h-10 w-10 mr-1 md:hidden text-slate-700 hover:bg-slate-100/80 rounded-xl flex items-center justify-center transition-all"
              >
                <HiMenuAlt3 className="text-2xl" />
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-4 w-56 rounded-2xl bg-white/95 backdrop-blur-md p-3 shadow-xl border border-slate-100/80 gap-1 text-slate-600 font-medium"
              >
                <NavLinks />
              </ul>
            </div>

            {/* Eye-catching Brand Logo with Gradient & Animation */}
            <Link
              href="/"
              className="group relative flex items-center gap-2 text-2xl font-black tracking-tight"
            >
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-80">
                TechNova
              </span>
              {/* Subtle design dot that animates on logo hover */}
              <span className="h-2 w-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform duration-300" />
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="navbar-center hidden md:flex">
            <ul className="flex items-center gap-1 text-sm font-semibold text-slate-600 menu menu-horizontal p-0 bg-slate-100/50 p-1 rounded-xl border border-slate-200/40">
              <NavLinks />
            </ul>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="navbar-end gap-3">
            {user ? (
              <div className="p-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-sm">
                <div className="bg-white rounded-full p-0.5">
                  <UserDropdown />
                </div>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="btn btn-ghost min-h-0 h-10 px-4 normal-case font-semibold text-sm text-slate-700 hover:bg-slate-100/80 hover:text-slate-900 rounded-xl transition-all duration-200"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="relative group overflow-hidden min-h-0 h-10 px-5 flex items-center justify-center normal-case font-semibold text-sm text-white rounded-xl shadow-md transition-all duration-300 shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95"
                >
                  {/* Sliding Gradient Button Background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 transition-all duration-300 group-hover:opacity-90" />
                  <span className="relative z-10">Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
