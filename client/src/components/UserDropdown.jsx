"use client";

import Link from "next/link";
import { toast } from "react-toastify";
import useAuth from "@/hooks/useAuth";

export default function UserDropdown() {
  const { user, logoutUser } = useAuth();

  const handleLogout = async () => {
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
        className="avatar cursor-pointer rounded-full ring-2 ring-slate-100 hover:ring-slate-200 transition p-0.5"
      >
        <div className="w-9 rounded-full">
          <img
            src={user?.photoURL || "https://i.pravatar.cc/150?img=12"}
            alt="User profile picture"
          />
        </div>
      </div>

      {/* Dropdown Card */}
      <ul
        tabIndex={0}
        className="dropdown-content z-50 mt-3 w-60 rounded-xl bg-white p-2 shadow-xl border border-slate-100 text-slate-600 gap-0.5"
      >
        {/* User Info Header */}
        <li className="px-3.5 py-2.5 flex flex-col gap-0.5 select-none pointer-events-none">
          <p className="font-semibold text-sm text-slate-900 leading-none">
            {user?.displayName || "User"}
          </p>
          <p className="text-xs text-slate-400 font-normal truncate max-w-full">
            {user?.email}
          </p>
        </li>

        {/* Minimal Divider */}
        <hr className="border-slate-100 my-1 mx-2" />

        {/* Navigation Options */}
        <li>
          <Link
            href="/items/add"
            className="flex px-3.5 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            Add Product
          </Link>
        </li>

        <li>
          <Link
            href="/items/manage"
            className="flex px-3.5 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            Manage Products
          </Link>
        </li>

        {/* Minimal Divider */}
        <hr className="border-slate-100 my-1 mx-2" />

        {/* Logout Trigger */}
        <li>
          <button
            onClick={handleLogout}
            className="flex w-full text-left px-3.5 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50/60 rounded-lg transition-colors"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
