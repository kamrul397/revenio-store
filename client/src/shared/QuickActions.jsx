import React from "react";
import Link from "next/link";
import {
  FaBoxOpen,
  FaPlusCircle,
  FaChartLine,
  FaUserCircle,
} from "react-icons/fa";

const QuickActions = () => {
  const menuItems = [
    {
      title: "Add Product",
      desc: "Create a new product",
      href: "/items/add",
      icon: FaPlusCircle,
      bgLight: "from-cyan-50 to-blue-50",
      iconBg: "bg-cyan-600",
    },
    {
      title: "Manage Products",
      desc: "Edit & delete products",
      href: "/items/manage",
      icon: FaBoxOpen,
      bgLight: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-600",
    },
    {
      title: "Browse Store",
      desc: "View all products",
      href: "/items",
      icon: FaChartLine,
      bgLight: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-600",
    },
    {
      title: "My Profile",
      desc: "Account information",
      href: "/profile",
      icon: FaUserCircle,
      bgLight: "from-pink-50 to-rose-50",
      iconBg: "bg-pink-600",
    },
  ];

  return (
    /* Flex container forcing items into a single line row layout on tablet/desktop views */
    <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-stretch gap-4 w-full">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.title}
            href={item.href}
            className={`group flex-1 min-w-[200px] flex items-center gap-4 rounded-2xl border border-slate-100 bg-gradient-to-br ${item.bgLight} p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
          >
            {/* Left aligned dynamic icon setup */}
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.iconBg} text-white shadow-sm transition group-hover:scale-105`}
            >
              <Icon size={18} />
            </div>

            {/* Right side textual details wrapper */}
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                {item.title}
              </h3>
              <p className="mt-0.5 text-xs text-slate-400 leading-normal truncate">
                {item.desc}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickActions;
