"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import UserDropdown from "./UserDropdown";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        {/* Left Side: Brand & Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            {/* CHANGED: Swapped 'lg:hidden' to 'md:hidden' so the mobile menu shows up sooner */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-2 min-h-0 h-auto mr-2 md:hidden text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <span className="text-xl leading-none">☰</span>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-xl bg-white p-3 shadow-lg border border-slate-100 gap-1 text-slate-600"
            >
              <NavLinks />
            </ul>
          </div>

          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-slate-900 hover:opacity-90 transition"
          >
            TechNova
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        {/* CHANGED: Swapped 'hidden lg:flex' to 'hidden md:flex' */}
        {/* Center: Desktop Navigation */}
        <ul className="navbar-center hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 menu menu-horizontal p-0">
          <NavLinks />
        </ul>

        {/* Right Side: Auth Action Buttons */}
        <div className="navbar-end gap-2.5">
          {user ? (
            <UserDropdown />
          ) : (
            <>
              <Link
                href="/login"
                className="btn btn-ghost min-h-0 h-9 px-4 normal-case font-medium text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn btn-primary min-h-0 h-9 px-4 normal-case font-medium text-sm text-white bg-slate-900 hover:bg-slate-800 border-none rounded-lg shadow-sm transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
