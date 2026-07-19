"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBoxOpen,
  FaPlusCircle,
  FaChartLine,
  FaUserCircle,
  FaLayerGroup,
} from "react-icons/fa";

export default function SidebarNav() {
  const pathname = usePathname();

  const menuItems = [
    { title: "Add Product", href: "/items/add", icon: FaPlusCircle },
    { title: "Manage Products", href: "/items/manage", icon: FaBoxOpen },
    { title: "Browse Store", href: "/items", icon: FaChartLine },
    { title: "My Profile", href: "/profile", icon: FaUserCircle },
  ];

  return (
    <aside className="sticky top-0 z-20 flex w-full flex-row border-b border-slate-200/80 bg-white/90 p-4 backdrop-blur-md md:static md:z-0 md:h-fit md:w-64 md:flex-col md:justify-center md:rounded-3xl md:border md:border-slate-200/60 md:p-6 md:shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:ml-6 transition-all duration-300">
      {/* Logo Header */}
      <Link
        href="/"
        className="group hidden items-center gap-3 pb-6 md:flex border-b border-slate-100 mb-6"
      >
        {/* Icon Container with premium pulse glow scaling */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-[0_4px_12px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_4px_20px_rgba(6,182,212,0.5)]">
          <FaLayerGroup size={20} />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-lg font-bold text-slate-800 leading-tight tracking-tight group-hover:text-cyan-600 transition-colors duration-300">
            Revenio
          </h2>
          <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            Control Panel
          </span>
        </div>
      </Link>

      {/* Navigation Links */}
      <nav className="flex w-full flex-row justify-around gap-2 md:flex-col md:justify-start md:space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 overflow-hidden ${
                isActive
                  ? "bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-[0_10px_20px_rgba(15,23,42,0.15)] scale-[1.02]"
                  : "text-slate-600 border border-transparent hover:border-slate-100 hover:bg-slate-50/80 hover:text-slate-950 md:hover:translate-x-1"
              }`}
            >
              {/* Premium Side Accent Bar for Active State */}
              {isActive && (
                <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-cyan-400 to-blue-500 rounded-r-md" />
              )}

              <Icon
                size={18}
                className={`transition-transform duration-300 group-hover:scale-110 ${
                  isActive
                    ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                    : "text-slate-400 group-hover:text-cyan-500"
                }`}
              />

              <span className="hidden md:inline relative z-10 transition-colors duration-200">
                {item.title}
              </span>

              {/* Decorative Subtle Hover Glow Ripple */}
              {!isActive && (
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/[0.03] to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
